import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Testimonial() {
  const allTestimonials: { name: string; imgUrl: string; message: string }[] = [
    {
      name: "Sophia Martinez",
      imgUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
      message:
        "Excellent exchange rates and super quick service! I got my euros within minutes.",
    },
    {
      name: "Liam Chen",
      imgUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
      message:
        "Very professional staff. The USD to GBP rate was much better than at the airport.",
    },
    {
      name: "Ava Thompson",
      imgUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
      message:
        "Smooth and reliable transaction! I always use them before traveling abroad.",
    },
    {
      name: "Noah Johnson",
      imgUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      message:
        "Fast, transparent, and trustworthy — I exchanged CAD to USD in just a few minutes.",
    },
    {
      name: "Emma Rossi",
      imgUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      message:
        "Their online rate calculator is spot on! I saved a lot compared to my bank’s rate.",
    },
    {
      name: "Oliver Nguyen",
      imgUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      message:
        "Great customer experience! I exchanged yen to euros with no hidden fees.",
    },
    {
      name: "Isabella Garcia",
      imgUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
      message:
        "The staff was friendly and helpful. Got my British pounds at a great rate!",
    },
    {
      name: "Ethan Patel",
      imgUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
      message:
        "I highly recommend them for foreign exchange. Quick, safe, and the rates are excellent.",
    },
  ];

  return (
    <div className=" my-24">
      <h1 className="text-5xl font-bold text-center">Testimoniral</h1>
      <p className="text-2xl font-bold text-center">Our happy clients</p>
      <p className="text-center text-base">
        read the comments of our clients that have recieved our services
      </p>
      <div className="p-4">
        {/* single card */}
        <Slider {...settings}>
          {allTestimonials.map((feedback, index) => (
            <div
              className="p-4 border mr-3 h-fit container1 rounded-xl overflow-hidden flex justify-center items-center flex-col bg-white"
              key={index}
            >
              <img
                className="h-20 w-20 rounded-full"
                src={feedback.imgUrl}
                alt=""
              />
              <h1 className="mt-2 font-semibold">{feedback.name}</h1>
              <h2 className="mt-2">Ghazni, Afghanistan</h2>
              <p className="text-center mt-2">{feedback.message}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
