import Button from "../buttons/Button";
const HeroText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center mt-[150px]">
      <h1 className="font-bebas sm:text-[100px] md:text-[140px] lg:text-[160px] lg:leading-[120px] md:leading-[160px] sm:leading-[120px] font-normal ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-darkBlue">
          INNOVATE
        </span>
        <br /> BUILD <br />
        SCALE
      </h1>
      <p className="font-poppins text-[28px] leading-[42px] font-medium mt-2 md:text-start sm:text-center">
        Empowering businesses with intelligent, scalable,
        <br /> and future-ready technology. From concept to <br /> execution, we
        create tailored solutions that <br /> optimize processes, strengthen
        security, and fuel <br />
        sustainable growth in the digital landscape.
      </p>
      <Button
        href="#"
        text="Free Consultation"
        className=" inline-block font-poppins text-[32px] leading-48px font-semibold border-[1px] border-black bg-white px-2 py-2 mt-12 mb-5 rounded-[12px] sm:2xl sm:left-[20%] hover:scale-110 transition-all duration-500"
      />
    </div>
  );
};

export default HeroText;
