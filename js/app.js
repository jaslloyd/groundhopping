// Groundhopping map: draws every ground from GROUNDS (data/grounds.js) on a Leaflet map,
// lists the games in the sidebar, and lets you filter the map to a single club.

const PHONE_WIDTH = 760;

// ---------- Helpers ----------

const parseDate = (iso) => new Date(`${iso}T12:00`);
const shortDate = (iso) => parseDate(iso).toLocaleDateString("en-IE", { day: "numeric", month: "short" });
const monthLabel = (iso) => parseDate(iso).toLocaleDateString("en-IE", { month: "long", year: "numeric" });
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

// "Home vs Away", or "Home 2–2 Away" when the score is known.
const matchLabel = (game) => (game.score ? game.title.replace(" vs ", ` ${game.score} `) : game.title);

// "Palmerstown Community School · LSL Senior 1A Sunday", or just the ground if the competition isn't known.
const venueLine = (game) => [game.groundName, game.competition].filter(Boolean).join(" · ");

// "St Patrick's CY" -> "SP", "Glenville FC" -> "G"
const initials = (name) =>
  name
    .replace(/\b(FC|AFC|CY)\b/g, "")
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

// A stable colour per club name, so placeholders don't change between visits.
const colourFor = (name) => {
  const hash = [...name].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
  return `hsl(${hash % 360} 45% 38%)`;
};

// Photos live in photos/ (1800px) with small copies in photos/thumbs/ (480px).
const photoUrl = (file) => `photos/${file}`;
const thumbUrl = (file) => `photos/thumbs/${file}`;

// A clickable thumbnail of a game's first photo, with a count when there are more.
const thumbHtml = (game) =>
  game.photos?.length
    ? `<span class="thumb" role="button" tabindex="0" data-game="${game.id}" aria-label="Photos of ${game.title}">` +
      `<img src="${thumbUrl(game.photos[0])}" alt="" loading="lazy">` +
      `${game.photos.length > 1 ? `<span>${game.photos.length}</span>` : ""}</span>`
    : "";

const scrollToMapOnPhones = () => {
  if (innerWidth <= PHONE_WIDTH) scrollTo({ top: 0, behavior: "smooth" });
};

// ---------- Data ----------

// Every game, newest first, remembering which ground it was at. The game objects are shared
// with GROUNDS, so a game's id works whether it came from a ground or from this list.
const games = GROUNDS
  .flatMap((ground, groundIndex) => ground.games.map((game) => Object.assign(game, { groundIndex, groundName: ground.name })))
  .sort((a, b) => b.date.localeCompare(a.date));
games.forEach((game, id) => (game.id = id));

// Club name -> the games I saw them play (charity matches don't count).
const gamesByClub = {};
for (const game of games) {
  if (game.tags?.includes("Charity match")) continue;
  for (const club of game.clubs) (gamesByClub[club] ??= []).push(game);
}

const clubCount = new Set(games.flatMap((game) => game.clubs)).size;

// ---------- Map ----------

const map = L.map("map");
const darkMode = matchMedia("(prefers-color-scheme: dark)").matches;

// Esri tiles: OpenStreetMap and CARTO block pages opened straight from disk.
const TILES = darkMode
  ? "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
  : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";
L.tileLayer(TILES, { maxZoom: darkMode ? 16 : 19, attribution: "Tiles &copy; Esri" }).addTo(map);

const pinIcon = (count, highlighted = false) => {
  const size = count > 1 ? 30 : 24;
  return L.divIcon({
    className: "",
    html: `<div class="pin${highlighted ? " highlighted" : ""}" style="width:${size}px;height:${size}px">${count}</div>`,
    iconSize: [size, size],
  });
};

const popupHtml = (ground, gamesShown) =>
  `<b>${ground.name}</b><ul>${gamesShown
    .map((game) => `<li>${shortDate(game.date)} ${game.date.slice(0, 4)} · ${matchLabel(game)}${game.competition ? `<br><small>${game.competition}</small>` : ""}${thumbHtml(game)}</li>`)
    .join("")}</ul>`;

// One marker per ground, in the same order as GROUNDS.
const markers = GROUNDS.map((ground) =>
  L.marker([ground.lat, ground.lon], { icon: pinIcon(ground.games.length) })
    .bindPopup(popupHtml(ground, ground.games))
    .addTo(map)
);

const allGroundsBounds = L.featureGroup(markers).getBounds().pad(0.1);
map.fitBounds(allGroundsBounds);

const flyToGround = (groundIndex) => {
  const marker = markers[groundIndex];
  map.flyTo(marker.getLatLng(), 15, { duration: 0.8 });
  marker.openPopup();
  scrollToMapOnPhones();
};

