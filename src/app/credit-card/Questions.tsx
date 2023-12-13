"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiChevronLeftOutline } from "@react-icons/all-files/ti/TiChevronLeftOutline";

type AccordionTypes = {
  i: {
    id: number;
    question: string;
    answer: string;
  };
  isExpanded: boolean;
  toggleAccordion: (id: number) => void;
  question: string;
  answer: string;
};

const questionsArray = [
  {
    id: 1,
    question: "What is the expected delivery time for the card?",
    answer:
      "After your card is approved, you will receive it within 15 business days.",
  },
  {
    id: 2,
    question:
      "How can I check the status of my GrocerGo Credit Card application?",
    answer:
      "To check the status of your application, please contact JPMorgan Customer Service.",
  },
  {
    id: 3,
    question:
      "I haven't received or have lost my GrocerGo Credt Card. How do I request a replacement?",
    answer:
      "You can request a new card via JPMorgan app, through the following path: Services > Card Reissue > select the desired card.",
  },
  {
    id: 4,
    question: "When will my annuity be charged?",
    answer:
      "The annual fee will only be charged once you activate your card, if applicable. If you have the GrocerGo Credit Card International, you won't incur any annual fees.",
  },
  {
    id: 5,
    question: "I've received my card and I want to activate it. What do I do?",
    answer:
      "Your PIN has been sent to you either via SMS or by mail. If you haven't received it, please call JPMorgan Customer Service. With your PIN in hand, download the JPMorgan app and unlock your card using the following path: Services > Activate New Card > Select the card. If you requested an additional card, the PIN has also been sent to you via SMS or mail.",
  },
  {
    id: 6,
    question: "How will I receive my bill?",
    answer:
      "The billing for this card is digital. You will receive a link via SMS and/or email, and you can access it anytime through the JPMorgan app. You can also retrieve your bill in PDF format or the barcode for payment via SMS. Save the JPMorgan Customer Service number in your contacts 555 777 9999, send the word 'bill,' and follow the instructions.",
  },
  {
    id: 7,
    question:
      "Where can I view my credit limit? How can I request a change to it?",
    answer:
      "You can check your credit limit on the JPMorgan app or via SMS. Save JPMorgan Customer Service number in your contacts 555 777 9999, send the word 'limit,' and follow the instructions.",
  },
  {
    id: 8,
    question: "How do the card discounts work?",
    answer:
      "You can take advantage of card discounts on the website, app, or at any GrocerGo store. Simply activate the promotion card you want in 'My Discount' and pay with your GrocerGo card. If you follow these two steps and have eligible discount products in your cart, the discount will be applied at checkout. Please note that card discounts cannot be combined with other 'My Discount' promotions. The best discount will always be applied. Check the unit limits applicable to each offer in 'My Discount.' Offers are updated every 14 days, always on Thursdays. Online offers are valid for products sold and delivered by GrocerGo.",
  },
  {
    id: 9,
    question: 'What is the "GrocerGo" points program, and how does it work?',
    answer:
      "Your purchases with the GrocerGo card convert into points that can be exchanged for cashback on purchases of products at GrocerGo stores or airline miles. The more you use it, the more benefits you earn.",
  },
  {
    id: 10,
    question:
      "With which cards can I accumulate points in the rewards programs?",
    answer:
      "You can earn points at GrocerGo using the GrocerGo Platinum and GrocerGo Black cards.",
  },
  {
    id: 11,
    question: "How does the points accumulation work?",
    answer:
      "GrocerGo Platinum: U$1.00 = 3 points on purchases made at GrocerGo, Extra, and Seven stores. U$1.00 = 1.5 points on purchases made at other establishments. GrocerGo Black: U$1.00 = 5 points on purchases made at GrocerGo, Extra, and Seven stores. $1.00 = 2 points on purchases made at other establishments. Important: The exchange rate used for calculating points will be based on the exchange rate on the closing day of the previous statement.For more information, please refer to the regulations.",
  },
  {
    id: 12,
    question: "How does the points-to-miles conversion work?",
    answer:
      "1 point = 1 airline mile for all cards participating in the program. For more information, please refer to the regulations.",
  },
  {
    id: 13,
    question: "How does cashback work on purchases at GrocerGo?",
    answer:
      "After redeeming your points for cashback, you will visit a physical GrocerGo store and make a purchase with your GrocerGo card. The redeemed amount will be credited to your current or next billing statement, depending on the statement cutoff date. Customers have up to 60 days to use the cashback. After this period, if no purchases are made at GrocerGo stores, any unredeemed points will be automatically canceled. For more information, please refer to the regulations.",
  },
  {
    id: 14,
    question: "How do I redeem points?",
    answer:
      "It's quite simple! You can do it through the JPMorgan app or by calling the Customer Service at 555 111 4444. We recommend using digital channels.",
  },
  {
    id: 15,
    question: "I need to cancel my card, how can I do that?",
    answer:
      "You can cancel your card through JPMorgan Cards Customer Service or via the JPMorgan Cards app, using the following path: Help > Chat.",
  },
];

const Accordion = ({ i, isExpanded, toggleAccordion, question, answer}: AccordionTypes) => {
	return (
    <>
      <button
        id={question}
				aria-label="click to expand accordion and see the answer"	
        aria-expanded={isExpanded}
        onClick={() => toggleAccordion(i.id)}
        className={`p-5 w-full text-left border-none outline-none transition duration-400 ease-in flex justify-between items-center leading-6 sm:text-sm sm:whitespace-normal ${
          isExpanded ? "bg-[#ccc]" : "bg-neutral-200 hover:bg-[#ccc]"
        }`}
      >
        {question}
        <TiChevronLeftOutline
          className={`${
            isExpanded ? "rotate-90" : "-rotate-90"
          } ml-4 transition duration-200 ease-out w-5 min-w-[20px] h-5 sm:w-3 sm:min-w-[12px] sm:h-3 text-neutral-700`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
						id={`${i.id}`}
						aria-labelledby={question}
						role="region"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="panel bg-white overflow-hidden"
          >
            <p className="p-5 font-[350] sm:whitespace-normal sm:text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Questions = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  //The id represents the unique identifier of the accordion item you want to toggle.	
  const toggleAccordion = (id: number) => {
    //This is an if statement that checks whether the id is already present in the expandedItems array.
    if (expandedItems.includes(id)) {
      //If the id is already in the expandedItems array (indicating that the accordion item is expanded), this line of code removes the id from the expandedItems array by using the filter method. It creates a new array with all IDs except the one that matches the id passed as an argument. This effectively collapses the accordion item.
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="px-20 py-16 md:px-10 md:py-8 w-full mt-16 mx-auto max-w-[2560px]">
<h3 className="text-3xl mb-16 font-bold font-sansita tracking-wide">
        Frequently Asked Questions
      </h3>
      {questionsArray.map((item) => (
        <Accordion
          key={item.id}
          i={item}
          isExpanded={expandedItems.includes(item.id)} //checks if the ID of the current accordion item (item.id) is present in the expandedItems array. It evaluates to true or false indicating that the current accordion item is expanded or not
          toggleAccordion={toggleAccordion}
          question={item.question}
          answer={item.answer}
        />
      ))}      
    </div>
  );
};

export default Questions;