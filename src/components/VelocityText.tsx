import { motion } from "framer-motion";

type MarqueeItemProps = {
  texts: string[];
};

const MarqueeItem = ({ texts }: MarqueeItemProps) => {
  return (
    <div className="flex">
      {/* First Marquee */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => (
          <h1 className="h-fit pr-12 " key={index}>
            {text}
          </h1>
        ))}
      </motion.div>

      {/* Second Marquee */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => (
          <h1 className=" pr-12 h-fit " key={index}>
            {text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