const SITE_TITLE = document.title;

// A game's id in a link: "2026-10-24-dublin-bus-fc-vs-blackrock-college-afc". The date alone
// won't do, as I've been to two games on the same day, and the position in the games list
// changes every time a game is added. Only retitling a game changes its link.
const gameSlug = (game) =>
  `${game.date} ${game.title}`
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// What the address bar is pointing at: a filtered club, open photos, or both.
let selectedClub = null;
let openGame = null;

// Keep both in the address bar (?club=Glenville%20FC, ?game=2026-04-15-glenville-fc-vs-templeogue-united-fc)
// so either view can be shared, and show whichever is in front in the tab title.
function syncUrlAndTitle() {
  const url = new URL(location.href);
  for (const [key, value] of [["club", selectedClub], ["game", openGame && gameSlug(openGame)]]) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  history.replaceState(null, "", url);

  const inFront = openGame ? matchLabel(openGame) : selectedClub;
  document.title = inFront ? `${SITE_TITLE} - ${inFront}` : SITE_TITLE;
}

// "Glenville FC · 5 games  ✕ Show all" button, shown while the map is filtered.
const showAllControl = L.control({ position: "topright" });
showAllControl.onAdd = () => {
  const button = L.DomUtil.create("button", "show-all");
  L.DomEvent.disableClickPropagation(button);
  button.addEventListener("click", clearClubSelection);
  return button;
};

// Show only the grounds where this club played, with counts and popups for that club.
function filterMapToClub(club) {
  map.closePopup();
  selectedClub = club;
  syncUrlAndTitle();
  const visible = [];

  GROUNDS.forEach((ground, i) => {
    const clubGames = gamesByClub[club].filter((game) => game.groundIndex === i);
    const marker = markers[i];
    if (clubGames.length === 0) {
      marker.remove();
      return;
    }
    marker.setIcon(pinIcon(clubGames.length, true));
    marker.setPopupContent(popupHtml(ground, clubGames));
    marker.addTo(map);
    visible.push(marker);
  });

  showAllControl.remove();
  showAllControl.addTo(map);
  showAllControl.getContainer().innerHTML =
    `<b>${club}</b> · ${plural(gamesByClub[club].length, "game")} &nbsp;✕ Show all`;

  if (visible.length === 1) {
    map.flyTo(visible[0].getLatLng(), 14, { duration: 0.8 });
  } else {
    map.flyToBounds(L.featureGroup(visible).getBounds().pad(0.25), { duration: 0.8, maxZoom: 14 });
  }
  scrollToMapOnPhones();
}

// Put every ground back with its full game count.
function showAllGrounds() {
  map.closePopup();
  selectedClub = null;
  syncUrlAndTitle();
  showAllControl.remove();
  GROUNDS.forEach((ground, i) => {
    markers[i].setIcon(pinIcon(ground.games.length));
    markers[i].setPopupContent(popupHtml(ground, ground.games));
    markers[i].addTo(map);
  });
  map.flyToBounds(allGroundsBounds, { duration: 0.8 });
}

// ---------- Sidebar header ----------

const firstYear = games.at(-1).date.slice(0, 4);
const lastYear = games[0].date.slice(0, 4);
document.getElementById("subtitle").textContent = `The games that are hard to track · ${firstYear}–${lastYear}`;

document.getElementById("stats").innerHTML = [
  [games.length, "Games"],
  [GROUNDS.length, "Grounds"],
  [clubCount, "Clubs"],
].map(([n, label]) => `<div>${n}<span>${label}</span></div>`).join("");

// ---------- Games tab ----------

const gamesPanel = document.getElementById("games");

function renderGames() {
  const monthCounts = {};
  for (const game of games) {
    const month = monthLabel(game.date);
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  }

  let html = "";
  let currentMonth = "";
  for (const game of games) {
    const month = monthLabel(game.date);
    if (month !== currentMonth) {
      const count = monthCounts[month];
      html += `<div class="month">${month}<span>${count} ${count === 1 ? "game" : "games"}</span></div>`;
      currentMonth = month;
    }
    html += `
      <button class="game" data-ground="${game.groundIndex}">
        <span class="game-date">${shortDate(game.date)}</span>
        <span>
          <span class="game-title">${matchLabel(game)}</span><br>
          <span class="game-ground">${venueLine(game)}</span>
        </span>
        ${thumbHtml(game)}
      </button>`;
  }
  gamesPanel.innerHTML = html;
}

gamesPanel.addEventListener("click", (event) => {
  const button = event.target.closest(".game");
  if (button) flyToGround(Number(button.dataset.ground));
});

