import React from "react";
import First from "./assets/first.png";
import Second from "./assets/second.png";
import Third from "./assets/third.png";
import Fourth from "./assets/fourth.png";
import svg4 from "./assets/Line-13.png";
import svg1 from "./assets/line-11.svg";
import svg2 from "./assets/line-12.svg";
import svg3 from "./assets/line-14.svg";
import banner from "./assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="ms:block xll:relative xll:left-[250px]  xll:bottom-[70px]  mb-[200px]    hidden lg:container xl:block xl:h-[613px] xl:w-full  xl:text-center">
        <div className="  h-[513px] w-full">
          <div className="    h-[913px] w-full">
            {/* <div className="xxl:hidden "></div> */}
            <img
              className="absolute left-[159px] top-[272.79px] h-[513.21px] w-[91.98px]  xl:left-[159px] xl:top-[272.79px] xl:h-[513.21px] xl:w-[91.98px]"
              alt=""
              src={svg1}
            />
            <img
              className="absolute left-[270px] top-[772px] h-[41px] w-[950px] xl:left-[270px] xl:top-[772px]"
              alt=""
              src={svg2}
            />
            <div className="absolute left-[158.5px]  top-[203.5px] box-border w-[1365px] md:w-[1000px] xl:left-[158.5px]   ">
              <img src={svg4} alt="" />
            </div>
            <img
              className="absolute left-[1196px] top-[251.91px] h-[451.09px] w-11 md:left-[1150px] xl:left-[1196px]"
              alt=""
              src={svg3}
            />
            <img
              className="absolute left-[191.83px] top-[669px] h-[184.01px] w-[182.83px] xl:left-[191.83px]"
              alt=""
              src={First}
            />
            <img
              className="absolute left-[1204.84px] top-[171.47px] h-[91.16px] w-[91.16px] md:left-[1131px] xl:left-[1184.84px]"
              alt=""
              src={Second}
            />
            <img
              className="absolute left-[1107.29px] top-[660px] h-[137.96px] w-[137.71px] md:left-[1096px] xl:left-[1107.29px]"
              alt=""
              src={Third}
            />
            <img
              className="absolute left-[100.13px] top-[189px] h-[121.84px] w-[120.87px] xl:left-[100.13px]"
              alt=""
              src={Fourth}
            />
            <div className=" ">
              <div className="font-body-header  absolute left-[300px] top-[234px] inline-block h-[109px] w-[850px] text-[75px] font-extrabold xl:left-[300px]">
                <h1
                  className=" font-cabinet-grotesk  leading-100 mt-[20px] w-[860px] text-center text-[60px]  font-semibold
             leading-[80px]  text-gray-700"
                >
                  Shaping Policies through you,
                  <span
                    className="pl-[1%]"
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(100.73deg, red 70.11%, #414042 140.71%)",
                    }}
                  >
                    not to you.
                  </span>
                </h1>
              </div>

              <div className="text-pure-black absolute left-[400px] top-[450px] inline-block h-[85px] w-[700px] max-w-xl  font-medium leading-[35px] xl:left-[420px]">
                <div className="relative  left-[-80px] mb-5 lg:w-[750px]">
                  <p className="m-0  ">
                    At PolicyCON, we believe in harnessing the power of diverse
                    perspectives to develop policies that work for all. Join our
                    platform to connect with analysts who offer unique insights
                    and subscribers who seek to shape a better future through
                    informed policy decisions. Explore our community of
                    changemakers and be part of the conversation today
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-none  px-[24px] sm:hidden md:hidden lg:hidden ">
        <div className="mb-8 flex flex-col items-center  space-y-8 sm:flex sm:flex-row">
          <h1
            className="font-cabinet-grotesk mt-[20px] max-w-md   text-left text-[30px]   
             leading-[48px] text-gray-700"
          >
            Shaping Policies through you,
            <span
              className="pl-[2%]"
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(100.73deg, red 70.11%, #414042 140.71%)",
              }}
            >
              not to you.
            </span>
          </h1>
          <div className="">
            <img src={banner} alt="" />
          </div>
          <p className="font-manrope    max-w-md text-left leading-[27px] text-black lg:text-[18px] ">
            At PolicyCON, we believe in harnessing the power of diverse
            perspectives to develop policies that work for all. Join our
            platform to connect with analysts who offer unique insights and
            subscribers who seek to shape a better future through informed
            policy decisions. Explore our community of changemakers and be part
            of the conversation today
          </p>
        </div>
        <div className="container"></div>
      </div>
      <div className="sm:container-none hidden w-full   px-[5%] sm:block  lg:hidden ">
        <div className="mb-8 flex flex-col items-center gap-[8%]  space-y-8 sm:flex sm:flex-row">
          <div className="space-y-5">
            <h1
              className="font-cabinet-grotesk mt-[20px] max-w-md   text-left text-[30px]   
             leading-[48px] text-gray-700"
            >
              Shaping Policies through you,
              <span
                className="pl-[2%]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(100.73deg, red 70.11%, #414042 140.71%)",
                }}
              >
                not to you.
              </span>
            </h1>
            <p className="font-manrope    max-w-md text-left leading-[27px] text-black lg:text-[18px] ">
              At PolicyCON, we believe in harnessing the power of diverse
              perspectives to develop policies that work for all. Join our
              platform to connect with analysts who offer unique insights and
              subscribers who seek to shape a better future through informed
              policy decisions. Explore our community of changemakers and be
              part of the conversation today
            </p>
          </div>
          <div>
            <img
              className=" h-[37vh] sm:h-[40vh] md:h-[40vh] "
              src={banner}
              alt=""
            />
          </div>
        </div>
        <div className="container-none"></div>
      </div>
    </>
  );
};

