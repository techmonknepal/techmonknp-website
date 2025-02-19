import Button from "../buttons/Button";
const Build = () => {
  return (
    <div className="bg-#F5F5F5 text-center w-full font-poppins py-9">
      <h1 className=" font-medium md:text-[96px] sm:text-[45px]">
        LET’S BUILD{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-darkBlue">
          TOGETHER
        </span>
      </h1>
      <p className="md:text-[56px] sm:text-[20px]">
        Your Vision, Our Expertise
      </p>
      <Button
        href="#"
        text="GET STARTED"
        className=" inline-block md:text-[56px] sm:text-[23px] bg-gradient-to-r from-blue to-darkBlue py-[20px] px-[24px] rounded-r-[24px] rounded-l-[24px] text-white font-medium mt-5 mb-5 hover:scale-110 transition-all duration-500"
      />
    </div>
  );
};

export default Build;