// ---------- Clubs tab ----------

const clubsPanel = document.getElementById("clubs");

// Most-seen first, then alphabetical.
const clubNames = Object.keys(gamesByClub).sort(
  (a, b) => gamesByClub[b].length - gamesByClub[a].length || a.localeCompare(b)
);

const crestHtml = (club) =>
  CRESTS[club]
    ? `<img src="${CRESTS[club]}" alt="">`
    : `<span class="badge" style="--badge-colour:${colourFor(club)}">${initials(club)}</span>`;

function renderClubs() {
  const cards = clubNames.map((club) => `
    <button class="club" data-club="${club}">
      ${crestHtml(club)}
      <span class="club-name">${club}</span>
      <span class="club-count">${plural(gamesByClub[club].length, "game")}</span>
    </button>`).join("");

  const found = clubNames.filter((club) => CRESTS[club]).length;
  clubsPanel.innerHTML = `
    <div class="club-grid">${cards}</div>
    <p class="hint">${found} of ${clubNames.length} crests found · dashed badges are placeholders</p>`;
}

const clubGrid = () => clubsPanel.querySelector(".club-grid");

function clearClubSelection() {
  clubGrid().querySelector(".club-games")?.remove();
  clubGrid().querySelectorAll(".club.selected").forEach((card) => card.classList.remove("selected"));
  showAllGrounds();
}

// Insert the club's games list at the end of the row the card is on.
function showClubGames(card) {
  const grid = clubGrid();
  const club = card.dataset.club;
  const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  const items = [...grid.children];
  const index = items.indexOf(card);
  const rowEnd = Math.min(items.length - 1, index - (index % columns) + columns - 1);

  const panel = document.createElement("div");
  panel.className = "club-games";
  panel.innerHTML = `<b>${club}</b><ul>${gamesByClub[club]
    .map((game) => `<li data-ground="${game.groundIndex}">${shortDate(game.date)} ${game.date.slice(0, 4)} · ${matchLabel(game)} <span class="game-ground">(${venueLine(game)})</span></li>`)
    .join("")}</ul>`;
  items[rowEnd].after(panel);
}

clubsPanel.addEventListener("click", (event) => {
  const gameItem = event.target.closest(".club-games li");
  if (gameItem) {
    flyToGround(Number(gameItem.dataset.ground));
    return;
  }

  const card = event.target.closest(".club");
  if (!card) return;

  const wasSelected = card.classList.contains("selected");
  clubGrid().querySelector(".club-games")?.remove();
  clubGrid().querySelectorAll(".club.selected").forEach((c) => c.classList.remove("selected"));

  // Clicking the selected club again clears the filter.
  if (wasSelected) {
    showAllGrounds();
    return;
  }

  selectClub(card);
});

function selectClub(card) {
  card.classList.add("selected");
  filterMapToClub(card.dataset.club);
  showClubGames(card);
}

// ---------- Grounds tab ----------

const groundsPanel = document.getElementById("grounds");

