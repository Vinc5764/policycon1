import Masood from "./assets/Masood.png";
import Microsoft from "./assets/Microsoft-for-startups-logo.png";
import Kickstart from "./assets/kickstarter.png";
import Tie from "./assets/Tie.png";

const Partners = () => {
  return (
    <div className=" mb-[8%] mr-[40px] grid grid-cols-2 items-center px-[5%] pt-[100px] md:ml-[2rem] md:gap-4 lg:flex  lg:flex-wrap lg:justify-center xl:flex xl:justify-center  ">
      <div className="w-[90%] sm:w-[80%] md:w-[20vw] lg:w-[10vw] ">
        <img className="h-auto w-[180%] lg:w-full  " src={Tie} alt="" />
      </div>
      <div className="lg:[10vw] w-[120%] sm:w-[90%] md:w-[40vw]">
        <img className="h-auto  w-[150%] lg:w-full " src={Masood} alt="" />
      </div>
      <div className="w-[95%] sm:w-[80%] md:w-[20vw] lg:w-[10vw]">
        <img className="h-auto w-[180%] lg:w-full " src={Kickstart} alt="" />
      </div>
      <div className="w-[120%] sm:w-[90] md:w-[40vw] lg:w-[20vw] ">
        <img className="h-auto w-[180%] lg:w-full " src={Microsoft} alt="" />
      </div>
    </div>
  );
};

export default Partners;
