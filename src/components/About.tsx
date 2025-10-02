import { Bitcoin, CircleCheck, CurrencyIcon, Globe } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div
      id="about"
      className="w-full min-h-screen overflow-x-hidden mt-5 grid grid-cols-1 md:grid-cols-2"
    >
      <motion.div
        initial={{ x: "-50px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.9, ease: "linear" }}
        className="w-full flex relative justify-center items-center overflow-hidden"
      >
        <img className="w-10/12 h-9/12" src="./images/download2.png" alt="" />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-10/12 h-9/12 absolute top-1/2 left-1/2 overflow-hidden"
        >
          <div
            className="p-4 w-fit absolute left-0 top-0 rounded-md bg-brand text-white"
            style={{ transform: "rotate(0deg) " }}
          >
            <Globe size={20} />
          </div>
          <div
            className="p-4 w-fit rounded-md bg-brand text-white"
            style={{ transform: "rotate(120deg)" }}
          >
            <Bitcoin />
          </div>
          <div
            className="p-4 w-fit rounded-md bg-brand text-white"
            style={{ transform: "rotate(240deg)" }}
          >
            <CurrencyIcon className="p-4 rounde-md transform text-white" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "50px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="flex flex-col gap-2.5 overflow-hidden"
      >
        <h1 className="text-3xl lg:text-4xl font-bold">About Us</h1>
        <h1 className="mt-2 lg:mt-4">
          A trustful Website for your currency exchnage
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nam
          fugit. Inventore blanditiis est laboriosam. Praesentium quasi neque
          impedit odit quis earum, fugiat enim perferendis ab maiores. Adipisci,
          dolores possimus?
        </p>
        <div className="w-full p-4 grid gap-2 grid-cols-2 bg-white rounded-xl shadow-md">
          <div className="flex gap-2 items-center">
            <CircleCheck size={32} className="text-brand" />
            <span>Update Currency Exchange</span>
          </div>
          <div className="flex gap-2 items-center">
            <CircleCheck size={32} className="text-brand" />
            <span>Update Currency Exchange</span>
          </div>
          <div className="flex gap-2 items-center">
            <CircleCheck size={32} className="text-brand" />
            <span>Update Currency Exchange</span>
          </div>
          <div className="flex gap-2 items-center">
            <CircleCheck size={32} className="text-brand" />
            <span>Update Currency Exchange</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
