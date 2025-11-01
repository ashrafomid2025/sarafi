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
    // { href: "/market", title: "Market" },
    { href: "/blogs", title: "Blogs" },
  ];
  return (
    <div className="w-full fixed top-0 left-0 md:p-3 z-50 backdrop-blur-2xl ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-brush text-xl font-bold">My Sarafi</h1>
        </div>
        <div className="hidden md:flex py-2 px-3 rounded-xl bg-gray-300/45 justify-center space-x-3">
          {navList.map((nav, idx) => (
            <Link key={idx} to={nav.href} className="relative ">
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <Button
            variant="outline"
            className="rounded-md border-1 hover:border-brand  border-brand text-xl font-semibold text-brand"
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
            <Link key={index} onClick={() => setIsOpen(!isOpen)} to={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
