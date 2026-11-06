// Every ground I've been to, with the games I saw there.
// Each game: title ("Home vs Away"), date (YYYY-MM-DD), optional score ("2–2", home first),
// optional competition (league or cup, from Final Whistle), caption, clubs (the teams that played)
// and optional tags (anything else keyworded in Photos: the competition type, places, people).
const GROUNDS = [
  {
    "name": "AUL Complex, Clonshaugh",
    "lat": 53.41978,
    "lon": -6.2162,
    "games": [
      {
        "title": "St Pats vs Bray",
        "date": "2023-01-28",
        "competition": "Pre-season friendly",
        "caption": "St Pats vs Bray – pre-season friendly, AUL Complex, Clonshaugh, 28 Jan 2023.",
        "clubs": [
          "Bray Wanderers",
          "St Patrick's Athletic"
        ],
        "tags": [
          "Pre-season friendly"
        ],
        "photos": [
          "2023-01-28-st-pats-bray-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "TU Dublin Blanchardstown",
    "lat": 53.40573,
    "lon": -6.38207,
    "games": [
      {
        "title": "St Pats vs Drogheda",
        "date": "2024-01-26",
        "competition": "Pre-season friendly",
        "caption": "St Pats vs Drogheda – pre-season friendly, TU Dublin Blanchardstown, 26 Jan 2024. Tommy Lonergan's last game for Pats before he joined Fleetwood Town.",
        "clubs": [
          "Drogheda United",
          "St Patrick's Athletic"
        ],
        "tags": [
          "Pre-season friendly",
          "Tommy Lonergan"
        ],
        "photos": [
          "2024-01-26-st-pats-drogheda-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Jackson Park, Kilternan",
    "lat": 53.2408,
    "lon": -6.18752,
    "games": [
      {
        "title": "Wayside Celtic vs Bangor Celtic",
        "date": "2025-10-29",
        "score": "2–2",
        "competition": "LSL Senior Sunday",
        "caption": "Wayside Celtic 2–2 Bangor Celtic – Jackson Park, Kilternan, 29 Oct 2025.",
        "clubs": [
          "Bangor Celtic",
          "Wayside Celtic"
        ],
        "photos": [
          "2025-10-29-wayside-celtic-bangor-celtic-1.jpg"
        ]
      },
      {
        "title": "Wayside Celtic vs Lucan United FC",
        "date": "2025-11-28",
        "score": "1–1",
        "competition": "LSL Senior Sunday",
        "caption": "Wayside Celtic 1–1 Lucan United FC – Jackson Park, Kilternan, 28 Nov 2025.",
        "clubs": [
          "Lucan United FC",
          "Wayside Celtic"
        ],
        "photos": [
          "2025-11-28-wayside-celtic-lucan-united-fc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Gordon Park, Tallaght",
    "lat": 53.29881,
    "lon": -6.41702,
    "games": [
      {
        "title": "Shamrock Rovers vs Treaty United",
        "date": "2026-01-24",
        "competition": "Pre-season friendly",
        "caption": "Shamrock Rovers vs Treaty United – pre-season friendly, Gordon Park, Tallaght, 24 Jan 2026.",
        "clubs": [
          "Shamrock Rovers",
          "Treaty United"
        ],
        "tags": [
          "Pre-season friendly"
        ],
        "photos": [
          "2026-01-24-shamrock-rovers-treaty-united-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "UCD, Belfield",
    "lat": 53.31045,
    "lon": -6.22812,
    "games": [
      {
        "title": "UCD vs Usher Celtic",
        "date": "2026-03-08",
        "score": "2–0",
        "competition": "LSL Senior Sunday",
        "caption": "UCD 2–0 Usher Celtic – UCD, Belfield, 8 Mar 2026.",
        "clubs": [
          "UCD",
          "Usher Celtic"
        ],
        "photos": [
          "2026-03-08-ucd-usher-celtic-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Ringsend Park",
    "lat": 53.34078,
    "lon": -6.22023,
    "games": [
      {
        "title": "St Patrick's CY vs Sacred Heart",
        "date": "2026-03-25",
        "score": "2–3",
        "competition": "FAI Intermediate Cup",
        "caption": "St Patrick's CY 2–3 Sacred Heart – Ringsend Park, 25 Mar 2026.",
        "clubs": [
          "Sacred Heart FC",
          "St Patrick's CY"
        ],
        "tags": [
          "Ringsend Park"
        ],
        "photos": [
          "2026-03-25-st-patricks-cy-sacred-heart-1.jpg",
          "2026-03-25-st-patricks-cy-sacred-heart-2.jpg"
        ]
      },
      {
        "title": "Liffey Wanderers vs Bluebell United",
        "date": "2026-06-03",
        "score": "2–2",
        "competition": "LSL Senior 1 Sunday",
        "caption": "Liffey Wanderers 2–2 Bluebell United – Ringsend Park, 3 Jun 2026.",
        "clubs": [
          "Bluebell United",
          "Liffey Wanderers"
        ],
        "tags": [
          "Ringsend Park"
        ],
        "photos": [
          "2026-06-03-liffey-wanderers-bluebell-united-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Dublin 15",
    "lat": 53.38346,
    "lon": -6.33462,
    "games": [
      {
        "title": "Leinster Senior League Selection vs Ireland Selection",
        "date": "2026-04-01",
        "competition": "Representative match",
        "caption": "Leinster Senior League Selection vs Ireland Selection – representative match, Dublin 15, 1 Apr 2026.",
        "clubs": [],
        "tags": [
          "Ireland Selection",
          "Leinster Senior League Selection",
          "Representative match"
        ],
        "photos": [
          "2026-04-01-leinster-senior-league-selection-ireland-selection-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Grangegorman",
    "lat": 53.35429,
    "lon": -6.28057,
    "games": [
      {
        "title": "Usher Celtic vs Killester",
        "date": "2026-04-02",
        "score": "2–1",
        "competition": "LSL Senior Sunday",
        "caption": "Usher Celtic 2–1 Killester – Grangegorman, 2 Apr 2026.",
        "clubs": [
          "Killester",
          "Usher Celtic"
        ],
        "tags": [
          "Grangegorman"
        ],
        "photos": [
          "2026-04-02-usher-celtic-killester-1.jpg",
          "2026-04-02-usher-celtic-killester-2.jpg"
        ]
      }
    ]
  },
  {
    "name": "Kilbride, Co",
    "lat": 53.30245,
    "lon": -6.43077,
    "games": [
      {
        "title": "St Francis FC vs Kilnamanagh AFC",
        "date": "2026-04-08",
        "score": "1–3",
        "competition": "LSL Noel Ryan Cup",
        "caption": "St Francis FC 1–3 Kilnamanagh AFC – Kilbride, Co. Dublin, 8 Apr 2026.",
        "clubs": [
          "Kilnamanagh AFC",
          "St Francis FC"
        ],
        "photos": [
          "2026-04-08-st-francis-fc-kilnamanagh-afc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Clondalkin",
    "lat": 53.34547,
    "lon": -6.38851,
    "games": [
      {
        "title": "Collinstown FC vs Blackrock College AFC",
        "date": "2026-04-12",
        "score": "1–4",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Collinstown FC 1–4 Blackrock College AFC – Clondalkin, 12 Apr 2026.",
        "clubs": [
          "Blackrock College AFC",
          "Collinstown FC"
        ],
        "photos": [
          "2026-04-12-collinstown-fc-blackrock-college-afc-1.jpg",
          "2026-04-12-collinstown-fc-blackrock-college-afc-2.jpg"
        ]
      },
      {
        "title": "Ballyfermot United vs Dublin University FC",
        "date": "2026-05-06",
        "score": "5–0",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Ballyfermot United 5–0 Dublin University FC – Clondalkin, 6 May 2026.",
        "clubs": [
          "Ballyfermot United",
          "Dublin University FC"
        ],
        "photos": [
          "2026-05-06-ballyfermot-united-dublin-university-fc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Palmerstown Community School",
    "lat": 53.34866,
    "lon": -6.37557,
    "games": [
      {
        "title": "Glenville FC vs Templeogue United FC",
        "date": "2026-04-15",
        "score": "1–2",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Glenville FC 1–2 Templeogue United FC – Palmerstown Community School, 15 Apr 2026.",
        "clubs": [
          "Glenville FC",
          "Templeogue United FC"
        ],
        "photos": [
          "2026-04-15-glenville-fc-templeogue-united-fc-1.jpg"
        ]
      },
      {
        "title": "Glenville FC vs East Wall Bessborough",
        "date": "2026-10-25",
        "score": "2–2",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Glenville FC 2–2 East Wall Bessborough – Palmerstown Community School, 25 Oct 2026.",
        "clubs": [
          "East Wall Bessborough",
          "Glenville FC"
        ],
        "photos": [
          "2026-10-25-glenville-fc-east-wall-bessborough-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Crumlin",
    "lat": 53.3289,
    "lon": -6.30765,
    "games": [
      {
        "title": "Dublin University FC vs Glenville FC",
        "date": "2026-04-26",
        "score": "0–5",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Dublin University FC 0–5 Glenville FC – Crumlin, 26 Apr 2026.",
        "clubs": [
          "Dublin University FC",
          "Glenville FC"
        ],
        "photos": [
          "2026-04-26-dublin-university-fc-glenville-fc-1.jpg"
        ]
      },
      {
        "title": "Dublin University FC vs Collinstown FC",
        "date": "2026-09-09",
        "score": "3–2",
        "competition": "LSL Senior 1B Sunday",
        "caption": "Dublin University FC 3–2 Collinstown FC – Crumlin, 9 Sep 2026.",
        "clubs": [
          "Collinstown FC",
          "Dublin University FC"
        ],
        "photos": [
          "2026-09-09-dublin-university-fc-collinstown-fc-1.jpg",
          "2026-09-09-dublin-university-fc-collinstown-fc-2.jpg"
        ]
      }
    ]
  },
  {
    "name": "Inchicore",
    "lat": 53.34042,
    "lon": -6.32496,
    "games": [
      {
        "title": "Dublin Bus FC vs Collinstown FC",
        "date": "2026-05-17",
        "score": "1–0",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Dublin Bus FC 1–0 Collinstown FC – Inchicore, 17 May 2026.",
        "clubs": [
          "Collinstown FC",
          "Dublin Bus FC"
        ],
        "photos": [
          "2026-05-17-dublin-bus-fc-collinstown-fc-1.jpg"
        ]
      },
      {
        "title": "Dublin Bus FC vs Kilmore Celtic",
        "date": "2026-06-09",
        "score": "0–1",
        "competition": "LSL Major 1A Saturday",
        "caption": "Dublin Bus FC 0–1 Kilmore Celtic – Inchicore, 9 Jun 2026.",
        "clubs": [
          "Dublin Bus FC",
          "Kilmore Celtic"
        ],
        "photos": [
          "2026-06-09-dublin-bus-fc-kilmore-celtic-1.jpg"
        ]
      },
      {
        "title": "Dublin Bus FC vs Blackrock College AFC",
        "date": "2026-10-24",
        "score": "1–4",
        "competition": "LSL Noel Ryan Cup",
        "caption": "Dublin Bus FC 1–4 Blackrock College AFC – Inchicore, 24 Oct 2026.",
        "clubs": [
          "Blackrock College AFC",
          "Dublin Bus FC"
        ],
        "photos": [
          "2026-10-24-dublin-bus-fc-blackrock-college-afc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Blackrock",
    "lat": 53.28852,
    "lon": -6.1622,
    "games": [
      {
        "title": "Blackrock College AFC vs Glenville FC",
        "date": "2026-05-20",
        "score": "0–0",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Blackrock College AFC 0–0 Glenville FC – Blackrock, 20 May 2026.",
        "clubs": [
          "Blackrock College AFC",
          "Glenville FC"
        ],
        "photos": [
          "2026-05-20-blackrock-college-afc-glenville-fc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Sacred Heart FC, Kiltipper, Tallaght",
    "lat": 53.27034,
    "lon": -6.38905,
    "games": [
      {
        "title": "Sacred Heart vs St Patrick's CY",
        "date": "2026-06-02",
        "score": "4–3",
        "competition": "LSL Senior 1 Sunday",
        "caption": "Sacred Heart 4–3 St Patrick's CY – Sacred Heart FC, Kiltipper, Tallaght, 2 Jun 2026.",
        "clubs": [
          "Sacred Heart FC",
          "St Patrick's CY"
        ],
        "photos": [
          "2026-06-02-sacred-heart-st-patricks-cy-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Glasnevin",
    "lat": 53.3791,
    "lon": -6.27265,
    "games": [
      {
        "title": "Tolka Rovers vs Inchicore Athletic FC",
        "date": "2026-06-05",
        "score": "1–4",
        "competition": "LSL Senior Sunday",
        "caption": "Tolka Rovers 1–4 Inchicore Athletic FC – Glasnevin, 5 Jun 2026.",
        "clubs": [
          "Inchicore Athletic FC",
          "Tolka Rovers"
        ],
        "photos": [
          "2026-06-05-tolka-rovers-inchicore-athletic-fc-1.jpg"
        ]
      },
      {
        "title": "Tolka Rovers vs Finglas United",
        "date": "2026-09-10",
        "score": "1–5",
        "competition": "LSL Senior Sunday",
        "caption": "Tolka Rovers 1–5 Finglas United – Glasnevin, 10 Sep 2026.",
        "clubs": [
          "Finglas United",
          "Tolka Rovers"
        ],
        "photos": [
          "2026-09-10-tolka-rovers-finglas-united-1.jpg"
        ]
      },
      {
        "title": "Tolka Rovers vs Kilbarrack United",
        "date": "2026-09-16",
        "score": "1–3",
        "competition": "LSL PTSB Metropolitan Cup",
        "caption": "Tolka Rovers 1–3 Kilbarrack United – Glasnevin, 16 Sep 2026.",
        "clubs": [
          "Kilbarrack United",
          "Tolka Rovers"
        ],
        "photos": [
          "2026-09-16-tolka-rovers-kilbarrack-united-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Malahide",
    "lat": 53.44295,
    "lon": -6.12861,
    "games": [
      {
        "title": "Malahide United vs Finglas United",
        "date": "2026-06-07",
        "score": "4–1",
        "competition": "LSL Senior Sunday",
        "caption": "Malahide United 4–1 Finglas United – Malahide, 7 Jun 2026. Huge crowd as Malahide could win the league – and they did!",
        "clubs": [
          "Finglas United",
          "Malahide United"
        ],
        "tags": [
          "League decider"
        ],
        "photos": [
          "2026-06-07-malahide-united-finglas-united-1.jpg",
          "2026-06-07-malahide-united-finglas-united-2.jpg"
        ]
      },
      {
        "title": "Malahide United vs UCD",
        "date": "2026-10-15",
        "score": "4–2",
        "competition": "LSL Major Saturday",
        "caption": "Malahide United 4–2 UCD – Malahide, 15 Oct 2026.",
        "clubs": [
          "Malahide United",
          "UCD"
        ],
        "photos": [
          "2026-10-15-malahide-united-ucd-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Finglas",
    "lat": 53.39371,
    "lon": -6.31671,
    "games": [
      {
        "title": "Finglas United vs Bangor Celtic",
        "date": "2026-06-10",
        "score": "5–3",
        "competition": "LSL Senior Sunday",
        "caption": "Finglas United 5–3 Bangor Celtic – Finglas, 10 Jun 2026.",
        "clubs": [
          "Bangor Celtic",
          "Finglas United"
        ],
        "photos": [
          "2026-06-10-finglas-united-bangor-celtic-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Bluebell United's ground",
    "lat": 53.3208,
    "lon": -6.36444,
    "games": [
      {
        "title": "Charity match – played with Noely",
        "date": "2026-06-20",
        "competition": "Charity match",
        "caption": "Charity match I played in with Noely at Bluebell United's ground, 20 Jun 2026. We won!",
        "clubs": [
          "Bluebell United"
        ],
        "tags": [
          "Charity match",
          "Noely",
          "Played"
        ]
      }
    ]
  },
  {
    "name": "Newbridge, Co",
    "lat": 53.18658,
    "lon": -6.80764,
    "games": [
      {
        "title": "Newbridge Town FC vs Glenville FC",
        "date": "2026-09-04",
        "score": "2–3",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Newbridge Town FC 2–3 Glenville FC – Newbridge, Co. Kildare, 4 Sep 2026.",
        "clubs": [
          "Glenville FC",
          "Newbridge Town FC"
        ],
        "photos": [
          "2026-09-04-newbridge-town-fc-glenville-fc-1.jpg",
          "2026-09-04-newbridge-town-fc-glenville-fc-2.jpg"
        ]
      }
    ]
  },
  {
    "name": "Greenhills Park",
    "lat": 53.30933,
    "lon": -6.33361,
    "games": [
      {
        "title": "Greenhills Greenpark FC vs Lusk United AFC",
        "date": "2026-09-06",
        "score": "3–3",
        "competition": "LSL Premier Sunday",
        "caption": "Greenhills Greenpark FC 3–3 Lusk United AFC – Greenhills Park, 6 Sep 2026.",
        "clubs": [
          "Greenhills Greenpark FC",
          "Lusk United AFC"
        ],
        "tags": [
          "Greenhills Park"
        ],
        "photos": [
          "2026-09-06-greenhills-greenpark-fc-lusk-united-afc-1.jpg"
        ]
      },
      {
        "title": "Greenhills Greenpark FC vs Eagles FC",
        "date": "2026-09-27",
        "score": "2–1",
        "competition": "LSL Premier Sunday",
        "caption": "Greenhills Greenpark FC 2–1 Eagles FC – Greenhills Park, 27 Sep 2026.",
        "clubs": [
          "Eagles FC",
          "Greenhills Greenpark FC"
        ],
        "tags": [
          "Greenhills Park"
        ],
        "photos": [
          "2026-09-27-greenhills-greenpark-fc-eagles-fc-1.jpg",
          "2026-09-27-greenhills-greenpark-fc-eagles-fc-2.jpg"
        ]
      },
      {
        "title": "Greenhills Greenpark FC vs Mountview",
        "date": "2026-10-18",
        "score": "0–1",
        "competition": "LSL Premier Sunday",
        "caption": "Greenhills Greenpark FC 0–1 Mountview – Greenhills Park, 18 Oct 2026.",
        "clubs": [
          "Greenhills Greenpark FC",
          "Mountview"
        ],
        "tags": [
          "Greenhills Park"
        ],
        "photos": [
          "2026-10-18-greenhills-greenpark-fc-mountview-1.jpg"
        ]
      },
      {
        "title": "Greenhills Greenpark FC vs St John Vianney FC",
        "date": "2026-10-31",
        "score": "1–5",
        "competition": "LSL Division 3C Saturday",
        "caption": "Greenhills Greenpark FC 1–5 St John Vianney FC – Greenhills Park, 31 Oct 2026.",
        "clubs": [
          "Greenhills Greenpark FC",
          "St John Vianney FC"
        ],
        "photos": [
          "2026-10-31-greenhills-greenpark-fc-st-john-vianney-fc-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Lucan",
    "lat": 53.3466,
    "lon": -6.44416,
    "games": [
      {
        "title": "Arthur Griffith Park FC vs ?",
        "date": "2026-09-26",
        "caption": "Arthur Griffith Park FC vs ? – Lucan, 26 Sep 2026.",
        "clubs": [
          "Arthur Griffith Park FC"
        ],
        "photos": [
          "2026-09-26-arthur-griffith-park-fc-1.jpg",
          "2026-09-26-arthur-griffith-park-fc-2.jpg",
          "2026-09-26-arthur-griffith-park-fc-3.jpg"
        ]
      }
    ]
  },
  {
    "name": "Hartstown Park, Blanchardstown",
    "lat": 53.39479,
    "lon": -6.41531,
    "games": [
      {
        "title": "Hartstown Huntstown vs UCD",
        "date": "2026-10-01",
        "score": "3–2",
        "competition": "LSL Senior 1 Sunday",
        "caption": "Hartstown Huntstown 3–2 UCD – Hartstown Park, Blanchardstown, 1 Oct 2026.",
        "clubs": [
          "Hartstown Huntstown",
          "UCD"
        ],
        "photos": [
          "2026-10-01-hartstown-huntstown-ucd-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Porterstown Park, Castleknock",
    "lat": 53.37143,
    "lon": -6.404,
    "games": [
      {
        "title": "Castleknock Celtic vs St Paul's Artane",
        "date": "2026-10-03",
        "score": "2–2",
        "competition": "LSL Major 1B Saturday",
        "caption": "Castleknock Celtic 2–2 St Paul's Artane – Porterstown Park, Castleknock, 3 Oct 2026.",
        "clubs": [
          "Castleknock Celtic",
          "St Paul's Artane"
        ],
        "photos": [
          "2026-10-03-castleknock-celtic-st-pauls-artane-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Stella Maris, Drumcondra",
    "lat": 53.36642,
    "lon": -6.24744,
    "games": [
      {
        "title": "Stella Maris vs Monread FC",
        "date": "2026-10-07",
        "score": "0–0",
        "competition": "LSL Senior 1B Sunday",
        "caption": "Stella Maris 0–0 Monread FC – Stella Maris, Drumcondra, 7 Oct 2026.",
        "clubs": [
          "Monread FC",
          "Stella Maris FC"
        ],
        "photos": [
          "2026-10-07-stella-maris-monread-fc-1.jpg",
          "2026-10-07-stella-maris-monread-fc-2.jpg"
        ]
      }
    ]
  },
  {
    "name": "Home Farm FC, Whitehall",
    "lat": 53.37745,
    "lon": -6.25233,
    "games": [
      {
        "title": "Home Farm vs Killester",
        "date": "2026-10-08",
        "score": "1–7",
        "competition": "LSL Charlie Cahill Cup",
        "caption": "Home Farm 1–7 Killester – Home Farm FC, Whitehall, 8 Oct 2026.",
        "clubs": [
          "Home Farm FC",
          "Killester"
        ],
        "photos": [
          "2026-10-08-home-farm-killester-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Ballymount Park, Clondalkin",
    "lat": 53.30824,
    "lon": -6.37396,
    "games": [
      {
        "title": "Belgard Athletic vs Kinsealy United",
        "date": "2026-10-24",
        "score": "8–3",
        "competition": "Leinster FA Men's Junior Shield",
        "caption": "Belgard Athletic 8–3 Kinsealy United – Ballymount Park, Clondalkin, 24 Oct 2026.",
        "clubs": [
          "Belgard Athletic",
          "Kinsealy United"
        ],
        "photos": [
          "2026-10-24-belgard-athletic-kinsealy-united-1.jpg"
        ]
      }
    ]
  },
  {
    "name": "Oatlands College, Stillorgan",
    "lat": 53.29228,
    "lon": -6.20359,
    "games": [
      {
        "title": "Mount Merrion FC vs Lusk United AFC",
        "date": "2026-10-26",
        "score": "2–2",
        "competition": "LSL Premier Sunday",
        "caption": "Mount Merrion FC 2–2 Lusk United AFC – Oatlands College, Stillorgan, 26 Oct 2026.",
        "clubs": [
          "Lusk United AFC",
          "Mount Merrion FC"
        ],
        "photos": [
          "2026-10-26-mount-merrion-fc-lusk-united-afc-1.jpg",
          "2026-10-26-mount-merrion-fc-lusk-united-afc-2.jpg"
        ]
      }
    ]
  },
  {
    "name": "Leixlip Amenities Centre",
    "lat": 53.37131,
    "lon": -6.51757,
    "games": [
      {
        "title": "Leixlip United vs East Wall Bessborough",
        "date": "2026-10-29",
        "score": "1–6",
        "competition": "LSL Major 1C Saturday",
        "caption": "Leixlip United 1–6 East Wall Bessborough – Leixlip Amenities Centre, 29 Oct 2026.",
        "clubs": [
          "East Wall Bessborough",
          "Leixlip United"
        ],
        "photos": [
          "2026-10-29-leixlip-united-east-wall-bessborough-1.jpg"
        ]
      }
    ]
  }
];
