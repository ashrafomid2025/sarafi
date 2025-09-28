import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Testimonial = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    arrows: true,
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
        breakpoint: 768,
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
    <div className="w-full mt-8 min-h-screen">
      <Slider {...settings}>
        <Card className="w-fit p-6 mr-5">
          <CardHeader>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-20 w-72 rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugiat. Error quae repudiandae sunt inventore
              dolorum, sed itaque. Dolorum tempora quam
            </h1>
          </CardContent>
        </Card>
        <Card className="w-fit p-6">
          <CardHeader>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-20 w-72 rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugiat. Error quae repudiandae sunt inventore
              dolorum, sed itaque. Dolorum tempora quam
            </q>
          </CardContent>
        </Card>
        <Card className="w-fit p-6 mr-5">
          <CardHeader>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-20 w-72 rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugiat. Error quae repudiandae sunt inventore
              dolorum, sed itaque. Dolorum tempora quam
            </h1>
          </CardContent>
        </Card>{" "}
        <Card className="w-fit p-6">
          <CardHeader>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-20 w-72 rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugiat. Error quae repudiandae sunt inventore
              dolorum, sed itaque. Dolorum tempora quam
            </h1>
          </CardContent>
        </Card>
        <Card className="w-fit p-6">
          <CardHeader>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              className="h-20 w-72 rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugiat. Error quae repudiandae sunt inventore
              dolorum, sed itaque. Dolorum tempora quam
            </h1>
          </CardContent>
        </Card>
      </Slider>
    </div>
  );
};
export default Testimonial;
