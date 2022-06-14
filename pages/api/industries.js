// averageMonthlyCost: {
//     low: "332.74",
//     medium: "1,093.70",
//     high: "3,712.61",
//   },
// goZero Offset: 0.015
// goZero Impact: (119.8*365)*0.0072)+0.0482

// greenPower offset: 0.028
// greenPower Impact: (119.8*365)/33.333/60/24

// solar Offset: 0.25
// solar Impact:
//              Metric tons: =0.0004*(119.8*365)-0.0593
//              Cars: =0.00009*(119.8*365)-0.0073

const industries = [
  {
    id: 1,
    name: "Accommodation and Food Services",
    dailyUsage: { avg: "119.8", low: "30.3", medium: "129.5", high: "533.8" },
  },
  {
    id: 2,
    name: "Administrative and Support Services",
    dailyUsage: { avg: "64.18", low: "28.25", medium: "90.53" },
  },
  {
    id: 3,
    name: "Agriculture, Forestry and Fishing",
    dailyUsage: {
      avg: "106.45",
      low: "28.02",
      medium: "121.81",
      high: "708.90",
    },
  },
  {
    id: 4,
    name: "Arts and Recreation Services",
    dailyUsage: {
      avg: "90.30",
      low: "29.32",
      medium: "110.84",
      high: "522.34",
    },
  },
  {
    id: 5,
    name: "Construction",
    dailyUsage: { avg: "74.25", low: "28.64", medium: "96.12", high: "629.28" },
  },
  {
    id: 6,
    name: "Education and Training",
    dailyUsage: {
      avg: "90.31",
      low: "28.92",
      medium: "116.20",
      high: "576.02",
    },
  },
  {
    id: 7,
    name: "Electricity, Gas, Water and Waste Services",
    dailyUsage: {
      avg: "97.93",
      low: "30.09",
      medium: "100.47",
      high: "759.96",
    },
  },
  {
    id: 8,
    name: "Financial and Insurance Services",
    dailyUsage: {
      avg: "85.08",
      low: "28.54",
      medium: "110.86",
      high: "642.38",
    },
  },
  {
    id: 9,
    name: "Health Care and Social Assistance",
    dailyUsage: {
      avg: "68.88",
      low: "28.46",
      medium: "94.93",
      high: "525.11",
    },
  },
  {
    id: 10,
    name: "Information Media and Telecommunications",
    dailyUsage: {
      avg: "88.09",
      low: "29.30",
      medium: "101.74",
      high: "737.37",
    },
  },
  {
    id: 11,
    name: "Manufacturing",
    dailyUsage: {
      avg: "96.54",
      low: "28.84",
      medium: "114.97",
      high: "573.57",
    },
  },
  {
    id: 12,
    name: "Mining",
    dailyUsage: {
      avg: "95.40",
      low: "29.58",
      medium: "68.38",
      high: "1057.28",
    },
  },

  {
    id: 13,
    name: "Professional, Scientific and Technical Services",
    dailyUsage: {
      avg: "73.22",
      low: "28.61",
      medium: "99.86",
      high: "648.97",
    },
  },
  {
    id: 14,
    name: "Public Administration and Safety",
    dailyUsage: {
      avg: "81.10",
      low: "28.74",
      medium: "102.01",
      high: "1332.08",
    },
  },
  {
    id: 15,
    name: "Rental, Hiring and Real Estate Services",
    dailyUsage: {
      avg: "65.97",
      low: "28.59",
      medium: "90.79",
      high: "710.36",
    },
  },
  {
    id: 16,
    name: "Retail Trade",
    dailyUsage: {
      avg: "90.74",
      low: "28.66",
      medium: "116.15",
      high: "526.79",
    },
  },
  {
    id: 17,
    name: "Transport, Postal and Warehousing",
    dailyUsage: {
      avg: "88.85",
      low: "29.11",
      medium: "111.21",
      high: "688.47",
    },
  },
  {
    id: 18,
    name: "Wholesale Trade",
    dailyUsage: {
      avg: "91.96",
      low: "29.07",
      medium: "113.23",
      high: "576.99",
    },
  },
  {
    id: 19,
    name: "Other Services",
    dailyUsage: {
      avg: "65.21",
      low: "28.04",
      medium: "94.28",
      high: "515.81",
    },
  },
];
