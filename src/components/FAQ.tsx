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
      question: "How accurate is the exchange rate data on this site?",
      answer:
        "Our exchange rate data is sourced directly from reputable financial institutions and updated in real-time or at frequent intervals. This ensures you always have access to the most reliable and accurate rates available.",
    },
    {
      question: "How can I exchange my currency safely?",
      answer:
        "To exchange your currency safely, always use authorized banks, licensed exchange offices, or trusted online platforms. Avoid unverified sources, and check the rates and transaction fees before proceeding.",
    },
    {
      question: "What other services do you provide besides exchange rates?",
      answer:
        "In addition to live exchange rates, we provide historical rate charts, currency conversion calculators, market news, and financial insights to help users make better decisions when trading or traveling.",
    },
    {
      question: "Do you have a mobile application?",
      answer:
        "Yes, we offer a mobile app available for both iOS and Android. The app allows you to track real-time exchange rates, set alerts for specific currencies, and access conversion tools anytime, anywhere.",
    },
    {
      question: "Are there any fees for using this website?",
      answer:
        "No, our website is completely free to use for checking live exchange rates and using the conversion tools. However, if you choose to exchange through a partner service, standard transaction fees may apply.",
    },
    {
      question: "Can I track historical exchange rates?",
      answer:
        "Yes, you can view historical exchange rate data on our platform. We provide detailed charts and archives that allow you to analyze currency trends over days, months, or even years.",
    },
  ];
  return (
    <div
      id="faq"
      className="grid my-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
    >
      <div className="lg:col-span-1 flex flex-col p-4 justify-center">
        <h1 className="text-5xl font-bold">Frequently Asked Question</h1>
        <h2 className="font-bold text-2xl">Get to know our company</h2>
      </div>
      <div className="lg:col-span-2">
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
