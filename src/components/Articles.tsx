import { useEffect, useState } from "react";

import { Button } from "./ui/button";

const API_KEY = "88a68df397d7dd162099b2864d17492f";
const URL = `https://gnews.io/api/v4/search?q=Business&lang=en&max=10&apikey=${API_KEY}`;
type News = {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  lang: string;
  publishedAt: string;
};

export default function Articles() {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setNews(data.articles);
    }
    fetchData();
  }, []);
  return (
    <div className="py-24">
      <h1 className="text-center font-bold text-4xl my-8">
        Our Latest Articles
      </h1>
      <div className="w-full grid grid-cols-2 gap-3">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden border rounded-md h-96"
          >
            <img
              src={item.image}
              className="w-full h-44 rounded-t-md"
              alt={item.id}
            />
            <div className="flex justify-between p-4">
              <span className="text-brand">
                {item.publishedAt.substring(0, 10)}
              </span>
              <Button
                variant="outline"
                className="rounded-none bg-brand text-white"
              >
                Read More
              </Button>
            </div>
            <h1 className="text-xl p-2 font-bold">{item.title}</h1>
            <p className="p-2 overflow-hidden">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
