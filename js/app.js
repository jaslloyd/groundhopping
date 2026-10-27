// Groundhopping map: draws every ground from GROUNDS (data/grounds.js) on a Leaflet map,
// lists the games in the sidebar, and lets you filter the map to a single club.

// Keywords on a game that aren't club names (tags, places, people).
const NON_CLUB_KEYWORDS = /Pre-season|Representative|Charity|Played|Park$|League decider|Noely|Lonergan|Selection|Grangegorman/;

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

const clubsIn = (game) => game.keywords.filter((k) => !NON_CLUB_KEYWORDS.test(k));

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

const scrollToMapOnPhones = () => {
  if (innerWidth <= PHONE_WIDTH) scrollTo({ top: 0, behavior: "smooth" });
};

// ---------- Data ----------

// Every game, newest first, remembering which ground it was at.
const games = GROUNDS
  .flatMap((ground, groundIndex) => ground.games.map((game) => ({ ...game, groundIndex, groundName: ground.name })))
  .sort((a, b) => b.date.localeCompare(a.date));

// Club name -> the games I saw them play (charity matches don't count).
const gamesByClub = {};
for (const game of games) {
  if (game.keywords.includes("Charity match")) continue;
  for (const club of clubsIn(game)) (gamesByClub[club] ??= []).push(game);
}

const clubCount = new Set(games.flatMap(clubsIn)).size;

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
    .map((game) => `<li>${shortDate(game.date)} ${game.date.slice(0, 4)} · ${matchLabel(game)}${game.competition ? `<br><small>${game.competition}</small>` : ""}</li>`)
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

// Keep the selected club in the address bar (?club=Glenville%20FC) so a filtered view can be shared.
function setClubInUrl(club) {
  const url = new URL(location.href);
  if (club) url.searchParams.set("club", club);
  else url.searchParams.delete("club");
  history.replaceState(null, "", url);
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
  setClubInUrl(club);
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
  setClubInUrl(null);
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
  let html = "";
  let currentMonth = "";
  for (const game of games) {
    const month = monthLabel(game.date);
    if (month !== currentMonth) {
      html += `<div class="month">${month}</div>`;
      currentMonth = month;
    }
    html += `
      <button class="game" data-ground="${game.groundIndex}">
        <span class="game-date">${shortDate(game.date)}</span>
        <span>
          <span class="game-title">${matchLabel(game)}</span><br>
          <span class="game-ground">${venueLine(game)}</span>
        </span>
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

// ---------- Tabs ----------

function switchTab(name) {
  document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === name));
  gamesPanel.hidden = name !== "games";
  clubsPanel.hidden = name !== "clubs";
}

document.querySelector(".tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("button");
  if (!tab) return;
  switchTab(tab.dataset.tab);

  // Leaving the Clubs tab drops any club filter.
  if (tab.dataset.tab === "games" && clubGrid().querySelector(".club.selected")) clearClubSelection();
});

// ---------- Start ----------

renderGames();
renderClubs();

// Opened from a shared link? Jump straight to that club (name match ignores case).
const sharedClub = new URLSearchParams(location.search).get("club")?.toLowerCase();
const sharedCard = sharedClub && [...clubsPanel.querySelectorAll(".club")].find((c) => c.dataset.club.toLowerCase() === sharedClub);
if (sharedCard) {
  switchTab("clubs");
  selectClub(sharedCard);
}
