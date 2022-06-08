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
            value: "es_chk_1",
            text: "Bought Carbon Offsets",
          },
          {
            id: 2,
            value: "es_chk_2",
            text: "Bought Green power",
          },
          {
            id: 3,
            value: "es_chk_3",
            text: "Solar",
          },
          {
            id: 4,
            value: "es_chk_4",
            text: "Batteries",
          },
          {
            id: 5,
            value: "es_chk_5",
            text: "EV",
          },
          {
            id: 6,
            value: "es_chk_6",
            text: "Worked with an expert to lower our carbon emissions",
          },
          {
            id: 7,
            value: "es_chk_7",
            text: "Created a sustainability strategy",
          },
          {
            id: 8,
            value: "es_chk_8",
            text: "Replaced some or all packaging used by your business to more sustainable alternatives",
          },
          {
            id: 9,
            value: "es_chk_9",
            text: "Digitised some or all paper based processes",
          },
          {
            id: 10,
            value: "es_chk_10",
            text: "Introduced recycling and waste reduction processes at office sites",
          },
          {
            id: 11,
            value: "es_chk_11",
            text: "Optimised supply chain to reduce waste / energy consumption",
          },
          {
            id: 12,
            value: "es_chk_12",
            text: "Other",
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
            value: "go_chk_1",
            text: "Replaced some or all packaging used for your business to use more sustainable alternatives",
          },
          {
            id: 2,
            value: "go_chk_2",
            text: "Digitised some or all paper based processes at the sites (s)",
          },
          {
            id: 3,
            value: "go_chk_3",
            text: "Introduced recycling and waste reduction processes at office sites",
          },
          {
            id: 4,
            value: "go_chk_4",
            text: "Optimised supply chain processes to reduce material wastage",
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
      id: "03",
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
          value: "eu_chk_1",
          text: "Constant",
          subText:
            "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
        },
        {
          id: 2,
          value: "eu_chk_2",
          text: "Mornings",
          subText: "Roughly between 1am – 9am",
        },
        {
          id: 3,
          value: "eu_chk_3",
          text: "Evenings",
          subText: "Roughly between 5pm - 1am",
        },
        {
          id: 4,
          value: "eu_chk_4",
          text: "Standard times",
          subText: "Roughly between 9am - 5pm",
        },
        {
          id: 5,
          value: "eu_chk_5",
          text: "Unconstrained by specific operating hours",
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
];

export default function handler(req, res) {
  res.status(200).json(questions);
}
