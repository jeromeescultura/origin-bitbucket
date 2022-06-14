const industries = [
  {
    id: 1,
    name: "Accommodation and Food Services",
    dailyUsage: { avg: "119.8", low: "30.3", medium: "129.5", high: "533.8" },
    averageMonthlyCost: {
      low: "332.74",
      medium: "1,093.70",
      high: "3,712.61",
    },
    goZero: [
      { offset: "0.015" },
      {
        impact: [
          {
            avg: "315",
            low: "80",
            high: "1403",
          },
        ],
      },
    ],
    greenPower: {
      offset: "0.028",
    },
    solar: {
      offset: "0.25",
    },
    // avr: (119.8*365)/33.333/60/24
  },
];
