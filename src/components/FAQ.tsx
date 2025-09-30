import { h1 } from "framer-motion/client";
import { useState } from "react";

export default function FAQ() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "How much accurate the data of this site?",
      answer:
        "As long as we get the data in streamline we ensure you that the data you get is up to date",
    },
    {
      question: "How much accurate the data of this site?",
      answer:
        "As long as we get the data in streamline we ensure you that the data you get is up to date",
    },
    {
      question: "How much accurate the data of this site?",
      answer:
        "As long as we get the data in streamline we ensure you that the data you get is up to date",
    },
    {
      question: "How much accurate the data of this site?",
      answer:
        "As long as we get the data in streamline we ensure you that the data you get is up to date",
    },
  ];
  const [open, setIsopen] = useState(false);
  return (
    <div className="h-screen mt-6 grid grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold">Frequently Asked Question</h1>
        <h2 className="font-bold text-2xl">Get to know our company</h2>
      </div>
      <div>
        {faqs.map((question, index) => (
          <div className="border-b w-full">
            <h1 onClick={() => setIsopen(!open)}>{question.question}</h1>
            {open && <h1>{question.answer}</h1>}
          </div>
        ))}
      </div>
    </div>
  );
}
