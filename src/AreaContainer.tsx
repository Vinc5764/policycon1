import vector1 from "./assets/vector1.png";

const AreaContainer = ({ title, number }: any) => {
  return (
    <div>
      <div
        style={{
          boxShadow: " 0px 4px 47px rgba(48, 5, 6, 0.07)",
          border: "1px solid rgba(145, 158, 171, 0.32)",
          borderRadius: "32px",
          boxSizing: "border-box",
          background: " #FFFFFF",
        }}
        className="xll:h-[100px]  flex h-[80px] w-[165px] items-center space-x-[4px] lg:h-[87px] lg:w-[201px] "
      >
        <div className="w-[75px] max-w-md p-[10px]">
          <img src={vector1} alt="" />
        </div>
        <div className="font-manrope pr-[15px] ">
          <h3 className=" font-manrope text-[14px] font-bold text-gray-700 lg:text-[14px]">
            {title}
          </h3>
          <h4 className="font-manrope text-[11px] ">{number} Analysts</h4>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
