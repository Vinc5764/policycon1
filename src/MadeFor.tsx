// import { Link } from "react-router-dom";

const MadeFor = () => {
  return (
    <div className=" space-y-[5%]">
      <h1 className="   font-cabinet-grotesk pt-16 text-center  text-[24px] font-semibold  text-gray-700  md:text-center  lg:text-center   ">
        Who is PolicyCON Made for?
      </h1>

      <div className=" xll:px-[15%] xll:grid  xll:grid-cols-2  grid w-full  items-center justify-center gap-[25px] px-[5%] sm:px-[15%] md:grid md:grid-cols-1  md:gap-3   md:px-[10%] lg:gap-32 xl:grid-cols-2 ">
        <div className="xs:h-[99vh] lg h-[78vh] rounded-[5rem]  bg-[url('./assets/image2.png')] bg-clip-border bg-center bg-no-repeat sm:h-[120vh] sm:bg-cover lg:ml-[-3rem] lg:bg-cover lg:pr-8 ">
          <div className=" font-manrope ml-6   mt-8 w-[23vh] rounded-3xl bg-white py-2 text-center   text-[18px] md:ml-6 md:mt-8    ">
            For Analyts
          </div>
        </div>
        <div className="w-full md:w-[90%]">
          <h1
            style={{
              lineHeight: "37px",
            }}
            className=" font-cabinet-grotesk w-full  max-w-md  text-[24px]    font-semibold       text-gray-700"
          >
            Become a PolicyCON Analyst: Influence Policy with Your Expertise
          </h1>
          <p className="  font-manrope mt-6 w-full  leading-[28px] lg:text-[18px]">
            Are you passionate about driving change through policy development?
            Join PolicyCON as an analyst and share your expertise with a global
            audience. Engage in meaningful discussions, offer unique
            perspectives, and make an impact on policy decisions.
          </p>
          <div className="mt-10 flex items-end">
            {/* <Link to="/register"> */}
            <button
              style={{
                padding: "0px 0px",
                borderRadius: "30px",
                width: "140px",
                border: "2px solid black",
                height: "60px",
                fontSize: "18px",
              }}
              className="  font-manrope block  text-black  "
            >
              Get Started
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className=" xll:px-[15%] xll:grid xll:grid-cols-2 flex w-full flex-col-reverse   items-center justify-center gap-[25px] px-[5%]  md:grid md:grid-cols-1  md:gap-[30px] md:space-x-8  xl:grid xl:grid-cols-2 ">
        <div className="w-[100%] sm:px-[10%] md:ml-[-2rem] md:w-[97%] ">
          <h1
            style={{
              lineHeight: "37px",
            }}
            className=" font-cabinet-grotesk  w-full text-[24px]    font-semibold       text-gray-700"
          >
            Join the PolicyCON community: Stay informed, make informed decisions
          </h1>
          <p className="  font-manrope mt-6  leading-[28px] lg:text-[18px]">
            Subscribe to PolicyCON and gain access to a wealth of diverse and
            unique perspectives from experts in the field. Stay informed about
            the latest policy developments and make informed decisions for your
            organisation, political party, or investment portfolio. Join our
            community and benefit from the insights of our analysts.
          </p>
          <div className="mt-10 flex items-end">
            {/* <Link to="/register"> */}
            <button
              style={{
                padding: "0px 0px",
                borderRadius: "30px",
                width: "140px",
                border: "2px solid black",
                height: "60px",
                fontSize: "18px",
              }}
              className="  font-manrope block  text-black  "
            >
              Get Started
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className=" xs:h-[100vh] h-[78vh] w-full rounded-[3rem] bg-[url('./assets/image1.png')]  bg-center bg-no-repeat sm:h-[100vh] sm:w-9/12 md:w-[80vw]  md:bg-cover lg:w-11/12 lg:bg-cover ">
          <div className=" font-manrope ml-2  mt-4 w-[25vh] rounded-3xl bg-white py-2 text-center   text-[18px] md:ml-6 md:mt-8    ">
            For Subscribers
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeFor;

/*<div className='container-none p-20  flex flex-col bg-rose-50  lg:flex-row lg:flex'>
       
       <div className="container mt-20 flex flex-col items-start px-20 ">
       
       <h1 style={{fontSize:"30px",fontStyle:"normal",fontWeight:"800",lineHeight:"40px"}} className='max-w-md  text-left     text-gray-700'>PolicyCON Analyst is an independent individual or institution who still believes we can fix the world regardless of how complex it might seem.</h1>
       <p className='max-w-md font-normal mt-4 text-sm'>A PolicyCON Analyst can be an academic researcher, working professional, Activist, Campaigner, Pensioner or Individual whose lived or Professional experience can positively inform policymaking. They love to use their experiences and expertise to advise Policymakers and corporations on policies of interest.</p>
       <div className="flex mt-10 items-end">
       <button style={{padding:"0px 0px", borderRadius:"30px",width:"190px", border:"2px solid black",height:"60px",fontSize:"16px"}} className='  block  text-black  '>Get Started</button>
       </div>
       
      
       </div>
       <div className="container ">
           <img src={Image1} alt="" />
       </div>


       
   </div>
 */
