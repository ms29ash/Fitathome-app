const items = [
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b8",
    },
    name: "One-Tray Cashew Chicken",
    type: "Non-Veg",
    description:
      "Meal prepping couldn t be easier when you only need one baking tray to make it. Try this delicious one-tray cashew chicken meal prep recipe for 4 days  worth of tasty lunches",
    image:
      "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/01/22131624/Cashew-chicken-1800-12001-min.jpg",
    price: 239,
    ratings: "4.5",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b5",
    },
    name: "Salmon",
    type: "Non-Veg",
    description:
      "Many types of fish could qualify as fitness foods, but salmon certainly tops the list   it s sustainable, low in mercury, easy to prepare, and packed with nutrients to promote healthy muscles and a strong cardiovascular system. Salmon is also one of the best sources of Omega-3 fats you can find. Enjoy smoked salmon as part of breakfast or brunch, or make a healthy and satisfying salmon burger for dinner.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/4/0/HE_smoked-salmon-istock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1449264491029.jpeg",
    price: 129,
    ratings: "4.2",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c0",
    },
    name: "Chicken Tikka Masala",
    type: "Non-Veg",
    description:
      "Sometimes you just need something quick and easy to rely on, right? This incredible chicken tikka masala is rich, creamy, and delicious   the ideal lunch to look forward to.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2020/09/chickentikkamealprep-FEATURE_1600761714.jpg",
    price: 519,
    ratings: "4.6",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07bf",
    },
    name: "Lime & Chilli Turkey Burgers",
    type: "Non-Veg",
    description:
      "These low-cal homemade lime and chilli turkey burgers will spice up your meal prep game and then some, at only 147kcal per burger.",
    image:
      "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2016/08/03113402/burgers-1800-1200.jpg",
    price: 249,
    ratings: "3.4",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b2",
    },
    name: "Nuts",
    type: "Vegan",
    description:
      "One ounce of nuts provides 150 to 200 calories of good-for-you fuel   choose the highest-protein options, like pistachios and almonds, for after exercise.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/4/26/1/FNK_PEAR-PISTACHIO-GUCAMOLE_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542465369.jpeg",
    price: 249,
    ratings: "4.7",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07be",
    },
    name: "Bangin  Barbecue Chicken & Rice",
    type: "Non-Veg",
    description:
      "This bangin  barbecue chicken and rice meal prep recipe takes under 15 minutes to make and will keep you full for hours, with a huge 41g protein per meal.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2019/08/Chicken-and-rice-meal-prep-1-min_1615282189.jpg",
    price: 589,
    ratings: "4.2",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c3",
    },
    name: "Black Bean and Sweet Potato Chili",
    type: "Vegan",
    description:
      "If you re in the mood for something warm, with a little bit of hearty spice to hit the spot, this chili recipe is perfect for a filling meal after your workout. Dish out a bowl for yourself, or even enjoy it over rice for some extra grain goodness.",
    image:
      "https://www.thespruceeats.com/thmb/kxna88rbQl9HoHG8xdlXHRdQXU8=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/black-bean-vegetarian-chili-sweet-potatoes-3377973-hero-01-b761b0c353d243d2a468bc015a44f3e0.jpg",
    price: 499,
    ratings: "3.8",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c1",
    },
    name: "Apple Lentil Salad",
    type: "Vegan",
    description:
      "Lentils are a great source of vegan protein, and mixing them in with apples in this yummy salad gives some delicious fall flavor to this light, yet filling recipe.",
    image:
      "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2018/10/c-apple-lentil-salad-2.jpg",
    price: 169,
    ratings: "4.1",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c2",
    },
    name: "Teriyaki Tofu Kebabs",
    type: "Vegan",
    description:
      "From the sweetness of the pineapple to the savory, filling tofu, these kebabs are the perfect post-workout recipe to satiate your rumbling stomach. Especially if you re not a fan of grains after your exercise regimen, this recipe is right up your ally.",
    image:
      "https://san-j.com/wp-content/uploads/2020/09/TeriyakiLIteKabobs_web.jpg",
    price: 309,
    ratings: "4.2",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b9",
    },
    name: "Low-Carb Loaf Tin Lasagne",
    type: "Non-Veg",
    description:
      "Craving lasagne, but don t want to make a whole tray of the stuff? Try loaf tin lasagne. You ll get 3 easy portions for 3 days  worth of low-carb, high-protein meal prep.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2019/06/Loaf-tin-lasagne-1800x1200-minopt_blog_1573554584.jpg",
    price: 49,
    ratings: "3.7",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c4",
    },
    name: "Protein Breakfast Bars",
    type: "Vegan",
    description:
      "If your workouts take place in the wee hours of the morning, you might be looking for a high-protein breakfast to usher in your wake-up call. These bars are both vegan and paleo, so you know they ll satisfy all of your protein needs. Between the coconut, mixed nuts and seeds, these bars are sure to appease your hunger.",
    image:
      "https://wallflowerkitchen.com/wp-content/uploads/2016/07/Paleo-Breakfast-Bars-1.jpg",
    price: 289,
    ratings: "4.8",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b0",
    },
    name: "Chocolate Milk",
    type: "Veg",
    description:
      "There's continually mounting evidence to support the idea that the balance of carbs and protein found in chocolate milk is ideal for post-workout recovery. For folks who cannot digest dairy, chocolate soy milk would be the best comparable dairy-free option.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/27/0/HE_chocolate-milk-istock.jpg.rend.hgtvcom.616.462.suffix/1438024816094.jpeg",
    price: 399,
    ratings: "4.5",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07bc",
    },
    name: "Chicken, Sweet Potato & Greens",
    type: "Non-Veg",
    description:
      "This chicken meal prep recipe keeps things interesting by adding different spices to each chicken breast.",
    image:
      "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/01/22134628/Chicken-sweet-potato-green-beans-580x310-min.jpg",
    price: 449,
    ratings: "3.7",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07ae",
    },
    name: "Oatmeal",
    type: "Vegan",
    description:
      "Not only does oatmeal make a delicious breakfast, but the soluble fiber promotes heart health and controls dips in blood sugar. A small bowl with fresh fruit makes a terrific pre-workout meal.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/5/0/FNK_Healthy-Overnight-Blueberry-Almond-Oatmeal_s4x3.jpg.rend.hgtvcom.616.462.suffix/1394028428944.jpeg",
    price: 399,
    ratings: "4.5",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c6",
    },
    name: "Quinoa Corn Edamame Salad",
    type: "Vegan",
    description:
      "Quinoa and edamame are both delicious and protein-dense vegan foods, and paring them together in this delightful salad, balanced by the sweetness of the corn is the perfect post-workout meal.",
    image:
      "https://86lemons.com/wp-content/uploads/2013/01/EdamameSalad86L1.jpg",
    price: 549,
    ratings: "3.7",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07af",
    },
    name: "Greek Yogurt",
    type: "Veg",
    description:
      "The strained Greek-style yogurt contains more protein and less lactose than unstrained yogurt, making it a tasty choice for exercise enthusiasts. Top with granola for a healthy snack or as part of a meal.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/31/2/SP_FN-healthy-greek-yogurt-1_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609389092.jpeg",
    price: 169,
    ratings: "3.9",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07c5",
    },
    name: "Brownie Batter Overnight Oats",
    type: "Veg",
    description:
      "If you re looking for a decadent, delicious breakfast, you ve found it right here. Oatmeal is a great source of protein, and when you add the protein powder that the recipe calls for, you re sure to get your fill. With this chocolatey oatmeal s delicious flavor, it s hard to believe you re eating something healthy",
    image:
      "https://runningonrealfood.com/wp-content/uploads/2017/03/brownie-batter-overnight-protein-oats-vegan-8.jpg",
    price: 109,
    ratings: "4.6",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07ad",
    },
    name: "Peanut Butter",
    type: "Vegan",
    description:
      "Healthy fats and protein provide sustained energy and protein to boost muscle performance. Add PB to a post-workout smoothie, or make a batch of energy bars to tuck in your gym bag.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591055858.jpeg",
    price: 149,
    ratings: "4.8",
  },

  {
    _id: {
      $oid: "621e58775b7e90e4525f07ba",
    },
    name: "Harissa Chicken & Moroccan Couscous",
    type: "Non-Veg",
    description:
      "Fire up your tastebuds with this spicy, succulent harissa chicken. Paired with aromatic Moroccan-style couscous, it s a super-satisfying classic to enjoy all year round.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2021/12/Harissa-Chicken-HERO_1640345749-1008x672.jpeg",
    price: 229,
    ratings: "3.9",
  },
  {
    _id: {
      $oid: "62bbe7d637026e4406954901",
    },
    name: "Ranch-Style Greek Yogurt Dip",
    type: "Veg",
    description:
      "Raise your snacking game with Greek yogurt ranch dip. A good source of protein and low in fat, it serves as a creamy canvas to take on your favorite flavors like the one in this recipe for ranch-style dip. Create your own bento box by pairing it with veggies, whole wheat crackers and Havarti cheese—or whatever else satisfies",
    image:
      "https://www.usdairy.com/getattachment/d9382fe7-3dd1-4da1-b03e-fd839226260b/ranch-style-greek-yogurt-dip.jpg",
    price: 250,
    ratings: "4.2",
  },
  {
    _id: {
      $oid: "621e587nn75b7e90e4525f07bd",
    },
    name: "Asian Peanut Butter Sesame Chicken",
    type: "Non-Veg",
    description:
      "Try switching up your chicken meal prep for our Asian-inspired peanut butter chicken, at only 498kcal and a huge 40g protein per meal.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2019/06/Peanut-butter-chicken-1800-1200-minopt_blog_1573554914.jpg",
    price: 309,
    ratings: "3.5",
  },
  {
    _id: {
      $oid: "621e58775bbb7e90e4525f07b6",
    },
    name: "Spicy Chicken With Couscous",
    type: "Non-Veg",
    description:
      "This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it s a simple way to liven up your routine from plain old chicken and rice.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg",
    price: 129,
    ratings: "4.4",
  },
];

