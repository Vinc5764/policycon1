import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import BiArrowLeftShort3 from "./assets/BiArrowLeftShort3";
import BiArrowLeftShort from "./assets/BiArrowLeftShort";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const arrowRef: any = useRef(null);
  return (
    <div className=" xll:px-[13%] px-[2%]">
      <h1 className="font-cabinet-grotesk mb-[20px]   pt-[30px] text-center  text-[24px] font-semibold leading-[44px] text-gray-700 lg:mb-[45px] lg:text-center lg:text-[24px] ">
        What Others are saying about Us
      </h1>
      <Slider className=" space-x-4" ref={arrowRef} {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
      <div className="mr-[30px]  flex justify-center gap-4 py-[25px] lg:relative lg:bottom-[400px] lg:justify-end  ">
        <button
          onClick={() => arrowRef.current.slickPrev()}
          style={{ border: "1px solid rgba(145, 158, 171, 0.32)" }}
          className="back  h-[57px] w-[57px]  rounded-full bg-slate-100 pl-[6px] "
        >
          <BiArrowLeftShort />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          style={{ border: "1px solid rgba(145, 158, 171, 0.32)" }}
          className="next border-[1px solid black] h-[57px] w-[57px] rounded-full bg-black pl-[6px] "
        >
          <BiArrowLeftShort3 />{" "}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
