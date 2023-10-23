import React from "react";

const TestimonialCard = () => {
  return (
    <div className="ml-6 w-10/12 xl:w-full">
      <div className="flex h-[300px] w-full  flex-col   gap-[3%] rounded-[30px] bg-[rgba(248,249,255,1)] px-[5%] py-[5%] lg:w-9/12">
        <div className="w-full">
          <div className="flex gap-5 pl-0 pt-0 lg:w-full">
            <div className="h-[85px] w-[85px] rounded-full [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/eb0427a3b467ad053d5ba2bccdbf27a029b680a7.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))]" />
            <div className="flex h-[75px] items-center justify-center">
              <div className="flex h-[75px] flex-col gap-2.5 pl-0 pt-0">
                <p className=" font-cabinet-grotesk h-[38px] w-full text-[24px] font-semibold capitalize">
                  Jacob Joshua
                </p>
                <p className="font-manrope h-[27px] w-full text-[20px] capitalize">
                  Chief Manager
                </p>
              </div>
            </div>
          </div>
          <p className="lg;max-w-none font-manrope h-32  max-w-[29rem]  py-[20px] pr-[30px] capitalize  leading-[32px] lg:pr-0 lg:text-[18px] lg:leading-[30px] ">
            Lorem ipsum dolor sit amet consectetur. Egestas sed platea placerat
            nulla pretium. Nunc tempus eget egestas nullam ac. Sagittis
            consectetur sed diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
