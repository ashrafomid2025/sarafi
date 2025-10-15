import { Button } from "./ui/button";

export default function SingleArticle({
  title,
  description,
  url,
  image,
  source,
}) {
  return (
    <div className="border w-full rounded-md bg-white ">
      <img src={url} className="w-full h-40 rounded-t-md object-cover" alt="" />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-base font-semibold">{description}</p>
      <Button>Read More</Button>
    </div>
  );
}