// Every ground A-Z, so a name can be found by scanning. The Numbers tab is where
// they're ranked by how often I've been.
const groundRows = GROUNDS
  .map((ground, groundIndex) => ({
    name: ground.name,
    groundIndex,
    games: ground.games.length,
    // The games are already newest first within a ground once app.js has sorted them.
    latest: ground.games.reduce((newest, game) => (game.date > newest ? game.date : newest), ""),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function renderGrounds() {
  const rows = groundRows.map(({ name, groundIndex, games, latest }) => `
    <button class="ground" data-ground="${groundIndex}">
      <span class="ground-date">${shortDate(latest)}<br>${latest.slice(0, 4)}</span>
      <span class="ground-name">${name}</span>
      <span class="ground-count">${games > 1 ? plural(games, "game") : ""}</span>
    </button>`).join("");

  const repeat = groundRows.filter((ground) => ground.games > 1).length;
  groundsPanel.innerHTML = `${rows}
    <p class="hint">${plural(GROUNDS.length, "ground")} · ${repeat} I've been back to · the date is my most recent game there</p>`;
}

groundsPanel.addEventListener("click", (event) => {
  const button = event.target.closest(".ground");
  if (button) flyToGround(Number(button.dataset.ground));
});

// ---------- Numbers tab ----------

const numbersPanel = document.getElementById("numbers");

// Games with a known score, split into the goals each side got.
const scoredGames = games
  .filter((game) => game.score)
  .map((game) => {
    const [home, away] = game.score.split(/[\u2013-]/).map(Number);
    return { game, home, away };
  });

const goalsSeen = scoredGames.reduce((total, g) => total + g.home + g.away, 0);
const goalsPerGame = (goalsSeen / scoredGames.length).toFixed(1);
const photoCount = games.reduce((total, game) => total + (game.photos?.length ?? 0), 0);

// Who won, as a scale running from home win through draw to away win.
const RESULTS = [
  ["Home wins", scoredGames.filter((g) => g.home > g.away).length, "home"],
  ["Draws", scoredGames.filter((g) => g.home === g.away).length, "draw"],
  ["Away wins", scoredGames.filter((g) => g.home < g.away).length, "away"],
];

// { key: how many games }, most first, then alphabetical.
const tallyGames = (keyOf) => {
  const counts = {};
  for (const game of games) {
    const key = keyOf(game);
    if (key != null) counts[key] = (counts[key] || 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

const groundCounts = tallyGames((game) => game.groundName);
const competitionCounts = tallyGames((game) => game.competition ?? "Not known");
const monthCounts = tallyGames((game) => Number(game.date.slice(5, 7)));

// The game with the most of something; ties go to the most recent, as games are newest first.
const gameWithMost = (valueOf) =>
  scoredGames.reduce((best, g) => (valueOf(g) > valueOf(best) ? g : best));

// One row: name, a bar of its share of the biggest value, the count. Rows with a ground fly there.
const barRow = (label, count, max, groundIndex) => `
  <li${groundIndex === undefined ? "" : ` data-ground="${groundIndex}" tabindex="0" role="button"`}>
    <span class="bar-label">${label}</span>
    <span class="bar-track"><span class="bar-fill" style="width:${(count / max) * 100}%"></span></span>
    <span class="bar-value">${count}</span>
  </li>`;

const barList = (rows, groundIndexOf) => {
  const max = Math.max(...rows.map(([, count]) => count));
  return `<ul class="bars">${rows
    .map(([label, count]) => barRow(label, count, max, groundIndexOf?.(label)))
    .join("")}</ul>`;
};

// A column per month, so the season's shape and the gaps in it are visible at a glance.
// Only the busiest month is labelled; the rest are in each column's tooltip.
const monthStrip = () => {
  const byMonth = Object.fromEntries(monthCounts);
  const busiest = Math.max(...Object.values(byMonth));
  const months = Array.from({ length: 12 }, (_, i) => ({
    name: new Date(2000, i, 1).toLocaleDateString("en-IE", { month: "long" }),
    count: byMonth[i + 1] || 0,
  }));

  const columns = months.map(({ name, count }) => `
      <div class="column" title="${name}: ${plural(count, "game")}">
        <span class="column-value">${count === busiest ? count : ""}</span>
        <span class="column-track"><span class="column-fill" style="height:${(count / busiest) * 100}%"></span></span>
        <span class="column-label">${name[0]}</span>
      </div>`);

  const spoken = months.map(({ name, count }) => `${name} ${count}`).join(", ");
  return `<div class="columns" role="img" aria-label="Games by month: ${spoken}">${columns.join("")}</div>`;
};

const recordRow = (label, { game, home, away }, note) => `
  <li data-ground="${game.groundIndex}" tabindex="0" role="button">
    <span class="record-label">${label}</span>
    <span class="record-game">${matchLabel(game)}</span>
    <span class="record-note">${note(home, away)}</span>
  </li>`;

function renderNumbers() {
  const section = (title, note, body) =>
    `<h3 class="section">${title}${note ? `<span>${note}</span>` : ""}</h3>${body}`;

  const resultsTotal = RESULTS.reduce((total, [, count]) => total + count, 0);

  numbersPanel.innerHTML = `
    <div class="stats">
      ${[[goalsSeen, "Goals"], [goalsPerGame, "A game"], [photoCount, "Photos"]]
        .map(([value, label]) => `<div>${value}<span>${label}</span></div>`)
        .join("")}
    </div>

    ${section("Records", null, `<ul class="records">
      ${recordRow("Most goals", gameWithMost((g) => g.home + g.away), (h, a) => `${h + a} goals`)}
      ${recordRow("Biggest win", gameWithMost((g) => Math.abs(g.home - g.away)), (h, a) => `by ${Math.abs(h - a)}`)}
    </ul>`)}

    ${section("Who won", `${scoredGames.length} games with a score`, `
      <ul class="split">
        ${RESULTS.map(([label, count, slot]) => `
          <li>
            <span class="swatch" data-result="${slot}"></span>
            <span class="bar-label">${label}</span>
            <span class="bar-value">${count}</span>
          </li>`).join("")}
      </ul>
      <div class="split-bar" role="img" aria-label="${RESULTS.map(([label, count]) => `${label} ${count}`).join(", ")}">
        ${RESULTS.map(([, count, slot]) => `<span data-result="${slot}" style="width:${(count / resultsTotal) * 100}%"></span>`).join("")}
      </div>`)}

    ${section("When I go", "games by month", monthStrip())}

    ${section("Most-visited grounds", "tap to fly there", barList(
      groundCounts.filter(([, count]) => count > 1),
      (name) => GROUNDS.findIndex((ground) => ground.name === name),
    ))}

    ${section("Competitions", null, barList(competitionCounts))}`;
}

// Flying to a ground works from a grounds bar or a record.
const flyFromNumbers = (event) => {
  const row = event.target.closest("[data-ground]");
  if (!row || (event.type === "keydown" && event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  flyToGround(Number(row.dataset.ground));
};
numbersPanel.addEventListener("click", flyFromNumbers);
numbersPanel.addEventListener("keydown", flyFromNumbers);

// ---------- Photo viewer ----------

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
let viewing = { game: null, index: 0 };

function showPhoto(index) {
  const { photos } = viewing.game;
  viewing.index = (index + photos.length) % photos.length;
  lightboxImage.src = photoUrl(photos[viewing.index]);
  lightboxImage.alt = `${matchLabel(viewing.game)}, photo ${viewing.index + 1} of ${photos.length}`;
  lightboxCaption.textContent = viewing.game.caption + (photos.length > 1 ? ` · ${viewing.index + 1} of ${photos.length}` : "");
  lightbox.classList.toggle("single", photos.length === 1);
}

function openPhotos(game) {
  viewing = { game, index: 0 };
  showPhoto(0);
  lightbox.showModal();
  openGame = game;
  syncUrlAndTitle();
}

// Covers every way out of the photos: the close button, the backdrop and Escape.
lightbox.addEventListener("close", () => {
  openGame = null;
  syncUrlAndTitle();
});

// Capture phase, so tapping a thumbnail opens the photos instead of also flying to the ground.
const openFromThumb = (event) => {
  const thumb = event.target.closest?.(".thumb");
  if (!thumb || (event.type === "keydown" && event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  event.stopPropagation();
  openPhotos(games[thumb.dataset.game]);
};
document.addEventListener("click", openFromThumb, true);
document.addEventListener("keydown", openFromThumb, true);

lightbox.addEventListener("click", (event) => {
  if (event.target.closest(".lightbox-prev")) showPhoto(viewing.index - 1);
  else if (event.target.closest(".lightbox-next")) showPhoto(viewing.index + 1);
  else if (event.target === lightbox || event.target.closest(".lightbox-close")) lightbox.close();
});

lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showPhoto(viewing.index - 1);
  if (event.key === "ArrowRight") showPhoto(viewing.index + 1);
});

// Swipe left or right on phones.
let touchStartX = null;
lightbox.addEventListener("touchstart", (event) => (touchStartX = event.touches[0].clientX), { passive: true });
lightbox.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50 && viewing.game.photos.length > 1) showPhoto(viewing.index + (dx < 0 ? 1 : -1));
});

// ---------- Tabs ----------

const panels = { games: gamesPanel, clubs: clubsPanel, grounds: groundsPanel, numbers: numbersPanel };

function switchTab(name) {
  document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === name));
  for (const [tab, panel] of Object.entries(panels)) panel.hidden = tab !== name;
}

document.querySelector(".tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("button");
  if (!tab) return;
  switchTab(tab.dataset.tab);

  // Leaving the Clubs tab drops any club filter, so every ground is back on the map.
  if (tab.dataset.tab !== "clubs" && clubGrid().querySelector(".club.selected")) clearClubSelection();
});

// ---------- Start ----------

renderGames();
renderClubs();
renderGrounds();
renderNumbers();

// Opened from a shared link? Jump straight to that club (name match ignores case).
const shared = new URLSearchParams(location.search);
const sharedClub = shared.get("club")?.toLowerCase();
const sharedCard = sharedClub && [...clubsPanel.querySelectorAll(".club")].find((c) => c.dataset.club.toLowerCase() === sharedClub);
if (sharedCard) {
  switchTab("clubs");
  selectClub(sharedCard);
}

// Shared link to a game: show the ground and open its photos. A club in the same link has
// already flown the map to its grounds, so leave that view alone.
const sharedSlug = shared.get("game")?.toLowerCase();
const sharedGame = sharedSlug && games.find((game) => gameSlug(game) === sharedSlug);
if (sharedGame) {
  if (!sharedCard) flyToGround(sharedGame.groundIndex);
  if (sharedGame.photos?.length) openPhotos(sharedGame);
}
