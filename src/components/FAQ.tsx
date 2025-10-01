import { ChevronDownCircleIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
function SingleFaq({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
      className="w-full flex flex-col p-3"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center overflow-hidden"
      >
        <span>{q}</span>
        <ChevronDownCircleIcon
          size={24}
          className={`transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <p className="px-3 py-1 border-l-2 border-l-brand">{a}</p>}
    </motion.div>
  );
}
export default function FAQ() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "How much accurate the data of this site?",
      answer:
        "As long as we get the data in streamline we ensure you that the data you get is up to date Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis tempore eaque atque explicabo, voluptatem, minus, deleniti repellat aliquid sint autem veniam repellendus mollitia nam aut accusamus minima alias sed.",
    },
    {
      question: "How to exchage my currency in the right way?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis tempore eaque atque explicabo, voluptatem, minus, deleniti repellat aliquid sint autem veniam repellendus mollitia nam aut accusamus minima alias sed.",
    },
    {
      question: "What other services do you provide?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis tempore eaque atque explicabo, voluptatem, minus, deleniti repellat aliquid sint autem veniam repellendus mollitia nam aut accusamus minima alias sed.",
    },
    {
      question: "Do you have any mobile application? ",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis tempore eaque atque explicabo, voluptatem, minus, deleniti repellat aliquid sint autem veniam repellendus mollitia nam aut accusamus minima alias sed.",
    },
  ];

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 flex flex-col p-4 justify-center">
        <h1 className="text-5xl font-bold">Frequently Asked Question</h1>
        <h2 className="font-bold text-2xl">Get to know our company</h2>
      </div>
      <div className="col-span-2">
        {faqs.map((question, index) => (
          <SingleFaq
            key={index}
            q={question.question}
            a={question.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
