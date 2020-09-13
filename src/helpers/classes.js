const dafaultClasses = [
  {
    id: 1,
    title: "Cooking Pasta with Giada De Laurentiis",
    instructor: "Giada De Laurentiis",
    description: "Learn to cook this great pasta from your fave chef",
    duration: 25,
    featuredImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Pasta-Ponza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814646967.jpeg',
    classType: 'on-demand',
    isFavored: true,
  },
  {
    id: 2,
    title: "Cooking Lasagne with Giada",
    instructor: "Giada De Laurentiis",
    description: "Learn to cook the best meal on the planet with a legendary Food Network Star",
    duration: 45,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_lasagna.jpg.rend.hgtvcom.826.620.suffix/1382982573090.jpeg',
    classType: 'on-demand',
  },
  {
    id: 3,
    title: "Grilling Burgers with Bobby",
    instructor: "Bobby Flay",
    description: "Grille burgers with this professional grillmaster, Bobby Flay. You won't regret it!",
    duration: 35,
    featureImageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/15/0/FNM060109BobbysBurgers004_burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382538951232.jpeg',
    classType: 'on-demand',
    isFavored: true,
  },
  {
    id: 4,
    title: "Comfort Foods with Ree",
    description: "Can't go wrong with Ree",
    instructor: "Ree Drummond",
    duration: 35,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/19/0/WU0809_Twice-Baked-Potato-Casserole_s4x3.jpg.rend.hgtvcom.966.773.suffix/1429279262392.jpeg',
    classType: 'live',
  },
]

const moreClasses = [
  {
    id: 105,
    title: "CROCKPOT SPAGHETTI SAUCE",
    description: "This Crockpot Spaghetti Sauce is hearty and rich and develops the most incredible flavor in the slow cooker! It’s perfect for a deeply satisfying and super easy weeknight meal. Succulent seasoned ground beef with a host of veggies, in a pasta sauce, with Italian seasoning – it will please the hungriest of bellies!",
    instructor: "Becky Hardin",
    duration: 60,
    featureImage: 'https://www.thecookierookie.com/wp-content/uploads/2020/08/crockpot-spaghetti-sauce-recipe-3-of-7-600x900.jpg',
    classType: 'on-demand',
  },
  {
    id: 106,
    title: 'APPLE CIDER MARGARITAS',
    description: 'If you are looking for a delicious cocktail to enjoy this fall, these apple cider margaritas are a delight! Easy to make, they are sweetened with maple syrup with a cinnamon rim, and are very easy to sip!',
    instructor: "Becky Hardin",
    duration: 15,
    featureImage: 'https://www.thecookierookie.com/wp-content/uploads/2020/09/apple-cider-margaritas-5-of-9-600x900.jpg',
    classType: 'on-demand',
    isFavored: true,
  },
  {
    id: 107,
    title: 'BAKED CHICKEN TACOS',
    description: 'Chicken Tacos are the perfect EASY weeknight dinner. These OVEN BAKED chicken tacos have lots of flavor and none of the stress. The ultimate recipe for serving a crowd. This is the most popular recipe on The Cookie Rookie, being pinned over 2 million times and viewed over 6 million times. Make the best tacos ever for dinner tonight!',
    instructor: "Becky Hardin",
    duration: 35,
    featureImage: 'https://www.thecookierookie.com/wp-content/uploads/2015/12/oven-baked-spicy-chicken-tacos-4-of-14.jpg',
    classType: 'on-demand',
    isFavored: true,
  },
  {
    id: 108,
    title: 'FRESH STRAWBERRY PIE RECIPE',
    description: 'Fresh Strawberry Pie is so sweet and delicious! A crispy pie crust filled with fresh strawberries and covered in a glaze and whipped cream. An easy strawberry pie to serve for any celebration. It’s the ultimate gorgeous, delicious, and simple dessert just perfect for every occasion.',
    instructor: "Becky Hardin",
    duration: 20,
    featureImage: 'https://www.thecookierookie.com/wp-content/uploads/2017/08/fresh-strawberry-pie-8-of-8.jpg',
    classType: 'on-demand',
  }
]

export default [...dafaultClasses, ...moreClasses]
