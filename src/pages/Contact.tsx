import { Button } from "@/components/ui/button";
import { Facebook, Github, Mail, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    const public_key = "7X9RRkfyM6CU0pUlh";
    const template_id = "template_w9qyf0r";
    const service_id = "service_e61cqxm";
    const content: {
      from_name: string;
      from_email: string;
      subject: string;
      message: string;
      to_name: string;
    } = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: "Ashraf Omid",
    };
    emailjs
      .send(service_id, template_id, content, {
        publicKey: public_key,
      })
      .then(
        () => {
          toast.info(
            "You message sent successfully, We will get back to you soon",
            { position: "bottom-right", autoClose: 8000 }
          );
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          toast.error("Sorry, something went wrong", {
            position: "bottom-right",
            autoClose: 8000,
          });
        }
      );
  }

  return (
    <div className="py-24">
      <div className="w-full   md:p-0 my-8">
        <div className="w-full grid px-2 gap-2 md:grid-cols-2 grid-cols-1">
          <div className="border-l-2 bg-white border-brand p-4 rounded-r-xl flex flex-col gap-3">
            <h1 className="text-3xl uppercase font-bold text-brand text-center">
              Get in touch
            </h1>
            <div className="flex items-center gap-2 ">
              <Phone className="text-brand" />{" "}
              <a href="tel:+93794842517">Call Now</a>
            </div>
            <div className="flex items-center gap-2 ">
              <Mail className="text-brand" />{" "}
              <a href="mailto:omidmashraf@gmail.com">Send Message</a>
            </div>
            <div className="flex items-center gap-2 ">
              <Github className="text-brand" />{" "}
              <a href="tel:+93794842517">Github</a>
            </div>
            <div className="flex items-center gap-2 ">
              <Facebook className="text-brand" />{" "}
              <a href="tel:+93794842517">Facebook</a>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              placeat laboriosam impedit illo ratione est repellendus libero
              aliquam corporis mollitia, odio facere! Corporis ea a eum, tempora
              corrupti ullam. Quibusdam.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-l-2 border-brand p-4 bg-white  flex flex-col gap-2 rounded-r-xl"
          >
            <h1 className="uppercase text-center text-3xl font-bold text-brand">
              Send Us Message
            </h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="p-2  w-full rounded-md border"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Write your email"
              className="p-2  w-full rounded-md border"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Write the Subject"
              className="p-2  w-full rounded-md border"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border w-full h-28 rounded-md resize-none p-2"
              placeholder="Enter your message"
            ></textarea>
            <Button
              variant="outline"
              className="bg-brand/90  text-white hover:bg-brand hover:text-white"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
