import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const date1 = new Date();

  const shamsi = date1.toLocaleDateString("fa-AF");
  const [isOpen, setIsOpen] = useState(false);
  const navList = [
    { href: "/", title: "Home" },
    { href: "/exchange", title: "Exchange" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
    { href: "/market", title: "Market" },
    { href: "/blogs", title: "Blogs" },
  ];
  return (
    <div className="w-full fixed top-0 left-0 md:p-3 backdrop-blur-xl ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-brush text-xl font-bold">Sharifi Exchage Rate</h1>
        </div>
        <div className="hidden md:flex justify-center space-x-3">
          {navList.map((nav, idx) => (
            <Link key={idx} to={nav.href}>
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <Button
            variant="outline"
            className="rounded-md hover:bg-brand hover:text-white bg-brand text-xl font-semibold text-white"
          >
            {shamsi}
          </Button>
        </div>
        <div className="md:hidden">
          <Menu
            className={`${!isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(!isOpen)}
            size="24"
          />
          <X
            className={`${isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(!isOpen)}
            size="24"
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-3 flex  items-center flex-col gap-4 h-screen w-full backdrop-blur-md">
          {navList.map((item, index) => (
            <a key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
