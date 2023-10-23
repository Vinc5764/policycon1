import { Link } from "react-router-dom";

type proptype = {
  name: string;
};

const DropdownItem = ({ name }: proptype) => (
  <Link className=" font-manrope text-[18px] " to="/analysts">
    {name}
  </Link>
);
export default DropdownItem;
