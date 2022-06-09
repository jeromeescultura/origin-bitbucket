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
            value: "carbon_offsets",
            text: "Bought Carbon Offsets",
          },
          {
            id: 2,
            value: "green_power",
            text: "Bought Green power",
          },
          {
            id: 3,
            value: "solar",
            text: "Solar",
          },
          {
            id: 4,
            value: "batteries",
            text: "Batteries",
          },
          {
            id: 5,
            value: "ev",
            text: "EV",
          },
          {
            id: 6,
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
            text: "Digitised some or all paper based processes at the sites (s)",
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
          value: "1-2",
        },
        {
          id: 2,
          label: "2-5 sites",
          value: "2-5",
        },
        {
          id: 3,
          label: "5-10 sites",
          value: "5-10",
        },
        {
          id: 4,
          label: "10+ sites",
          value: "10+",
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
          label: "Professional, Scientific and Technical Services",
          value: "pro_sci_tech",
        },
        {
          id: 2,
          label: "Financial and Insurance Services",
          value: "finance_insurance",
        },
        {
          id: 3,
          label: "Manufacturing",
          value: "manufacturing",
        },
        {
          id: 4,
          label: "Rental, Hiring and Real Estate Services",
          value: "rental_hiring_real_estate",
        },
        {
          id: 5,
          label: "Accommodation and Food Services",
          value: "accom_food",
        },
        {
          id: 6,
          label: "Health Care and Social Assistance",
          value: "health_social",
        },
        {
          id: 7,
          label: "Retail Trade",
          value: "retail_trade",
        },
        {
          id: 8,
          label: "Information Media and Telecommunications",
          value: "info_media_telecom",
        },
        {
          id: 9,
          label: "Wholesale Trade",
          value: "wholesale_trade",
        },
        {
          id: 10,
          label: "Administrative and Support Services",
          value: "admin_support",
        },
        {
          id: 11,
          label: "Education and Training",
          value: "educ_training",
        },
        {
          id: 12,
          label: "Mining",
          value: "mining",
        },
        {
          id: 13,
          label: "Construction",
          value: "construction",
        },
        {
          id: 14,
          label: "Arts and Recreation Services",
          value: "arts_rec",
        },
        {
          id: 15,
          label: "Transport, Postal and Warehousing",
          value: "transport_postal_warehousing",
        },
        {
          id: 16,
          label: "Agriculture, Forestry and Fishing",
          value: "agri_forest_fishing",
        },
        {
          id: 17,
          label: "Public Administration and Safety",
          value: "public_admin_safety",
        },
        {
          id: 18,
          label: "Electricity, Gas, Water and Waste Services",
          value: "elec_gas_water_waste",
        },
        {
          id: 19,
          label: "Other",
          value: "other",
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
          text: "Constant (Requires 24 hour supply)",
          subText:
            "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
        },
        {
          id: 2,
          value: "mornings",
          text: "Mornings (Roughly between 1am – 9am",
          subText: "Roughly between 1am – 9am",
        },
        {
          id: 3,
          value: "evenings",
          text: "Evenings (Roughly between 5pm - 1am)",
          subText: "Roughly between 5pm - 1am",
        },
        {
          id: 4,
          value: "standard",
          text: "Standard times (Roughly between 9am - 5pm)",
          subText: "Roughly between 9am - 5pm",
        },
        {
          id: 5,
          value: "unconstrained",
          text: "Unconstrained by specific operating hours (Depends on business priorities)",
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
