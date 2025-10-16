import { Github, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-12 pt-12 w-full max-w-6xl mx-auto mt-4 text-white rounded-t-xl bg-gray-800">
      <section className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold">Company</h1>
          <Link className="hover:text-gray-800" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-800" to="/exchange">
            Exchange Rate
          </Link>
          <Link className="hover:text-gray-800" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-800" to="/blogs">
            Blog
          </Link>
          <Link className="hover:text-gray-800" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-gray-800" to="/market">
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
            <a href="tel:+93798899090">Call Now</a>
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
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <a href="https://wa.me/+93794842517" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <div className="text-center pt-12 mt-auto text-base">
        <p>Copyright &copy; M. Ashraf Omid 2025 all right resevred</p>
      </div>
    </footer>
  );
}
