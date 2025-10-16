import { ChevronRight, CircleDollarSign, Globe, HandCoins } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-full min-h-screen md:mt-5">
      <div className="w-full grid lg:h-screen gap-1 md:gap-4 grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="w-full md:flex h-screen flex-col justify-center items-center">
            <h1 className="lg:text-5xl moto md:text-3xl text-center font-bold">
              Instant Currency Exchange, Powered by the Latest Market Updates.
            </h1>
            <div>
              <p className="text-base text-justify mt-8">
                Experience seamless Afghani currency conversion with real-time,
                reliable market data. Our platform delivers instant results and
                the most accurate exchange rates available. Track live rate
                fluctuations to make informed exchange decisions. Whether for
                travel, trade, or investment, you’ll always get the best
                possible value for your Afghani.
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
            {/* <div className="absolute right-24 top-8 bg-brand text-white rounded-xl animate-bounce p-2 transition-all duration-[4000ms]">
              <Globe size={32} />
            </div>
            <div className="absolute left-7 bottom-5 bg-brand text-white rounded-xl animate-bounce p-2 transition-all duration-[4000ms]">
              <CircleDollarSign size={32} />
            </div> */}
            <img
              className="md:h-80 lg:h-8/12 w-full md:w-80 lg:w-full rounded-xl"
              src="https://plus.unsplash.com/premium_photo-1741072497758-78c578fead00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
