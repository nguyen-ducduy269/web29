let data = [
  {
    id: "ts01",
    name: "Nhài sữa",
    price: 40000,
    ice: [30, 50],
    sugar: [30, 50],
    topping: [
      {
        id: "topping-1",
        name: "thạch dừa",
        price: 5000,
      },

      {
        id: "topping-2",
        name: "trân châu",
        price: 5000,
      },
    ],

    variations: [
      {
        id: "ts01-1",
        price: 40000,
        ice: 30,
        sugar: 30,
        topping: {
          id: "topping-2",
          name: "trân châu",
          price: 5000,
        },
      },

      {
        id: "ts01-2",
        price: 40000,
        ice: 30,
        sugar: 50,
        topping: {
          id: "topping-2",
          name: "trân châu",
          price: 5000,
        },
      },

      {
        id: "ts01-3",
        price: 40000,
        ice: 50,
        sugar: 30,
        topping: {
          id: "topping-2",
          name: "trân châu",
          price: 5000,
        },
      },

      {
        id: "ts01-1",
        price: 40000,
        ice: 50,
        sugar: 50,
        topping: {
          id: "topping-2",
          name: "trân châu",
          price: 5000,
        },
      },

      {
        id: "ts01-1",
        price: 40000,
        ice: 30,
        sugar: 30,
        topping: {
          id: "topping-1",
          name: "thạch dừa",
          price: 5000,
        },
      },

      {
        id: "ts01-2",
        price: 40000,
        ice: 30,
        sugar: 50,
        topping: {
          id: "topping-1",
          name: "thạch dừa",
          price: 5000,
        },
      },

      {
        id: "ts01-3",
        price: 40000,
        ice: 50,
        sugar: 30,
        topping: {
          id: "topping-1",
          name: "thạch dừa",
          price: 5000,
        },
      },

      {
        id: "ts01-1",
        price: 40000,
        ice: 50,
        sugar: 50,
        topping: {
          id: "topping-1",
          name: "thạch dừa",
          price: 5000,
        },
      },
    ],
  },
];

let cart = [];
