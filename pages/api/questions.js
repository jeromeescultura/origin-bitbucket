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
            text: "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
          },
          {
            id: 2,
            value: "es_chk_2",
            text: "Switch to an energy plan that carbon offsets your energy use",
          },
          {
            id: 3,
            value: "es_chk_3",
            text: "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
          },
          {
            id: 4,
            value: "es_chk_4",
            text: "Installed solar at your site(s)",
          },
          {
            id: 5,
            value: "es_chk_5",
            text: "Added battery storage to your solar system",
          },
          {
            id: 6,
            value: "es_chk_6",
            text: "Replaced some or all of your vehicle fleet with electric vehicles",
          },
        ],
      },
      {
        id: "02",
        icon: "/icons/flame.svg",
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
          text: "1-2 sites",
        },
        {
          id: 2,
          text: "2-5 sites",
        },
        {
          id: 3,
          text: "5-10 sites",
        },
        {
          id: 4,
          text: "10+ sites",
        },
        {
          id: 5,
          text: "No business sites - I operate out of my home",
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
          text: "test",
        },
        {
          id: 2,
          text: "sample",
        },
        {
          id: 3,
          text: "egg",
        },
        {
          id: 4,
          text: "hotdog",
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
      text: "How important is reducing your business’ impact on the environment to you?",
      options: [
        {
          id: 1,
          text: "Not Important",
        },
        {
          id: 2,
          text: "",
        },
        {
          id: 3,
          text: "",
        },
        {
          id: 4,
          text: "",
        },
        {
          id: 5,
          text: "Very Important",
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
