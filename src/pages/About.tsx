import { motion } from "framer-motion";
function Header() {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:border  md:grid-cols-2 bg-white rounded-md">
      <motion.div
        initial={{ y: -80 }}
        whileInView={{ y: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="rounded-l-md w-full h-72 border"
      >
        <img
          className="h-full w-full object-cover rounded-l-md"
          src="https://plus.unsplash.com/premium_photo-1670249421308-15ae3965c326?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXhjaGFuZ2UlMjBjdXJyZW5jeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.8, ease: "linear" }}
      >
        <h1 className="font-bold text-4xl my-2">About Us</h1>
        <p>
          Exchange Rate API provides accurate, fast, and reliable currency
          exchange data from global financial sources. It’s designed for
          developers, fintech startups, and businesses that need up-to-date
          forex information for applications, dashboards, or ecommerce platforms
        </p>
      </motion.div>
    </div>
  );
}
function Team() {
  type Member = {
    name: string;
    imgUrl: string;
    role: string;
  };
  const team: Member[] = [
    {
      name: "Alex Thompson",
      imgUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      role: "CTO & Technical Lead",
    },
    {
      name: "Jessica Williams",
      imgUrl:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      role: "Senior Full-Stack Developer",
    },
    {
      name: "Ryan O'Connell",
      imgUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      role: "UI/UX Developer",
    },
    {
      name: "Maya Patel",
      imgUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      role: "QA Engineer",
    },
  ];
  return (
    <div className="p-2 my-5">
      <div className="flex gap-2 mb-4 justify-center items-center flex-col">
        <h1 className="text-4xl  font-bold">Our Team</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          accusantium,
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative group rounded-xl h-80 lg:h-96 w-full"
          >
            <img
              src={member.imgUrl}
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="w-full h-0 bg-black group-hover:opacity-100 group-hover:h-4/12 transition-all duration-300 text-white flex justify-center items-center opacity-0 flex-col absolute left-0 bottom-0 hover:bottom-0  z-50 rounded-b-xl">
              <h1 className="text-white text-2xl font-bold">{member.name}</h1>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function About() {
  return (
    <div className="mt-16 p-4">
      <Header />
      <Team />
    </div>
  );
}
