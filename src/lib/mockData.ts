const menuInventory = [
    {
      name: "Sisig Wrap",
      category: "Snacks",
      subCategory: [
        {
          name: "Solo",
          price: 150,
        },
        {
          name: "Buy 1 Take 1",
          price: 250,
        },
      ],
    },
    {
      name: "Beef Shawarma",
      category: "Snacks",
      subCategory: [
        {
          name: "Solo",
          price: 180,
        },
        {
          name: "Buy 1 Take 1",
          price: 300,
        },
      ],
    },
    {
      name: "Beef Shawarma Rice",
      category: "Main Dishes",
      subCategory: [
        {
          name: "Solo",
          price: 150,
        },
        {
          name: "Barkada",
          price: 270,
        },
        {
          name: "Family",
          price: 400,
        },
      ],
    },
    {
      name: "Tapsilog Rice",
      category: "Main Dishes",
      subCategory: [
        {
          name: "Solo",
          price: 150,
        },
        {
          name: "Barkada",
          price: 270,
        },
        {
          name: "Family",
          price: 400,
        },
      ],
    },
    {
      name: "Sisig Rice",
      category: "Main Dishes",
      subCategory: [
        {
          name: "Solo",
          price: 140,
        },
        {
          name: "Barkada",
          price: 260,
        },
        {
          name: "Family",
          price: 380,
        },
      ],
    },
    {
      name: "Sisig",
      category: "Main Dishes",
      subCategory: [
        {
          name: "Solo",
          price: 140,
        },
        {
          name: "Barkada",
          price: 260,
        },
        {
          name: "Family",
          price: 380,
        },
      ],
    },
    // Add Drinks Category
    {
      name: "Coke",
      category: "Drinks",
      subCategory: [
        {
          name: "Swakto",
          price: 50,
        },
        {
          name: "Mismo",
          price: 50,
        },
        {
          name: "Malaki",
          price: 50,
        },
      ],
    },
    {
      name: "Royal",
      category: "Drinks",
      subCategory: [
        {
          name: "Swakto",
          price: 50,
        },
        {
          name: "Mismo",
          price: 50,
        },
        {
          name: "Malaki",
          price: 50,
        },
      ],
    },
    {
      name: "Sprite",
      category: "Drinks",
      subCategory: [
        {
          name: "Swakto",
          price: 50,
        },
        {
          name: "Mismo",
          price: 50,
        },
        {
          name: "Malaki",
          price: 50,
        },
      ],
    },
    {
      name: "Regular Rice",
      category: "Addons",
      subCategory: [
        {
          name: "1x Qty",
          price: 10,
        },
        {
          name: "2x Qty",
          price: 20,
        },
        {
          name: "3x Qty",
          price: 30,
        },
      ],
    },
    {
      name: "Java Rice",
      category: "Addons",
      subCategory: [
        {
          name: "1x Qty",
          price: 10,
        },
        {
          name: "2x Qty",
          price: 20,
        },
        {
          name: "3x Qty",
          price: 30,
        },
      ],
    },
    {
      name: "Egg",
      category: "Addons",
      subCategory: [
        {
          name: "1x Qty",
          price: 10,
        },
        {
          name: "2x Qty",
          price: 20,
        },
        {
          name: "3x Qty",
          price: 30,
        },
      ],
    },
  ];
  
