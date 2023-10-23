import AreaContainer from "./AreaContainer";

const areas = [
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Sports",
    number: 50,
  },
  {
    titlte: "Criminal Justice",
    number: 50,
  },
  {
    titlte: "Agriculture",
    number: 50,
  },
  {
    titlte: "Social Security",
    number: 50,
  },
  {
    titlte: "Art and culture",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
  {
    titlte: "Environment",
    number: 50,
  },
];

const Areas = () => {
  return (
    <div className="container-none mx-auto mt-[8%] flex flex-col items-center pr-4 sm:px-[5%] ">
      <div className="  font-cabinet-grotesk mb-[4%] pl-[15px] text-center text-[24px] font-semibold  text-gray-700 lg:pl-0 ">
        <h1>Popular Analyst Areas</h1>
      </div>
      <div className="">
        <ul className="grid grid-cols-2 gap-8  sm:grid-cols-3 md:grid-cols-4">
          {areas.map((item) => (
            <li className="">
              <AreaContainer title={item.titlte} number={item.number} />
            </li>
          ))}
        </ul>
      </div>
      <button
        style={{
          padding: "0px 0px",
          borderRadius: "30px",
          width: "140px",
          border: "2px solid black",
          height: "60px",
          fontSize: "18px",
        }}
        className=" font-manrope  ml-[0px] mt-[6%] block  text-black lg:ml-0  "
      >
        Get Started
      </button>
    </div>
  );
};

export default Areas;
