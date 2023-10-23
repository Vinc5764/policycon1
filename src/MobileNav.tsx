import { useMediaQuery } from "react-responsive";
import { HiSearch, HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useState, FunctionComponent } from "react";

import "./mobileNav.css";
import { Link } from "react-router-dom";
import Button from "./Button";

interface MyComponentProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Link {
  name: string;

  route: string;
}
const links: Link[] = [
  {
    name: "Analysts",
    route: "/analysts",
  },
  {
    name: "Subscribers",
    route: "/subscribers",
  },
  {
    name: "Resources",
    route: "/",
  },
  {
    name: "AboutUs",
    route: "/home",
  },
];

const reactIconStyle = {
  width: "30px",
  height: "30px",
  color: "#9e9ea7",
  cursor: "pointer",
};

const MobileNavbar: FunctionComponent<MyComponentProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <nav className="nav-mobile   ">
        {isOpen ? (
          <HiX onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <div className="flex gap-2 items-center">
            {/* <Link to="/login">
              {" "}
              <p className=" hover:text-red-400">Login</p>
            </Link> */}
            <HiMenu
              className="w-[30px] h-[30px]  "
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        )}
      </nav>
      {isOpen ? (
        <div className="mobile-menu    bg-slate-50 ">
          <ul className="flex flex-col  justify-center  pr-[20px]   items-end ">
            {links.map((link) => {
              return (
                <li
                  className="pl-[10px]   
                     text-right       "
                  onClick={() => setIsOpen(!isOpen)}
                  key={link.name}
                >
                  {/* <Link to={link.route}>{link.name}</Link> */}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-end space-x-6">
            {/* <Link to="/register"> */}
              {" "}
              <button
                style={{
                  padding: "0px 0px",
                  borderRadius: "30px",
                  width: "124px",
                  border: "2px solid black",
                  height: "55px",
                  fontSize: "18px",
                }}
                className="   lg:block  text-black  "
              >
                Signup
              </button>
            {/* </Link> */}
            {/* <Link to="/login"> */}
              <Button>Login</Button>
            {/* </Link> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default function Navbar() {
  const Mobile = useMediaQuery({
    query: "(max-width: 950px)",
  });

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      {Mobile && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}
