import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import type { Settings } from "react-slick";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonial = () => {
  const testimonials: {
    name: string;
    address: string;
    imgUrl: string;
    comment: string;
  }[] = [
    {
      name: "Ali Ahmadi",
      address: "Kabul, Afghanistan",
      imgUrl: "./testimonial/m4.JPG",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat. Error quae repudiandae sunt inventore dolorum, sed itaque. Dolorum tempora quam",
    },
    {
      name: "Mustafa Rahimi",
      address: "Herat, Afghanistan",
      imgUrl: "./testimonial/m5.jpg",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat. Error quae repudiandae sunt inventore dolorum, sed itaque. Dolorum tempora quam",
    },
    {
      name: "Omid Mohammadi",
      address: "Kandahar, Afghanistan",
      imgUrl: "./testimonial/me.jpg",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat. Error quae repudiandae sunt inventore dolorum, sed itaque. Dolorum tempora quam",
    },
    {
      name: "Wais Ahmadi",
      address: "Khost, Afghanistan",
      imgUrl: "./testimonial/photo.png",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat. Error quae repudiandae sunt inventore dolorum, sed itaque. Dolorum tempora quam",
    },
  ];
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonial" className="my-5 w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold">Testimonials</h1>
      <p className="text-base">Read the experience of our happy client</p>
      <div className="w-full ">
        <Slider {...settings}>
          {testimonials.map((feedback, index) => (
            <div
              key={index}
              className="p-4 border
             rounded-xl slideBox mr-8 relative  h-fit bg-white"
            >
              <img
                src="./testimonial/quotes.png"
                className="h-16 w-16  absolute left-2 top-1.5"
                alt=""
              />
              <img
                className="h-20 w-20 rounded-full"
                src={feedback.imgUrl}
                alt={feedback.name}
              />
              <h1 className="font-bold text-xl">{feedback.name}</h1>
              <address>{feedback.address}</address>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonial;