export default Banner;

/* <div className='container-none   '>
      <div className="flex flex-col  items-center mb-8 space-y-8">
        <h1 className="max-w-md font-cabinet-grotesk text-gray-700 font-semibold text-center 
             text-4xl leading-100">
          High-quality reviews on enacted <span style={{
   backgroundClip: 'text',
   WebkitBackgroundClip: 'text',
   color: 'transparent',
   backgroundImage: 'linear-gradient(100.73deg, red 70.11%, #414042 140.71%)'
}}>Policies</span>
        </h1>
        <p className='max-w-md text-center font-manrope font-medium text-base text black '>PolicyCON is a subscription-based policy review digital platform that opens public or organisational policies to a diverse range of industry experts. Allowing an honest critique from multiple perspectives in a controlled and safe environment </p>
      </div>
      <div className="max-w-sm container mx-auto">
      <Search/>
      </div>

      
    
      
    </div> */

/*<div className=" container max-auto item-center  h-83 left-402 top-632  bg-white shadow-lg rounded">
        <div className="relative w-10 h-10  bg-gray-700 rounded-full "></div>
        
      </div>*/
/*<div className="container-none flex flex-col    space-y-60">
      <div className="flex  justify-center">
      <div className="flex space-x-80 items-center">
        <img className="border-dashed border-gray-400 w-20 border mr-4" src={First} alt="image1" />
        <div className="border-t-2 border-dashed border-gray-400 h-0 w-80     "></div>
        <img className="border-dashed w-20 border-gray-400 border ml-4" src={First} alt="image2" />
      </div>
      
    </div>
    <div className="flex justify-center">
      <div className="flex space-x-80 ml-10 space-y-16 items-center">
        <img className="border-dashed w-25  border-gray-400 border mr-4" src={First} alt="image1" />
        <div className="border-t-2 border-dashed border-gray-400 h-12 w-0"></div>
        <img className="border-dashed w-20 border-gray-400 border ml-4" src={First} alt="image2" />
      </div>
    </div>
    <div
      className="border-t-2 border-dashed border-gray-400 h-0 w-80 relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ transform: "rotate(40deg)" }}
    ></div>
      </div>*/

/*<div className="container-none flex flex-col    space-y-60">
      <div className="flex  justify-center">
      <div className="flex space-x-80 items-center">
        <img className="border-dashed border-gray-400 w-20 border mr-4" src={First} alt="image1" />
        <div className="border-t-2 border-dashed border-gray-400 h-0 w-60     "></div>
        <img className="border-dashed w-20 border-gray-400 border ml-4" src={First} alt="image2" />
      </div>
      
    </div>
    <div className="flex justify-center">
      <div className="flex space-x-80 ml-10 space-y-16 items-center">
        <img className="border-dashed w-25  border-gray-400 border mr-4" src={First} alt="image1" />
        <div className="border-t-2 border-dashed border-gray-400 h-12 w-0"></div>
        <img className="border-dashed w-20 border-gray-400 border ml-4" src={First} alt="image2" />
      </div>
    </div>
    <div
      className="border-t-2 border-dashed border-gray-400 h-0  absolute   transform -translate-x-1/2 -translate-y-1/2"
      style={{ transform: "rotate(80deg)",left:'77px',bottom:"-20px",width:"280px" }}
    ></div>
      </div>
      */
