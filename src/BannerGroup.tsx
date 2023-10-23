import React from "react";
import frame from "./assets/frame.png";

const BannerGroup = () => {
  return (
    <div
      style={{ backgroundImage: `url(${frame})` }}
      className="bg-opacity-80  opacity-90 lg:h-[463px] "
    >
      <div className="relative flex h-[308px] flex-col items-center gap-[26px] pt-0 lg:pt-[50px]  ">
        <div
          className={`font-cabinet-grotesk flex flex-col items-center gap-[26px] pt-0 text-center font-extrabold lg:w-[639px] `}
        >
          <p className="pt-[15px] text-[24px] text-white lg:mb-[15px] lg:h-[57px] lg:w-[639px] lg:text-[30px]">
            Get Started With PolicyCON
          </p>
          <div className="flex p-2.5 lg:w-[428px]">
            <div className="h-[80px] w-[80px] rounded-full border-[6px] border-solid border-white [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2915dc5658f55bea5f0d2af43b5c2436c45a34af:0.webp)_no-repeat_center_/_contain] lg:h-[117px] lg:w-[117px]" />
            <div className="h-[80px]lg:h-[117px] -ml-5 w-[80px] rounded-full border-[6px] border-solid border-white [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/b0ae411030d7fefb658113cfdcca50e2a42c254b:0.webp)_no-repeat_center_/_contain] lg:w-[117px]" />
            <div className="-ml-5 h-[80px] w-[80px] rounded-full border-[6px] border-solid border-white [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/263b00c873c9d90580bb79622bfa4c078cce65e1:0.webp)_no-repeat_center_/_contain] lg:h-[117px] lg:w-[117px]" />
            <div className="-ml-5 h-[80px] w-[80px] rounded-full border-[6px] border-solid border-white [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/05ee48aade7b6e9524212508334e50ea61c70030.webp)_center_/_cover] lg:h-[117px] lg:w-[117px]" />
          </div>
        </div>
        <div
          className={`font-manrope flex h-[60px] w-[190px] items-center justify-center rounded-[30px] py-5 pl-[53px] pr-[53px]  text-left font-semibold [box-shadow-width:2px] [box-shadow:0px_0px_0px_2px_white_inset]`}
        >
          {/* <Link to="/login"> */}
          <button className="font-manrope inline-flex h-[22px] w-[90px] items-center text-base leading-[22px] text-white">
            Get Started
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BannerGroup;
