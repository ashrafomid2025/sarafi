import { CheckCircle2, CircleDollarSign, Gem, Globe } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div className="overflow-x-hidden my-12 grid w-full gap-2 md:gap-1 grid-cols-1 md:grid-cols-2">
      <motion.div
        initial={{ x: "-50px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "linear" }}
        className="flex relative justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className=" flex h-40 absolute -bottom-12 left-0 w-40 rounded-full "
        >
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              transform: "rotate(0deg) translateX(9rem)",
            }}
          >
            <div className="bg-brand/90 p-4 rounded-xl">
              <Gem size={20} className=" text-white" />
            </div>
          </div>
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              transform: "rotate(120deg) translateX(9rem)",
            }}
          >
            <div className="bg-brand/90 p-4 rounded-xl backdrop-blur-xs">
              <Globe size={18} className=" text-white" />
            </div>
          </div>
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              transform: "rotate(240deg) translateX(9rem)",
            }}
          >
            <div className="p-4 bg-brand/90 rounded-xl backdrop-blur-xs">
              <CircleDollarSign size={18} className=" text-white" />
            </div>
          </div>
        </motion.div>
        <div className="h-full w-10/12 rounded-lg">
          <img
            className="h-full w-full rounded-lg "
            src="https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "50px" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "linear" }}
        className="p-2"
      >
        <h1 className="text-4xl lg:text-5xl font-bold uppercase">About Us</h1>
        <h1
          className="mt-3
         text-xl"
        >
          Building trust with our long term services
        </h1>
        <p className="text-base mt-4 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          laudantium, ducimus nihil obcaecati amet praesentium inventore culpa
          assumenda corrupti similique enim nostrum quae aliquid ipsam eum
          magnam numquam at dolore.
        </p>
        <div className="w-full mt-3 rounded-md  grid gap-2 bg-white grid-cols-2 p-4 shadow-xl">
          <div className="flex gap-2 items-center justify-center">
            <CheckCircle2 className="text-brand" />
            <span>12 years of experience</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <CheckCircle2 className="text-brand" />
            <span>Expert Team of architects</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <CheckCircle2 className="text-brand" />
            <span>Best Project timeline</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <CheckCircle2 className="text-brand" />
            <span>Refund in case of cancellation</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
