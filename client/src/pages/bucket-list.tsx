import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, List, Heart, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface BucketItem {
  text: string;
  completed: boolean;
  category: "travel" | "experience" | "romantic" | "adventure";
}

const initialBucketList: BucketItem[] = [
  { text: "Visit Paris together", completed: false, category: "travel" },
  { text: "Watch the sunrise from a mountain", completed: false, category: "romantic" },
  { text: "Go skydiving together", completed: false, category: "adventure" },
  { text: "Take a cooking class", completed: false, category: "experience" },
  { text: "See the Northern Lights", completed: false, category: "travel" },
  { text: "Have a picnic under the stars", completed: false, category: "romantic" },
  { text: "Go bungee jumping", completed: false, category: "adventure" },
  { text: "Learn to dance together", completed: false, category: "experience" },
  { text: "Visit Japan during cherry blossom season", completed: false, category: "travel" },
  { text: "Write love letters to read on our 50th anniversary", completed: false, category: "romantic" },
  { text: "Go on a safari", completed: false, category: "adventure" },
  { text: "Take a pottery class", completed: false, category: "experience" },
  { text: "Road trip across the country", completed: false, category: "travel" },
  { text: "Recreate our first date", completed: false, category: "romantic" },
  { text: "Go white water rafting", completed: false, category: "adventure" },
  { text: "Learn a new language together", completed: false, category: "experience" }
];

const categoryColors = {
  travel: "bg-blue-500",
  experience: "bg-green-500", 
  romantic: "bg-pink-500",
  adventure: "bg-orange-500"
};

const categoryIcons = {
  travel: "✈️",
  experience: "🎨",
  romantic: "💕",
  adventure: "⚡"
};

export default function BucketList() {
  const [bucketList, setBucketList] = useState<BucketItem[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const saved = localStorage.getItem("anniversary-bucket-list");
    if (saved) {
      setBucketList(JSON.parse(saved));
    } else {
      setBucketList(initialBucketList);
    }
  }, []);

  const toggleItem = (index: number) => {
    const newList = [...bucketList];
    newList[index].completed = !newList[index].completed;
    setBucketList(newList);
    localStorage.setItem("anniversary-bucket-list", JSON.stringify(newList));
  };

  const filteredList = filter === "all" 
    ? bucketList 
    : bucketList.filter(item => item.category === filter);

  const completedCount = bucketList.filter(item => item.completed).length;
  const totalCount = bucketList.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <List className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Our Bucket List
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Dreams and adventures we want to share together
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-700">Dreams Achieved</span>
                <span className="text-2xl font-bold text-green-500">{completedCount}/{totalCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-teal-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">{progressPercentage.toFixed(1)}% completed</p>
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All Dreams
          </Button>
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full capitalize"
            >
              {categoryIcons[category as keyof typeof categoryIcons]} {category}
            </Button>
          ))}
        </motion.div>

        {/* Bucket List Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-200 ${
                item.completed
                  ? "bg-gradient-to-br from-green-400 to-teal-500 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => toggleItem(bucketList.indexOf(item))}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                  item.completed
                    ? "border-white bg-white"
                    : "border-gray-300"
                }`}>
                  {item.completed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-green-500 font-bold"
                    >
                      ✓
                    </motion.div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium mb-2 ${item.completed ? "text-white line-through" : "text-gray-800"}`}>
                    {item.text}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {categoryIcons[item.category]}
                    </span>
                    <span className={`text-sm px-2 py-1 rounded-full capitalize ${
                      item.completed 
                        ? "bg-white/20 text-white" 
                        : `${categoryColors[item.category]} text-white`
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Star className="w-12 h-12 text-green-400 mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-green-600 mb-4">
              Dreams We'll Chase Together
            </h3>
            <p className="text-gray-600 text-lg">
              Every dream on this list is a promise of adventures to come. 
              Together, we'll turn these dreams into beautiful memories.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}