# Groundhopping

A map of the Leinster Senior League football games I go to, plus the odd pre-season friendly and charity match. League of Ireland games already live in [Momento](https://momento.app), so this covers the games no app tracks.

**Live:** https://jaslloyd.github.io/groundhopping/ — or open `index.html` locally. No build step, no server.

- **Games** tab: every game, newest first. Click one to fly to the ground.
- **Clubs** tab: every club I've seen, with how many times. Click a club to filter the map to just its grounds and games.

## How the data gets made

The photos I take at games are the source of truth. Each one gets a title (`Home vs Away`), a caption (`Home vs Away – Ground, D Mon YYYY.`) and keywords (`Football` plus both clubs) in Apple Photos, and the photo's GPS gives the ground.

1. [osxphotos](https://github.com/RhetTbull/osxphotos) finds photos taken near pitches and pulls local previews, so nothing has to download from iCloud.
2. I look at a handful at a time and say who was playing; unknown opponents get `[TBC]`.
3. `tools/tag.applescript` writes the title, caption and keywords back to Photos, checking the location is untouched.
4. The tagged photos are grouped by ground into the `grounds` data embedded in `index.html`.

## Credits

- Map tiles © [Esri](https://www.esri.com). Map library: [Leaflet](https://leafletjs.com).
- Club crests belong to their clubs. Most come from their Wikipedia pages; clubs without one get an initials badge.
