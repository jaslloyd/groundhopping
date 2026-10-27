// Every ground I've been to, with the games I saw there.
// Each game: title ("Home vs Away"), date (YYYY-MM-DD), optional score ("2–2", home first),
// optional competition (league or cup, from Final Whistle), caption and keywords (the clubs, plus tags).
const GROUNDS = [
  {
    "name": "pre-season friendly, TU Dublin Blanchardstown",
    "lat": 53.40573,
    "lon": -6.38207,
    "games": [
      {
        "title": "St Pats vs Drogheda",
        "date": "2024-01-26",
        "competition": "Pre-season friendly",
        "caption": "St Pats vs Drogheda – pre-season friendly, TU Dublin Blanchardstown, 26 Jan 2024. Tommy Lonergan's last game for Pats before he joined Fleetwood Town.",
        "keywords": [
          "Drogheda United",
          "Pre-season friendly",
          "St Patrick's Athletic",
          "Tommy Lonergan"
        ]
      }
    ]
  },
  {
    "name": "pre-season friendly, Gordon Park, Tallaght",
    "lat": 53.29881,
    "lon": -6.41702,
    "games": [
      {
        "title": "Shamrock Rovers vs Treaty United",
        "date": "2026-01-24",
        "competition": "Pre-season friendly",
        "caption": "Shamrock Rovers vs Treaty United – pre-season friendly, Gordon Park, Tallaght, 24 Jan 2026.",
        "keywords": [
          "Pre-season friendly",
          "Shamrock Rovers",
          "Treaty United"
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
        "keywords": [
          "Ringsend Park",
          "Sacred Heart FC",
          "St Patrick's CY"
        ]
      },
      {
        "title": "Liffey Wanderers vs Bluebell United",
        "date": "2026-06-03",
        "score": "2–2",
        "competition": "LSL Senior 1 Sunday",
        "caption": "Liffey Wanderers 2–2 Bluebell United – Ringsend Park, 3 Jun 2026.",
        "keywords": [
          "Bluebell United",
          "Liffey Wanderers",
          "Ringsend Park"
        ]
      }
    ]
  },
  {
    "name": "representative match, Dublin 15",
    "lat": 53.38346,
    "lon": -6.33462,
    "games": [
      {
        "title": "Leinster Senior League Selection vs Ireland Selection",
        "date": "2026-04-01",
        "competition": "Representative match",
        "caption": "Leinster Senior League Selection vs Ireland Selection – representative match, Dublin 15, 1 Apr 2026.",
        "keywords": [
          "Ireland Selection",
          "Leinster Senior League Selection",
          "Representative match"
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
        "keywords": [
          "Grangegorman",
          "Killester",
          "Usher Celtic"
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
        "keywords": [
          "Kilnamanagh AFC",
          "St Francis FC"
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
        "keywords": [
          "Blackrock College AFC",
          "Collinstown FC"
        ]
      },
      {
        "title": "Ballyfermot United vs Dublin University FC",
        "date": "2026-05-06",
        "score": "5–0",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Ballyfermot United 5–0 Dublin University FC – Clondalkin, 6 May 2026.",
        "keywords": [
          "Ballyfermot United",
          "Dublin University FC"
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
        "keywords": [
          "Glenville FC",
          "Templeogue United FC"
        ]
      },
      {
        "title": "Glenville FC vs East Wall Bessborough",
        "date": "2026-10-25",
        "score": "2–2",
        "competition": "LSL Senior 1A Sunday",
        "caption": "Glenville FC 2–2 East Wall Bessborough – Palmerstown Community School, 25 Oct 2026.",
        "keywords": [
          "East Wall Bessborough",
          "Glenville FC"
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
        "keywords": [
          "Dublin University FC",
          "Glenville FC"
        ]
      },
      {
        "title": "Dublin University FC vs Collinstown FC",
        "date": "2026-09-09",
        "score": "3–2",
        "competition": "LSL Senior 1B Sunday",
        "caption": "Dublin University FC 3–2 Collinstown FC – Crumlin, 9 Sep 2026.",
        "keywords": [
          "Collinstown FC",
          "Dublin University FC"
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
        "keywords": [
          "Collinstown FC",
          "Dublin Bus FC"
        ]
      },
      {
        "title": "Dublin Bus FC vs Kilmore Celtic",
        "date": "2026-06-09",
        "score": "0–1",
        "competition": "LSL Major 1A Saturday",
        "caption": "Dublin Bus FC 0–1 Kilmore Celtic – Inchicore, 9 Jun 2026.",
        "keywords": [
          "Dublin Bus FC",
          "Kilmore Celtic"
        ]
      },
      {
        "title": "Dublin Bus FC vs Blackrock College AFC",
        "date": "2026-10-24",
        "score": "1–4",
        "competition": "LSL Noel Ryan Cup",
        "caption": "Dublin Bus FC 1–4 Blackrock College AFC – Inchicore, 24 Oct 2026.",
        "keywords": [
          "Blackrock College AFC",
          "Dublin Bus FC"
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
        "keywords": [
          "Blackrock College AFC",
          "Glenville FC"
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
        "keywords": [
          "Sacred Heart FC",
          "St Patrick's CY"
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
        "keywords": [
          "Inchicore Athletic FC",
          "Tolka Rovers"
        ]
      },
      {
        "title": "Tolka Rovers vs Finglas United",
        "date": "2026-09-10",
        "score": "1–5",
        "competition": "LSL Senior Sunday",
        "caption": "Tolka Rovers 1–5 Finglas United – Glasnevin, 10 Sep 2026.",
        "keywords": [
          "Finglas United",
          "Tolka Rovers"
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
        "keywords": [
          "Finglas United",
          "League decider",
          "Malahide United"
        ]
      },
      {
        "title": "Malahide United vs UCD",
        "date": "2026-10-15",
        "score": "4–2",
        "competition": "LSL Major Saturday",
        "caption": "Malahide United 4–2 UCD – Malahide, 15 Oct 2026.",
        "keywords": [
          "Malahide United",
          "UCD"
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
        "keywords": [
          "Bangor Celtic",
          "Finglas United"
        ]
      }
    ]
  },
  {
    "name": "",
    "lat": 53.3208,
    "lon": -6.36444,
    "games": [
      {
        "title": "Charity match – played with Noely",
        "date": "2026-06-20",
        "competition": "Charity match",
        "caption": "Charity match I played in with Noely at Bluebell United's ground, 20 Jun 2026. We won!",
        "keywords": [
          "Bluebell United",
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
        "keywords": [
          "Glenville FC",
          "Newbridge Town FC"
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
        "keywords": [
          "Greenhills Greenpark FC",
          "Greenhills Park",
          "Lusk United AFC"
        ]
      },
      {
        "title": "Greenhills Greenpark FC vs Eagles FC",
        "date": "2026-09-27",
        "score": "2–1",
        "competition": "LSL Premier Sunday",
        "caption": "Greenhills Greenpark FC 2–1 Eagles FC – Greenhills Park, 27 Sep 2026.",
        "keywords": [
          "Eagles FC",
          "Greenhills Greenpark FC",
          "Greenhills Park"
        ]
      },
      {
        "title": "Greenhills Greenpark FC vs Mountview",
        "date": "2026-10-18",
        "score": "0–1",
        "competition": "LSL Premier Sunday",
        "caption": "Greenhills Greenpark FC 0–1 Mountview – Greenhills Park, 18 Oct 2026.",
        "keywords": [
          "Greenhills Greenpark FC",
          "Greenhills Park",
          "Mountview"
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
        "keywords": [
          "Arthur Griffith Park FC"
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
        "keywords": [
          "Hartstown Huntstown",
          "UCD"
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
        "keywords": [
          "Castleknock Celtic",
          "St Paul's Artane"
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
        "keywords": [
          "Monread FC",
          "Stella Maris FC"
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
        "keywords": [
          "Home Farm FC",
          "Killester"
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
        "keywords": [
          "Belgard Athletic",
          "Kinsealy United"
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
        "keywords": [
          "Lusk United AFC",
          "Mount Merrion FC"
        ]
      }
    ]
  }
];