const OrdersMockData = [
    {
      "_id": "66e6441e33ef94e12cd69446",
      "order_list": [
        {
          "product_name": "sisig",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "shawarma",
          "qty": 2,
          "price": 50
        },
        {
          "product_name": "shawarma with rice",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Dine In",
      "payment_status": "paid",
      "status": false,
      "money_received": 1000,
      "total": 210,
      "createdAt": "2024-09-15T10:19:10.172Z",
      "updatedAt": "2024-09-15T10:19:10.172Z",
      "order_id": 1,
      "__v": 0
    },
    {
      "_id": "66e6442e33ef94e12cd69449",
      "order_list": [
        {
          "product_name": "hotdog",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "sisig",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Take Out",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 1000,
      "createdAt": "2024-09-15T10:19:10.172Z",
      "updatedAt": "2024-09-15T10:19:10.172Z",
      "order_id": 2,
      "__v": 0
    },
    {
      "_id": "66e6442e33ef94e12cd69449",
      "order_list": [
        {
          "product_name": "hotdog",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "sisig",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Delivery",
      "payment_status": "paid",
      "status": true,
      "money_received": 1000,
      "total": 1000,
      "createdAt": "2024-10-22T19:49:25.032Z",
      "updatedAt": "2024-10-22T19:49:25.032Z",
      "order_id": 3,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69451",
      "order_list": [
        { "product_name": "burger", "qty": 2, "price": 75 },
        { "product_name": "fries", "qty": 1, "price": 45 }
      ],
      "addons": [{ "product_name": "ketchup", "qty": 1, "price": 5 }],
      "order_method": "Dine In",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 400,
      "total": 195,
      "createdAt": "2024-10-23T08:30:45.182Z",
      "updatedAt": "2024-10-23T08:30:45.182Z",
      "order_id": 4,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69452",
      "order_list": [
        { "product_name": "pasta", "qty": 1, "price": 120 },
        { "product_name": "garlic bread", "qty": 1, "price": 25 }
      ],
      "addons": [{ "product_name": "cheese", "qty": 1, "price": 15 }],
      "order_method": "Take Out",
      "payment_status": "paid",
      "status": true,
      "money_received": 500,
      "total": 160,
      "createdAt": "2024-10-23T09:00:25.102Z",
      "updatedAt": "2024-10-23T09:00:25.102Z",
      "order_id": 5,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69453",
      "order_list": [
        { "product_name": "pizza", "qty": 1, "price": 200 },
        { "product_name": "mozzarella sticks", "qty": 1, "price": 90 }
      ],
      "addons": [{ "product_name": "extra cheese", "qty": 1, "price": 30 }],
      "order_method": "Delivery",
      "payment_status": "paid",
      "status": true,
      "money_received": 1000,
      "total": 320,
      "createdAt": "2024-10-23T09:30:10.182Z",
      "updatedAt": "2024-10-23T09:30:10.182Z",
      "order_id": 6,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69454",
      "order_list": [
        { "product_name": "shawarma", "qty": 2, "price": 60 },
        { "product_name": "hummus", "qty": 1, "price": 50 }
      ],
      "addons": [{ "product_name": "extra garlic sauce", "qty": 1, "price": 15 }],
      "order_method": "Dine In",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 185,
      "createdAt": "2024-10-23T10:00:10.182Z",
      "updatedAt": "2024-10-23T10:00:10.182Z",
      "order_id": 7,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69455",
      "order_list": [
        { "product_name": "sushi", "qty": 4, "price": 100 },
        { "product_name": "tempura", "qty": 2, "price": 90 }
      ],
      "addons": [{ "product_name": "soy sauce", "qty": 1, "price": 5 }],
      "order_method": "Take Out",
      "payment_status": "paid",
      "status": true,
      "money_received": 1500,
      "total": 485,
      "createdAt": "2024-10-23T11:00:10.182Z",
      "updatedAt": "2024-10-23T11:00:10.182Z",
      "order_id": 8,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69456",
      "order_list": [
        { "product_name": "tacos", "qty": 3, "price": 120 },
        { "product_name": "nachos", "qty": 2, "price": 75 }
      ],
      "addons": [{ "product_name": "sour cream", "qty": 1, "price": 10 }],
      "order_method": "Delivery",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 405,
      "createdAt": "2024-10-23T12:00:10.182Z",
      "updatedAt": "2024-10-23T12:00:10.182Z",
      "order_id": 9,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69457",
      "order_list": [
        { "product_name": "ramen", "qty": 1, "price": 180 },
        { "product_name": "gyoza", "qty": 2, "price": 60 }
      ],
      "addons": [{ "product_name": "egg", "qty": 1, "price": 20 }],
      "order_method": "Dine In",
      "payment_status": "paid",
      "status": true,
      "money_received": 1000,
      "total": 320,
      "createdAt": "2024-10-23T13:00:10.182Z",
      "updatedAt": "2024-10-23T13:00:10.182Z",
      "order_id": 10,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69458",
      "order_list": [
        { "product_name": "pancit", "qty": 2, "price": 130 },
        { "product_name": "lumpia", "qty": 3, "price": 90 }
      ],
      "addons": [{ "product_name": "extra sauce", "qty": 1, "price": 10 }],
      "order_method": "Take Out",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 410,
      "createdAt": "2024-10-23T14:00:10.182Z",
      "updatedAt": "2024-10-23T14:00:10.182Z",
      "order_id": 11,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69459",
      "order_list": [
        { "product_name": "kebab", "qty": 2, "price": 100 },
        { "product_name": "pita bread", "qty": 3, "price": 45 }
      ],
      "addons": [{ "product_name": "tzatziki", "qty": 1, "price": 15 }],
      "order_method": "Delivery",
      "payment_status": "paid",
      "status": true,
      "money_received": 500,
      "total": 355,
      "createdAt": "2024-10-23T15:00:10.182Z",
      "updatedAt": "2024-10-23T15:00:10.182Z",
      "order_id": 12,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69460",
      "order_list": [
        { "product_name": "spaghetti", "qty": 1, "price": 95 },
        { "product_name": "meatballs", "qty": 2, "price": 50 }
      ],
      "addons": [{ "product_name": "parmesan", "qty": 1, "price": 10 }],
      "order_method": "Dine In",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 205,
      "createdAt": "2024-10-23T16:00:10.182Z",
      "updatedAt": "2024-10-23T16:00:10.182Z",
      "order_id": 13,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69461",
      "order_list": [
        { "product_name": "doner", "qty": 1, "price": 150 },
        { "product_name": "biryani", "qty": 1, "price": 200 }
      ],
      "addons": [{ "product_name": "raita", "qty": 1, "price": 25 }],
      "order_method": "Take Out",
      "payment_status": "paid",
      "status": true,
      "money_received": 1000,
      "total": 375,
      "createdAt": "2024-10-23T17:00:10.182Z",
      "updatedAt": "2024-10-23T17:00:10.182Z",
      "order_id": 14,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69462",
      "order_list": [
        { "product_name": "adobo", "qty": 2, "price": 150 },
        { "product_name": "caldereta", "qty": 1, "price": 175 }
      ],
      "addons": [{ "product_name": "extra rice", "qty": 2, "price": 20 }],
      "order_method": "Delivery",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 515,
      "createdAt": "2024-10-23T18:00:10.182Z",
      "updatedAt": "2024-10-23T18:00:10.182Z",
      "order_id": 15,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69463",
      "order_list": [
        { "product_name": "pad thai", "qty": 1, "price": 150 },
        { "product_name": "spring rolls", "qty": 2, "price": 100 }
      ],
      "addons": [{ "product_name": "peanut sauce", "qty": 1, "price": 20 }],
      "order_method": "Dine In",
      "payment_status": "paid",
      "status": true,
      "money_received": 500,
      "total": 270,
      "createdAt": "2024-10-23T19:00:10.182Z",
      "updatedAt": "2024-10-23T19:00:10.182Z",
      "order_id": 16,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69464",
      "order_list": [
        { "product_name": "steak", "qty": 1, "price": 250 },
        { "product_name": "mashed potatoes", "qty": 1, "price": 70 }
      ],
      "addons": [{ "product_name": "gravy", "qty": 1, "price": 15 }],
      "order_method": "Take Out",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 335,
      "createdAt": "2024-10-23T20:00:10.182Z",
      "updatedAt": "2024-10-23T20:00:10.182Z",
      "order_id": 17,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69465",
      "order_list": [
        { "product_name": "carbonara", "qty": 1, "price": 120 },
        { "product_name": "garlic bread", "qty": 1, "price": 25 }
      ],
      "addons": [{ "product_name": "extra cream", "qty": 1, "price": 10 }],
      "order_method": "Delivery",
      "payment_status": "paid",
      "status": true,
      "money_received": 1000,
      "total": 155,
      "createdAt": "2024-10-23T21:00:10.182Z",
      "updatedAt": "2024-10-23T21:00:10.182Z",
      "order_id": 18,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69466",
      "order_list": [
        { "product_name": "lasagna", "qty": 1, "price": 150 },
        { "product_name": "salad", "qty": 1, "price": 80 }
      ],
      "addons": [{ "product_name": "balsamic vinegar", "qty": 1, "price": 10 }],
      "order_method": "Dine In",
      "payment_status": "unpaid",
      "status": false,
      "money_received": 0,
      "total": 240,
      "createdAt": "2024-10-23T22:00:10.182Z",
      "updatedAt": "2024-10-23T22:00:10.182Z",
      "order_id": 19,
      "__v": 0
    },
    {
      "_id": "66e6451e33ef94e12cd69467",
      "order_list": [
        { "product_name": "croissant", "qty": 2, "price": 60 },
        { "product_name": "coffee", "qty": 1, "price": 50 }
      ],
      "addons": [{ "product_name": "whipped cream", "qty": 1, "price": 10 }],
      "order_method": "Take Out",
      "payment_status": "paid",
      "status": true,
      "money_received": 200,
      "total": 180,
      "createdAt": "2024-10-23T23:00:10.182Z",
      "updatedAt": "2024-10-23T23:00:10.182Z",
      "order_id": 20,
      "__v": 0
    }
];
  

const CardsMockData = [
    {   
      overall_value: 45231.89,
      past_difference: 20.1,
    },
    {   
      overall_value: 2350,
      past_difference: 180.1,
    },
    {   
      overall_value: 12234,
      past_difference: 19,
    },
    {   
      overall_value: 573,
      past_difference: 201,
    },
  ];
export { 
  menuInventory,
  OrdersMockData,
  CardsMockData
}