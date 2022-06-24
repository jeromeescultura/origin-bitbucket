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
    industryCost: { low: 332.74, medium: 1093.7, high: 3712.61 },
    withSolarCost: { low: 96.8, medium: 716.9, high: 2051.32 },
  },
  {
    id: 2,
    name: "Administrative and Support Services",
    dailyUsage: { avg: "64.18", low: "28.25", medium: "90.53" },
    industryCost: { low: 313.13, medium: 827.12, high: 0 },
    withSolarCost: { low: 80.98, medium: 420.77, high: 0 },
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
    industryCost: { low: 322.25, medium: 1118.32, high: 5506.19 },
    withSolarCost: { low: 79.2, medium: 658.61, high: 3383.11 },
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
    industryCost: { low: 305.55, medium: 971.21, high: 3784.38 },
    withSolarCost: { low: 89.13, medium: 575.18, high: 1964.46 },
  },
  {
    id: 5,
    name: "Construction",
    dailyUsage: { avg: "74.25", low: "28.64", medium: "96.12", high: "629.28" },
    industryCost: { low: 292.42, medium: 869.81, high: 4366.86 },
    withSolarCost: { low: 83.92, medium: 463.28, high: 2777.65 },
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
    industryCost: { low: 310.86, medium: 1089.8, high: 5259.51 },
    withSolarCost: { low: 86.05, medium: 615.96, high: 2372.68 },
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
    industryCost: { low: 310.13, medium: 864.58, high: 4936.93 },
    withSolarCost: { low: 94.97, medium: 496.32, high: 3771.34 },
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
    industryCost: { low: 309.78, medium: 964.72, high: 4364.62 },
    withSolarCost: { low: 83.17, medium: 575.36, high: 2877.28 },
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
    industryCost: { low: 294.19, medium: 842.95, high: 4320.51 },
    withSolarCost: { low: 82.56, medium: 454.2, high: 1985.55 },
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
    industryCost: { low: 305.63, medium: 933.31, high: 4107.25 },
    withSolarCost: { low: 88.95, medium: 505.97, high: 3599.56 },
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
    industryCost: { low: 301.96, medium: 995.52, high: 4107.81 },
    withSolarCost: { low: 85.46, medium: 606.62, high: 2354 },
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
    industryCost: { low: 1542.13, medium: 5513.74, high: 7385.18 },
    withSolarCost: { low: 91.07, medium: 252.33, high: 6032.25 },
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
    industryCost: { low: 303.85, medium: 917.33, high: 5151.62 },
    withSolarCost: { low: 83.76, medium: 491.7, high: 2927.36 },
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
    industryCost: { low: 307.48, medium: 881.56, high: 10742.43 },
    withSolarCost: { low: 84.7, medium: 508.04, high: 8121.83 },
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
    industryCost: { low: 308.53, medium: 812.67, high: 4015.72 },
    withSolarCost: { low: 83.57, medium: 422.75, high: 3394.16 },
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
    industryCost: { low: 311.32, medium: 1000.04, high: 4292.7 },
    withSolarCost: { low: 84.08, medium: 615.57, high: 1998.32 },
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
    industryCost: { low: 294.08, medium: 994.45, high: 5370.06 },
    withSolarCost: { low: 87.51, medium: 578.01, high: 3227.7 },
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
    industryCost: { low: 304.68, medium: 969.21, high: 4078.97 },
    withSolarCost: { low: 87.19, medium: 593.33, high: 2380.05 },
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
    industryCost: { low: 295.77, medium: 876.18, high: 4393.07 },
    withSolarCost: { low: 79.41, medium: 449.22, high: 1914.81 },
  },
];

export default function handler(req, res) {
  res.status(200).json(industries);
}
