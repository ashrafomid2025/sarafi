import { Github, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-3 w-full mt-4 rounded-t-xl bg-white">
      <section className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold">Company</h1>
          <Link className="hover:text-gray-700" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-700" to="/exchange">
            Exchange Rate
          </Link>
          <Link className="hover:text-gray-700" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-700" to="/blogs">
            Blog
          </Link>
          <Link className="hover:text-gray-700" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-gray-700" to="/market">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="text-xl font-semibold">Links</h1>
          <Link to="/#testimonial">Testimonial</Link>
          <Link to="/#faq">Frequently Asked Question</Link>
          <Link to="/#about">About</Link>
          <Link to="/">Exchange Rate</Link>
        </div>
        <div className="flex justify-center gap-3 flex-col">
          <h1 className="text-xl font-semibold">Contact</h1>
          <div className="flex items-center gap-2">
            <Phone />
            <a href="tel:+93798899090">+93798899090</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin />
            <a
              href="https://www.linkedin.com/in/m-ashraf-omid-91425b353/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github />
            <a href="https://github.com/ashrafomid2025" target="_blank">
              Github
            </a>
          </div>{" "}
          <div className="flex items-center gap-2">
            <img src="./images/whatsapp.svg" className="h-6 w-6" alt="" />
            <a href="https://wa.me/+93794842517" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <div className="text-center mt-4 text-base">
        <p>Copyright &copy;2025 all right resevred</p>
      </div>
    </footer>
  );
}
