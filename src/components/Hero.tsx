import { ChevronRight, Code, Globe, HandCoins } from "lucide-react";
import { Button } from "./ui/button";

import MarqueeItem from "./VelocityText";

export default function Hero() {
  const texts = [
    "Exchange Rate",
    "Updates Realtime",
    "Exchange anything",
    "trustful source",
    "Built with ❤️",
  ];
  return (
    <div className="w-full min-h-screen md:mt-5">
      <div className="w-full flex items-center justify-center lg:h-screen">
        <div className="flex-1">
          <div className="w-full flex h-screen flex-col justify-center items-center">
            <h1 className="lg:text-5xl moto md:text-3xl text-center font-bold">
              Instant Currency Exchange, Powered by the Latest Market Updates.
            </h1>
            <div>
              <p className="text-base text-center mt-8">
                Get the financial tools and insights to start, build, and grow
                your business
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                className="rounded-none uppercase bg-brand/90  text-white hover:bg-brand hover:text-white hover:cursor-pointer"
              >
                Get started
              </Button>
              <Button
                variant="ghost"
                className="uppercase text-brand underline hover:bg-transparent hover:text-brand cursor-pointer"
              >
                discover more <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src="./images/woman-shape-2.png" alt="" />
          <div className="absolute top-0 w-full flex justify-center items-center h-full right-0">
            <div className="absolute right-24 top-8 bg-brand text-white rounded-full animate-bounce p-2 transition-all duration-[4000ms]">
              <Globe size={32} />
            </div>
            <div className="absolute left-7 bottom-0 bg-brand text-white rounded-full animate-bounce p-2 transition-all duration-[4000ms]">
              <HandCoins size={32} />
            </div>
            <img
              className="md:h-80 lg:h-full w-96 md:w-80"
              src="./images/banner-woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 bg-white/90 text-black">
        <div className="w-full relative overflow-x-hidden">
          <div className="container mx-auto ">
            <MarqueeItem texts={texts} />
          </div>
        </div>
      </div>
    </div>
  );
}
