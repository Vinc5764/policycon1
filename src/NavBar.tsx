import Logo from "./assets/logo.png";
// import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Button from "./Button";
const navitems = [
  {
    name: "Analysts",
    link: "/analysts",
  },
  {
    name: "Subscribers",
    link: "/subscribers",
  },
  {
    name: "Resourses",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
];
const NavBar = () => {
  return (
    <nav className=" xll:px-[15%]  container-none mx-auto  px-[5%] pt-[1%]   shadow-sm  md:text-[18px]     ">
      <div className="flex items-center justify-between ">
        <div className="mt-[1%]">
          <img className="  h-auto w-[100%]     " src={Logo} alt="" />
        </div>

        <div className="flex gap-[1rem]  ">
          <div className="hidden cursor-pointer space-x-6 p-3 md:flex  md:space-x-3  lg:flex">
            {navitems.map((item) => (
              // <Link to={item.link}>
              <p>{item.name}</p>
              // </Link>
            ))}
          </div>
          <div className="flex space-x-3">
            {/* <Link to="/register"> */}{" "}
            <div className="hidden md:block">
              <Button
                style={{
                  width: "100px",
                  height: "50px",
                  background: "white",
                  padding: "10px",

                  borderRadius: "37px",
                  color: "#d2232a",
                  border: "1px solid #d2232a",
                }}
              >
                Signup
              </Button>
            </div>
            {/* </Link> */}
            {/* <Link to="/login"> */}
            <div className=" hidden md:block ">
              <Button
                style={{
                  width: "100px",
                  height: "50px",
                  borderRadius: "37px",
                  padding: "10px",
                }}
              >
                Login
              </Button>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="block md:hidden lg:hidden ">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
