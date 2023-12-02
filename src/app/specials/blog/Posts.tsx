"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carrot1 from '../../../../public/images/specials/posts/carrot1.webp';
import carrot2 from '../../../../public/images/specials/posts/carrot2.webp';
import carrot3 from '../../../../public/images/specials/posts/carrot3.webp';
import avocado1 from '../../../../public/images/specials/posts/avocado1.webp';
import avocado2 from '../../../../public/images/specials/posts/avocado2.webp';
import avocado3 from '../../../../public/images/specials/posts/avocado3.webp';
import blueberry1 from '../../../../public/images/specials/posts/blueberry1.webp';
import blueberry2 from '../../../../public/images/specials/posts/blueberry2.webp';
import blueberry3 from '../../../../public/images/specials/posts/blueberry3.webp';
import carrotGinger from '../../../../public/images/specials/posts/carrot-ginger.webp';
import avocadoSalad from '../../../../public/images/specials/posts/avocado-salad.webp';
import blueberryOats from '../../../../public/images/specials/posts/blueberry-oats.webp';
import SinglePostPage from "./SinglePostPage";
import GeneratePosts from "./GeneratePosts"

const staticPosts = [
  {
    id: 1,
    date: "10/10/23",
    title: "Benefits of the Carrot",
    text: "Carrots are a versatile vegetable celebrated for their numerous health benefits. These vibrant orange root vegetables are notably rich in beta-carotene, a precursor to vitamin A, which is essential for maintaining healthy vision and promoting proper immune system function. Their high fiber content aids in digestion, supporting gastrointestinal health and weight management by inducing a feeling of fullness. Carrots are also a source of antioxidants, such as vitamin C and various phytonutrients, which may help reduce the risk of chronic diseases and protect cells from damage caused by free radicals. This antioxidant prowess is beneficial for heart health and may reduce the risk of certain cancers. Beyond health benefits, carrots contribute to radiant skin, thanks to their vitamin C content, which promotes collagen production. Incorporating carrots into your diet is easy; whether eaten raw as a crunchy snack, added to salads, or cooked into hearty soups and stews, these humble vegetables offer a delicious and nutritious addition to a balanced diet.",
    images: [carrot1, carrot2, carrot3],
    recipe: {
      name: "Carrot and Ginger Soup",
			image: carrotGinger,
      ingredients: [
        "6 large carrots peeled and chopped",
        "1 small onion chopped",
        "2 cloves garlic minced",
        "1-inch piece of fresh ginger grated",
        "4 cups vegetable broth",
        "1 cup coconut milk",
        "2 tablespoons olive oil",
        "1 teaspoon ground cumin",
        "1/2 teaspoon ground coriander",
        "Salt and pepper to taste",
        "Fresh cilantro leaves for garnish (optional)",
      ],
      instructions: [
        "Heat the olive oil in a large soup pot over medium heat. Add the chopped onion and sauté for 3-4 minutes until it becomes translucent.",
        "Add the minced garlic and grated ginger, and sauté for an additional 1-2 minutes until fragrant.",
        "Stir in the ground cumin and coriander, and cook for another minute to release their flavors.",
        "Add the chopped carrots to the pot and season with a pinch of salt and pepper. Sauté for about 5 minutes, allowing the carrots to slightly soften.",
        "Pour in the vegetable broth and bring the mixture to a boil. Reduce the heat to a simmer and cover the pot. Let it cook for 20-25 minutes, or until the carrots are tender.",
        "Using an immersion blender or a countertop blender, puree the soup until smooth and creamy.",
        "Return the pureed soup to the pot and stir in the coconut milk. Simmer for an additional 5 minutes, allowing the flavors to meld together.",
        "Taste and adjust the seasoning with more salt and pepper, if needed.",
        "Serve the savory carrot and ginger soup hot, garnished with fresh cilantro leaves for a burst of freshness (optional).",
      ],
    },
  },
  {
    id: 2,
    date: "06/17/23",
    title: "The Green Gold",
    text: "Avocado, often called \"green gold\", is a superfood that has taken the culinary world by storm. These creamy, green gems are not only a delightful addition to your plate but also packed with health benefits. Avocados are rich in heart-healthy monounsaturated fats, which can lower bad cholesterol levels and reduce the risk of heart disease. They are a fantastic source of fiber, aiding digestion and providing a lasting feeling of fullness. Beyond its nutritional merits, avocados are incredibly versatile. From the beloved avocado toast to guacamole, salads, and even smoothies, their creamy texture and mild, nutty flavor make them a popular ingredient in many dishes. They are also an excellent source of essential nutrients like potassium, vitamin K, and folate. So, if you haven't already, it's time to dive into the enchanting world of avocados and savor their delightful taste and health benefits.",
    images: [avocado1, avocado2, avocado3],
    recipe: {
      name: "Creamy Avocado and Tomato Salad",
			image: avocadoSalad,
      ingredients: [
        "2 ripe avocados, peeled, pitted, and diced",
        "2 cups cherry tomatoes, halved",
        "1/4 red onion, finely sliced",
        "1/4 cup fresh basil leaves, chopped",
        "2 tablespoons extra-virgin olive oil",
        "2 tablespoons balsamic vinegar",
        "1 clove garlic, minced",
        "Salt and black pepper to taste",
        "Crumbled feta cheese (optional, for garnish)",
      ],
      instructions: [
        "In a large salad bowl, combine the diced avocados, halved cherry tomatoes, finely sliced red onion, and chopped fresh basil.",
        "In a separate small bowl, whisk together the extra-virgin olive oil, balsamic vinegar, minced garlic, salt, and black pepper to create the dressing.",
        "Drizzle the dressing over the avocado and tomato mixture.",
        "Gently toss the salad to coat the ingredients with the dressing thoroughly.",
        "Taste the salad and adjust the seasoning, adding more salt, pepper, or balsamic vinegar if desired.",
        "If desired, sprinkle crumbled feta cheese on top of the salad as a garnish for a creamy, tangy finish.",
        "Serve the Creamy Avocado and Tomato Salad as a refreshing side dish or a light and healthy lunch.",
      ],
    },
  },
  {
    id: 3,
    date: "02/23/23",
    title: "Blueberries: Nature's Tiny Powerhouses",
    text: "Blueberries, those tiny, vibrant spheres of goodness, are much more than just a sweet treat. They are nutritional powerhouses packed with antioxidants, particularly anthocyanins, which provide a wide array of health benefits. These antioxidants help protect your cells from oxidative stress, potentially reducing the risk of chronic diseases, including heart disease and certain cancers. Blueberries are also an excellent source of dietary fiber, aiding in digestion and supporting weight management. They are low in calories and high in vitamin C and vitamin K, offering additional immune-boosting and bone-strengthening benefits. Studies suggest that regular consumption of blueberries may improve cognitive function, making them a brain-boosting snack. Whether enjoyed fresh, frozen, or incorporated into a variety of dishes, blueberries are a delicious way to promote your overall health and well-being. So, next time you reach for a snack, consider reaching for nature's tiny powerhouses, the blueberries.",
    images: [blueberry1, blueberry2, blueberry3],
    recipe: {
      name: "Blueberry and Almond Overnight Oats",
			image: blueberryOats,
      ingredients: [
        "1 cup rolled oats",
        "1 cup almond milk (or your preferred milk)",
        "1/2 cup fresh or frozen blueberries",
        "2 tablespoons honey or maple syrup",
        "1/4 cup sliced almonds",
        "1/2 teaspoon vanilla extract",
        "A pinch of salt",
        "Fresh blueberries and additional sliced almonds for garnish (optional)",
      ],
      instructions: [
        "In a mason jar or a resealable container, combine the rolled oats, almond milk, fresh or frozen blueberries, honey (or maple syrup), sliced almonds, vanilla extract, and a pinch of salt.",
        "Stir all the ingredients together until well combined.",
        "Seal the container and refrigerate it overnight, or for at least 4 hours. This allows the oats to absorb the liquid and flavors, resulting in a creamy and delicious breakfast.",
        "Before serving, give the oats a good stir. If the mixture is too thick, you can add a bit more almond milk to achieve your desired consistency.",
        "Optionally, garnish your Blueberry and Almond Overnight Oats with a handful of fresh blueberries and a sprinkle of sliced almonds for extra texture and flavor.",
      ],
    },
  },
];

const Posts = () => {
	const [onPost, setOnPost] = useState<number>(0);

	return (
    <div className="h-full p-24 bg-[#ECECDB] w-full min-h-screen pb-[11rem] sm:px-6 sm:pt-6">
      <AnimatePresence mode="wait">
        {onPost === 0 ? (
          <motion.div
            className="h-full w-full space-y-12 flip-posts-animation"
            key={"posts"}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: 50,
              opacity: 0,
              transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 },
            }}
          >
            {staticPosts.map((post) => (
              <GeneratePosts key={post.id} post={post} setOnPost={setOnPost} />
            ))}
          </motion.div>
        ) : (
          <SinglePostPage
            staticPosts={staticPosts}
            onPost={onPost}
            setOnPost={setOnPost}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Posts