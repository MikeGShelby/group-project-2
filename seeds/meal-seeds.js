const { Meal } = require('../models');

const mealData = [
  {
    title: 'Meal Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    calories: 200,
    total_carbs: 10,
    total_sugars: 6,
    total_fats: 8,
    gf: true,
    price: 9.50,
  },
  {
    title: 'Meal Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-2.jpg',
    calories: 450,
    total_carbs: 12,
    total_sugars: 9,
    total_fats: 15,
    gf: false,
    price: 9.50,
  },
  {
    title: 'Meal Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    calories: 200,
    total_carbs: 10,
    total_sugars: 6,
    total_fats: 8,
    gf: false,
    price: 6.5,
  },
  {
    title: 'Meal Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    calories: 300,
    total_carbs: 10,
    total_sugars: 6,
    total_fats: 8,
    gf: true,
    price: 10.50,
  },
  {
    title: 'Meal Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    calories: 290,
    total_carbs: 3,
    total_sugars: 3,
    total_fats: 4,
    gf: false,
    price: 10.00,
  },
  {
    title: 'Meal Item 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    calories: 500,
    total_carbs: 15,
    total_sugars: 15,
    total_fats: 9,
    gf: true,
    price: 8.50,
  }
];

const seedMeals = () => Meal.bulkCreate(mealData);

module.exports = seedMeals;
