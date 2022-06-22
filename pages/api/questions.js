const questions = [
  {
    iconsQuestion: {
      id: "02",
      text: "What sort of energy sources do you rely on?",
      subText: "Select all that apply.",
      options: [
        {
          id: 1,
          value: "electricity",
          text: "Electricity",
          icon: "/icons/electricity.svg",
        },
        {
          id: 2,
          value: "natural_gas",
          text: "Natural gas",
          icon: "/icons/gas.svg",
        },
        {
          id: 3,
          value: "lpg",
          text: "LPG",
          icon: "/icons/lpg.svg",
        },
      ],
    },
  },
  {
    checkboxQuestion: [
      {
        id: "02",
        icon: "/icons/bulb.svg",
        title: "Energy sourcing changes",
        text: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
        subText: "Select none or as many that apply.",
        questionsList: [
          {
            id: 1,
            value: "replaced_equipments",
            text: "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
          },
          {
            id: 2,
            value: "carbon_offsets",
            text: "Switch to an energy plan that carbon offsets your energy use",
          },
          {
            id: 3,
            value: "green_power",
            text: "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
          },
          {
            id: 4,
            value: "solar",
            text: "Installed solar at your site(s)",
          },
          {
            id: 5,
            value: "batteries",
            text: "Added battery storage to your solar system",
          },
          {
            id: 6,
            value: "electric_vehicles",
            text: "Replaced some or all of your vehicle fleet with electric vehicles",
          },
          {
            id: 7,
            value: "expert_advice",
            text: "Worked with an expert to lower our carbon emissions",
          },
        ],
      },
      {
        id: "02",
        icon: "/icons/leaf.svg",
        title: "General operations changes",
        questionsList: [
          {
            id: 1,
            value: "sustain_strategy",
            text: "Created a sustainability strategy",
          },
          {
            id: 2,
            value: "alternatives",
            text: "Replaced some or all packaging used for your business to use more sustainable alternatives",
          },
          {
            id: 3,
            value: "digitized",
            text: "Digitised some or all paper based processes at the sites(s)",
          },
          {
            id: 4,
            value: "recycling",
            text: "Introduced recycling and waste reduction processes at office sites",
          },
          {
            id: 5,
            value: "optimized_supply_chain",
            text: "Optimised supply chain processes to reduce material wastage",
          },
          {
            id: 6,
            value: "other",
            text: "Other",
          },
        ],
      },
    ],
  },
  {
    radioQuestion: {
      id: "01",
      text: "How many business sites are you responsible for the energy management of?",
      options: [
        {
          id: 1,
          label: "1-2 sites",
          value: "1-2 sites",
        },
        {
          id: 2,
          label: "2-5 sites",
          value: "2-5 sites",
        },
        {
          id: 3,
          label: "5-10 sites",
          value: "5-10 sites",
        },
        {
          id: 4,
          label: "10+ sites",
          value: "10+ sites",
        },
        {
          id: 5,
          label: "No business sites - I operate out of my home",
          value: "none",
        },
      ],
    },
  },
  {
    buttonQuestion: {
      id: "01",
      text: "Are you currently looking to implement any specifiy sustainability or energy efficiency goals at your business for the future?",
      options: [
        {
          id: 1,
          text: "Not really",
        },

        {
          id: 2,
          text: "Yes, I'm considering it",
        },
      ],
    },
  },
  {
    dropdownQuestion: {
      id: "01",
      text: "What type of industry do your work in?",
      options: [
        {
          id: 1,
          label: "Accommodation and Food Services",
          value: "Accommodation and Food Services",
        },
        {
          id: 2,
          label: "Administrative and Support Services",
          value: "Administrative and Support Services",
        },
        {
          id: 3,
          label: "Agriculture, Forestry and Fishing",
          value: "Agriculture, Forestry and Fishing",
        },
        {
          id: 4,
          label: "Arts and Recreation Services",
          value: "Arts and Recreation Services",
        },
        {
          id: 5,
          label: "Construction",
          value: "Construction",
        },
        {
          id: 6,
          label: "Education and Training",
          value: "Education and Training",
        },
        {
          id: 7,
          label: "Electricity, Gas, Water and Waste Services",
          value: "Electricity, Gas, Water and Waste Services",
        },
        {
          id: 8,
          label: "Financial and Insurance Services",
          value: "Financial and Insurance Services",
        },
        {
          id: 9,
          label: "Health Care and Social Assistance",
          value: "Health Care and Social Assistance",
        },
        {
          id: 10,
          label: "Information Media and Telecommunications",
          value: "Information Media and Telecommunications",
        },
        {
          id: 11,
          label: "Manufacturing",
          value: "Manufacturing",
        },
        {
          id: 12,
          label: "Mining",
          value: "Mining",
        },
        {
          id: 13,
          label: "Professional, Scientific and Technical Services",
          value: "Professional, Scientific and Technical Services",
        },
        {
          id: 14,
          label: "Public Administration and Safety",
          value: "Public Administration and Safety",
        },
        {
          id: 15,
          label: "Rental, Hiring and Real Estate Services",
          value: "Rental, Hiring and Real Estate Services",
        },
        {
          id: 16,
          label: "Retail Trade",
          value: "Retail Trade",
        },
        {
          id: 17,
          label: "Transport, Postal and Warehousing",
          value: "Transport, Postal and Warehousing",
        },
        {
          id: 18,
          label: "Wholesale Trade",
          value: "Wholesale Trade",
        },
        {
          id: 19,
          label: "Other Services",
          value: "Other Services",
        },
      ],
    },
  },
  {
    iconsRadioQuestion: {
      id: "01",
      text: "Would you prefer to support projects in Australia only, or a mix of local and international projects?",
      options: [
        {
          id: 1,
          icon: "/icons/au.svg",
          text: "australian only",
        },
        {
          id: 2,
          icon: "/icons/world.svg",
          text: "a mix",
        },
      ],
    },
  },
  {
    sliderQuestion: {
      id: "04",
      text: "How much of a priority is sustainability for your business?",
      options: [
        {
          id: 1,
          value: "low_priority",
        },
        {
          id: 2,
          value: "medium_priority",
        },
        {
          id: 3,
          value: "priority",
        },
        {
          id: 4,
          value: "high_priority",
        },
        {
          id: 5,
          value: "very_high_priority",
        },
      ],
    },
  },
  {
    energyUsageQuestion: {
      id: "03",
      text: "Roughly when does your business use the most energy?",
      questionsList: [
        {
          id: 1,
          value: "constant",
          label: "Constant",
          subText:
            "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
        },
        {
          id: 2,
          value: "mornings",
          label: "Mornings",
          subText: "Roughly between 1am – 9am",
        },
        {
          id: 3,
          value: "evenings",
          label: "Evenings",
          subText: "Roughly between 5pm - 1am",
        },
        {
          id: 4,
          value: "standard",
          label: "Standard times",
          subText: "Roughly between 9am - 5pm",
        },
        {
          id: 5,
          value: "unconstrained",
          label: "Unconstrained by specific operating hours",
          subText: "Energy use varies greatly depending on business priorities",
        },
      ],
    },
  },
  {
    goalsQuestion: {
      text: "Can you tell us a bit more about what type of goals you are considering?",
    },
  },
  {
    landQuestion: {
      id: "04",
      text: "Do you have land or roof space where you are allowed to renovate, upgrade or install equipment?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "I'm not sure" },
      ],
    },
  },
  {
    investmentQuestion: {
      id: "02",
      text: "How much of an investment are you willing to make towards helping reduce the climate impact of your business practices?",
      options: [
        { id: 1, text: "Little to none" },
        {
          id: 2,
          text: "I am open to investing a bit more, if it is within my means",
        },
        {
          id: 3,
          text: "I have secured the capital or appetite of stakeholders to invest more",
        },
      ],
    },
  },
  {
    largerInvestmentQuestion: {
      id: "03",
      text: "Would you be open to making a larger investment to explore bigger projects, if you didn't need to invest too much capital upfront?",
      options: [
        { id: 1, text: "Yes" },
        {
          id: 2,
          text: "No",
        },
        {
          id: "3",
          text: "I'm not sure",
        },
      ],
    },
  },
  {
    timeAndEnergy: {
      id: "03",
      text: "How much time and energy do you want to spend on moving towards your sustainability goals?",
      options: [
        {
          id: 1,
          value: "easy",
          label: "Not much. Make it as easy as possible, please!",
        },
        {
          id: 2,
          value: "open_decision",
          label:
            "I'm open to having a chat or two and then deciding how to proceed",
        },
        {
          id: 3,
          value: "fully_invest",
          label:
            "I'm happy to invest time and energy into finding the best and most sustainable option that works for me.",
        },
      ],
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(questions);
}