export const popularItems = [
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b3",
    },
    name: "Lean Meats",
    type: "Non-Veg",
    description:
      "Animal proteins like meat, fish, eggs and dairy products provide all the important building blocks that muscles need to stay lean and strong. Choose low-fat options like chicken and turkey breast and lean cuts of beef.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/26/0/FNK_Healthy-Juicy-Grilled-Cheeseburgers_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611669852.jpeg",
    price: 309,
    ratings: "4.8",
  },
  {
    _id: {
      $oid: "621e58775b7e90e4525f07b4",
    },
    name: "Seeds",
    type: "Vegan",
    description:
      "Seeds are another superfood option, providing protein, minerals and inflammation-fighting Omega-3 fats that help protect cells from damage. Flax, pumpkin, chia and sunflower seeds are just a few of the irresistible options",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/6/1/VF0302_Pumpkin-Seed-Dried-Cherry-Trail-Mix_s4x3.jpg.rend.hgtvcom.616.462.suffix/1388509453371.jpeg",
    price: 229,
    ratings: "4.4",
  },

  {
    _id: {
      $oid: "621e587gh75b7e90e4525f07bb",
    },
    name: "Chicken Pasta Salad",
    type: "Non-Veg",
    description:
      "This high-protein buffalo chicken pasta salad will change your chicken meal prep game forever. Trust us   buffalo sauce makes everything better.",
    image:
      "https://blogscdn.thehut.net/app/uploads/sites/478/2019/06/Buffalo-chicken-1800x1200-minopt_blog_1573554985.jpg",
    price: 149,
    ratings: "3.3",
  },

  {
    _id: {
      $oid: "621e58775b7ebkb90e4525f07b7",
    },
    name: "Chicken & Tabbouleh",
    type: "Non-Veg",
    description:
      "Liven up your chicken meal prep with this quick harissa chicken and tabbouleh   packed with protein and healthy carbohydrates",
    image:
      "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2017/11/13132628/MYP-Vegan-Harssa-Chicken-Meal-Prep-1800x1200.jpg",
    price: 489,
    ratings: "3.1",
  },
  {
    _id: {
      $oid: "621e58775b7e90e44525f07b1",
    },
    name: "Eggs",
    type: "Non-Veg",
    description:
      "Eggs provide protein, Omega-3 fats, vitamin B12 and even some vitamin D! Eat both the yolks and the whites to reap all the healthy benefits. Egg sandwiches make a wonderful grab-and-go post-exercise breakfast, and eggs can be combined with potatoes for a healthy and satisfying weekend meal.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/26/0/WU0411H_baked-eggs-in-hash-brown-cups-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1385070928415.jpeg",
    price: 519,
    ratings: "4.9",
  },
];

export default items;
