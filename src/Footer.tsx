import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div className="">
      <div className="lg:flex">
        <div className=" font-manrope  pt-[30px] text-center leading-[35px] lg:h-[450px] lg:w-[400px] lg:pl-[100px] lg:text-left  lg:text-[18px] ">
          <h1 className="  font-cabinet-grotesk pb-[10px] text-[24px] font-semibold lg:text-[24px]">
            Discover
          </h1>
          <p>FAQ</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>GDPR/DPA</p>
        </div>
        <div
          style={{ borderLeft: "1px solid rgba(145, 158, 171, 0.32)" }}
          className="font-manrope pt-[30px]  text-center text-[18px] leading-[35px] lg:h-[450px] lg:w-[400px] lg:pl-[100px]   lg:text-left"
        >
          <h1 className=" font-cabinet-grotesk pb-[10px]  text-[24px] font-semibold lg:text-[24px] ">
            Company
          </h1>
          <p>About</p>
          <p>Careers</p>
          <p>Values</p>
          <p>Press</p>
          <p>Support</p>
          <p>Contact us</p>
        </div>
        <div
          style={{ borderLeft: "1px solid rgba(145, 158, 171, 0.32)" }}
          className="font-manrope pt-[30px] text-center text-[18px] leading-[35px] lg:h-[450px] lg:w-[400px] lg:pl-[100px] lg:text-left"
        >
          <h1 className=" font-cabinet-grotesk pb-[10px] text-[24px]  font-semibold text-gray-700 lg:text-[24px] ">
            Community
          </h1>
          <p>FAQ</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>GDPR/DPA</p>
        </div>
        <div
          style={{ borderLeft: "1px solid rgba(145, 158, 171, 0.32)" }}
          className="lg:h-[450px]  lg:w-[400px]"
        >
          <div className="mb-[20px] flex items-center justify-center pt-[30px] ">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div
        style={{ borderTop: "1px solid rgba(145, 158, 171, 0.32)" }}
        className=" h-[80px] pl-[30px] pt-[30px] lg:pl-[50px] "
      >
        <h2 className="font-manrope text-[18px] ">
          © 2022 PolicyCON. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
