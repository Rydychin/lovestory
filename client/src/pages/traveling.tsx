import { motion } from "framer-motion";
import { Heart, Cake, Coffee, Star, Gift, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutShaina() {
  const personalInfo = {
    name: "Shaina Nu-Chee Cha",
    birthday: "February 16th",
    shoeSize: "Women's 4.5 / Kids 2-3"
  };

  const favoriteSweets = [
    "Macarons (honey and butter)",
    "Cookies",
    "Cake pops", 
    "Asian ice cream (taro, ube, Thai tea, matcha)",
    "Strawberry shortcake ice cream bars"
  ];

  const favoriteFoods = [
    "Pasta (especially pesto)",
    "Chicken katsu",
    "Cheeseburgers",
    "Korean tofu soup",
    "Ramen"
  ];

  const dislikes = [
    "Sushi & seafood",
    "Beans",
    "Sour cream", 
    "Soda (carbonation)",
    "Wingstop (too salty)",
    "Fast food over fancy food",
    "Yogurt",
    "Hotdogs",
    "Condiments",
    "Tomatoes",
    "Mushrooms",
    "Lamb",
    "Duck",
    "Marshmallows (unless roasted)"
  ];

  const chipotleOrder = [
    "White rice",
    "Chicken", 
    "No beans",
    "Pico de gallo",
    "Corn salsa",
    "Cheese",
    "Lettuce",
    "Guacamole on side",
    "Tortilla chips"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            All About Shaina
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything I love about my amazing girlfriend
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-gray-700 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Personal Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Full Name</h3>
              <p className="text-pink-600 dark:text-pink-400">{personalInfo.name}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Birthday</h3>
              <p className="text-pink-600 dark:text-pink-400">{personalInfo.birthday}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Shoe Size</h3>
              <p className="text-pink-600 dark:text-pink-400">{personalInfo.shoeSize}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Favorite Sweets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cake className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Favorite Sweets</h3>
            </div>
            <ul className="space-y-2">
              {favoriteSweets.map((sweet, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Heart className="w-4 h-4 text-pink-500" />
                  {sweet}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Favorite Foods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Favorite Foods</h3>
            </div>
            <ul className="space-y-2">
              {favoriteFoods.map((food, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Heart className="w-4 h-4 text-pink-500" />
                  {food}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Chipotle Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Chipotle Order</h3>
            </div>
            <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-4">
              <ul className="space-y-1">
                {chipotleOrder.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Dislikes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Things to Avoid</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dislikes.map((dislike, index) => (
                <div key={index} className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 rounded px-3 py-1">
                  {dislike}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl p-8 border border-pink-200 dark:border-pink-800">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Perfect Just The Way You Are
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every little detail about you makes me fall in love more each day. From your favorite macarons to your Chipotle order, I love learning everything about you!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}