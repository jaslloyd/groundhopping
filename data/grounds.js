// Every ground I've been to, with the games I saw there.
// Each game: title ("Home vs Away"), date (YYYY-MM-DD), optional score ("2–2", home first),
// caption and keywords (the clubs, plus tags).
const GROUNDS = [
  {
    "name": "pre-season friendly, TU Dublin Blanchardstown",
    "lat": 53.40573,
    "lon": -6.38207,
    "games": [
      {
        "title": "St Pats vs Drogheda",
        "date": "2024-01-26",
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
        "caption": "St Patrick's CY vs Sacred Heart – Ringsend Park, 25 Mar 2026.",
        "keywords": [
          "Ringsend Park",
          "Sacred Heart FC",
          "St Patrick's CY"
        ]
      },
      {
        "title": "St Patrick's CY vs Bluebell United",
        "date": "2026-06-03",
        "caption": "St Patrick's CY vs Bluebell United – Ringsend Park, 3 Jun 2026.",
        "keywords": [
          "Bluebell United",
          "Ringsend Park",
          "St Patrick's CY"
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
        "caption": "Usher Celtic vs Killester – Grangegorman, 2 Apr 2026.",
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
        "title": "St Francis vs Kilmanagh",
        "date": "2026-04-08",
        "caption": "St Francis FC vs Kilmanagh FC – Kilbride, Co. Dublin, 8 Apr 2026.",
        "keywords": [
          "Kilmanagh FC",
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
        "title": "Collinstown FC vs Blackrock FC",
        "date": "2026-04-12",
        "caption": "Collinstown FC vs Blackrock FC – Clondalkin, 12 Apr 2026.",
        "keywords": [
          "Blackrock FC",
          "Collinstown FC"
        ]
      },
      {
        "title": "Ballyfermot vs Trinity Donaghmede",
        "date": "2026-05-06",
        "caption": "Ballyfermot vs Trinity Donaghmede – Clondalkin, 6 May 2026.",
        "keywords": [
          "Ballyfermot",
          "Trinity Donaghmede"
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
        "title": "Glenville FC vs Leixlip United",
        "date": "2026-04-15",
        "caption": "Glenville FC vs Leixlip United – Palmerstown Community School, 15 Apr 2026.",
        "keywords": [
          "Glenville FC",
          "Leixlip United"
        ]
      },
      {
        "title": "Glenville FC vs East Wall Bessborough",
        "date": "2026-10-25",
        "caption": "Glenville FC vs East Wall Bessborough – Palmerstown Community School, 25 Oct 2026.",
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
        "title": "Glenville FC vs Trinity Donaghmede",
        "date": "2026-04-26",
        "caption": "Glenville FC vs Trinity Donaghmede – Crumlin, 26 Apr 2026.",
        "keywords": [
          "Glenville FC",
          "Trinity Donaghmede"
        ]
      },
      {
        "title": "Trinity Donaghmede vs Collinstown FC",
        "date": "2026-09-09",
        "caption": "Trinity Donaghmede vs Collinstown FC – Crumlin, 9 Sep 2026.",
        "keywords": [
          "Collinstown FC",
          "Trinity Donaghmede"
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
        "title": "Dublin Bus vs Collinstown FC",
        "date": "2026-05-17",
        "caption": "Dublin Bus vs Collinstown FC – Inchicore, 17 May 2026.",
        "keywords": [
          "Collinstown FC",
          "Dublin Bus FC"
        ]
      },
      {
        "title": "Dublin Bus FC vs Kilmore Celtic",
        "date": "2026-06-09",
        "score": "0–1",
        "caption": "Dublin Bus FC 0–1 Kilmore Celtic – Inchicore, 9 Jun 2026.",
        "keywords": [
          "Dublin Bus FC",
          "Kilmore Celtic"
        ]
      },
      {
        "title": "Dublin Bus vs Blackrock FC",
        "date": "2026-10-24",
        "caption": "Dublin Bus vs Blackrock FC – Inchicore, 24 Oct 2026.",
        "keywords": [
          "Blackrock FC",
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
        "title": "Blackrock FC vs Glenville FC",
        "date": "2026-05-20",
        "caption": "Blackrock FC vs Glenville FC – Blackrock, 20 May 2026.",
        "keywords": [
          "Blackrock FC",
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
        "caption": "Sacred Heart vs St Patrick's CY – Sacred Heart FC, Kiltipper, Tallaght, 2 Jun 2026.",
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
        "caption": "Tolka Rovers 1–4 Inchicore Athletic FC – Glasnevin, 5 Jun 2026.",
        "keywords": [
          "Inchicore Athletic FC",
          "Tolka Rovers"
        ]
      },
      {
        "title": "Tolka Rovers vs Finglas FC",
        "date": "2026-09-10",
        "caption": "Tolka Rovers vs Finglas FC – Glasnevin, 10 Sep 2026.",
        "keywords": [
          "Finglas FC",
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
        "title": "Malahide United vs Finglas FC",
        "date": "2026-06-07",
        "caption": "Malahide United vs Finglas FC – Malahide, 7 Jun 2026. Huge crowd as Malahide could win the league – and they did!",
        "keywords": [
          "Finglas FC",
          "League decider",
          "Malahide United"
        ]
      },
      {
        "title": "Malahide United vs UCD",
        "date": "2026-10-15",
        "caption": "Malahide United vs UCD – Malahide, 15 Oct 2026.",
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
        "caption": "Newbridge Town FC vs Glenville FC – Newbridge, Co. Kildare, 4 Sep 2026.",
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
        "title": "Greenhills AFC vs Lusk United",
        "date": "2026-09-06",
        "caption": "Greenhills AFC vs Lusk United AFC – Greenhills Park, 6 Sep 2026.",
        "keywords": [
          "Greenhills AFC",
          "Greenhills Park",
          "Lusk United AFC"
        ]
      },
      {
        "title": "Greenhills AFC vs Eagles FC",
        "date": "2026-09-27",
        "caption": "Greenhills AFC vs Eagles FC – Greenhills Park, 27 Sep 2026.",
        "keywords": [
          "Eagles FC",
          "Greenhills AFC",
          "Greenhills Park"
        ]
      },
      {
        "title": "Greenhills AFC vs Mountview",
        "date": "2026-10-18",
        "caption": "Greenhills AFC vs Mountview – Greenhills Park, 18 Oct 2026.",
        "keywords": [
          "Greenhills AFC",
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
        "caption": "Hartstown Huntstown vs UCD – Hartstown Park, Blanchardstown, 1 Oct 2026.",
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
        "caption": "Castleknock Celtic vs St Paul's Artane – Porterstown Park, Castleknock, 3 Oct 2026.",
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
        "caption": "Stella Maris vs Monread FC – Stella Maris, Drumcondra, 7 Oct 2026.",
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
        "caption": "Home Farm vs Killester – Home Farm FC, Whitehall, 8 Oct 2026.",
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
        "caption": "Belgard Athletic vs Kinsealy United – Ballymount Park, Clondalkin, 24 Oct 2026.",
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
        "caption": "Mount Merrion FC 2–2 Lusk United AFC – Oatlands College, Stillorgan, 26 Oct 2026.",
        "keywords": [
          "Lusk United AFC",
          "Mount Merrion FC"
        ]
      }
    ]
  }
];
