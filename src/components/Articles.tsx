import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";

const API_KEY = "88a68df397d7dd162099b2864d17492f";
const URL = `https://gnews.io/api/v4/search?q=Business&lang=en&max=10&apikey=${API_KEY}`;
type Article = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: { name: string; url: string };
};

export default function Articles() {
  const [news, setNews] = useState<Article[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setNews(data.articles);
    }
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {news.map((item, index) => (
        <SingleArticle
          key={index}
          title={item.title}
          description={item?.description}
          url={item?.url}
          image={item?.image}
          source={item?.source.name}
        />
      ))}
    </div>
  );
}
