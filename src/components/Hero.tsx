import { ChevronRight, Code, HandCoins } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex items-center justify-center lg:h-screen">
        <div className="flex-1">
          <div className="w-full flex h-screen flex-col justify-center items-center">
            <h1 className="text-5xl text-center font-bold">
              Exchange currency with the latest update
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
                className="rounded-none uppercase bg-brand/90 text-white hover:bg-brand hover:text-white hover:cursor-pointer"
              >
                Get started
              </Button>
              <Button
                variant="ghost"
                className="uppercase text-brand underline"
              >
                discover more <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src="./images/woman-shape-2.png" alt="" />
          <div className="absolute top-0 w-full flex justify-center items-center h-full right-0">
            <div className="absolute right-16 top-8 bg-brand text-white rounded-full animate-bounce p-3 transition-all duration-[4000ms]">
              <Code size={32} />
            </div>
            <div className="absolute left-7 bottom-0 bg-brand text-white rounded-full animate-bounce p-3 transition-all duration-[4000ms]">
              <HandCoins size={32} />
            </div>
            <img
              className="md:h-80 lg:h-full w-96"
              src="./images/banner-woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
