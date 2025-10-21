import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
const API_KEY = "420f898b11154858acbbb5c89a6bca6f";
const URL = `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${API_KEY}`;
export default function Articles() {
  type Article = {
    id: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
  };
  const [news, setNews] = useState<Article[]>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    function fetchData() {
      startTransition(async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setNews(data.articles);
      });
    }
    fetchData();
  }, []);
  return (
    <div className="py-24">
      <h1 className="text-center text-5xl uppercase my-5 font-bold">
        Big Headlines Today
      </h1>
      {isPending ? (
        <div className="h-44 w-full flex justify-center items-center">
          <h1>Loading, Just a moment</h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-2 gap-2">
          {news.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.4, once: false }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              id={item.id}
              className="border h-96 overflow-hidden rounded-md bg-white"
            >
              <div className="relative w-full h-full">
                <img
                  src={item.urlToImage}
                  alt={item.id}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 bottom-0 h-6/12 overflow-y-hidden bg-black/50 p-2 w-full">
                  <h1 className="text-white font-bold text-2xl h-28">
                    {item.title}
                  </h1>
                  <div className="flex justify-end items-end">
                    <Button className="bg-white text-black hover:bg-white hover:border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 hover:text-black rounded-xs">
                      <a href={item.url} target="_blank">
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
