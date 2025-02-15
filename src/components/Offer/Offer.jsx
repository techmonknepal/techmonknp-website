import React from "react";

const Offer = () => {
  return (
    <div
      id="services"
      className="flex flex-col w-full bg-bgOffer h-full sm:text-center"
    >
      {/* OFFER START Heading and Logo  */}

      <div className="flex flex-col w-auto ">
        <h1 className="font-poppins font-semibold md:text-[96px] sm:text-[45px] text-center">
          WE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-darkBlue">
            OFFER
          </span>
        </h1>
        <div className="flex md:flex-row justify-center items-center gap-10 sm:flex-col">
          <img src="/offer-logo-1.png" alt="" />
          <img src="/offer-logo-2.png" alt="" />
          <img src="/offer-logo-3.png" alt="" />
        </div>
      </div>

      {/* OFFER DESIGNS  */}

      <div className=" max-h-[688px] flex md:flex-row sm:flex-col sm:gap-y-10 justify-between items-center mx-auto mt-[37px] gap-x-[145px] ">
        <div className="max-w-[711px] sm:text-center ">
          <h1 className="font-poppins md:text-[72px] sm:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue to-darkBlue">
            DESIGN
          </h1>
          <p className="font-poppins md:text-[28px] sm:text-[14px] font-normal">
            A poor user experience drives customers away—great design keeps them
            engaged. We craft intuitive, user-friendly interfaces that make
            every click seamless and every interaction meaningful. Stand out
            with a design that’s not just beautiful, but built for results.
          </p>
        </div>

        <div>
          <img
            src="/offer-section-1.png"
            alt=""
            className="md:max-w-[829px] md:max-h-[512px] sm:max-w-[400px] sm:max-h-[250px] md:mt-[105px] sm:mt-[15px]"
          />
        </div>
      </div>

      <div className=" max-h-[688px] flex md:flex-row sm:flex-col sm:gap-y-10 justify-between items-center mx-auto mt-[37px] gap-x-[145px] ">
        <div>
          <img
            src="/offer-section-2.png"
            alt=""
            className="md:max-w-[829px] md:max-h-[512px] sm:max-w-[400px] sm:max-h-[250px] md:mt-[105px] sm:mt-[15px]"
          />
        </div>

        <div className="max-w-[711px] sm:text-center ">
          <h1 className="font-poppins md:text-[72px] sm:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue to-darkBlue">
            DEVELOP
          </h1>
          <p className="font-poppins md:text-[28px] sm:text-[14px] font-normal">
            Slow, buggy, and unscalable code can break your business. We develop
            fast, secure, and scalable software solutions that power seamless
            experiences and drive efficiency. From MVPs to enterprise
            applications, we bring your ideas to life—built to perform, built to
            last.
          </p>
        </div>
      </div>

      <div className=" max-h-[688px] flex md:flex-row sm:flex-col sm:gap-y-10 justify-between items-center mx-auto mt-[37px] gap-x-[145px] ">
        <div className="max-w-[711px] sm:text-center ">
          <h1 className="font-poppins md:text-[72px] sm:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue to-darkBlue">
            MARKET
          </h1>
          <p className="font-poppins md:text-[28px] sm:text-[14px] font-normal">
            Struggling to reach the right audience? We create data-driven
            marketing strategies that attract customers, convert leads, and grow
            your business. From SEO to paid ads, we help you cut through the
            noise and maximize your impact.
          </p>
        </div>

        <div>
          <img
            src="/offer-section-3.png"
            alt=""
            className="md:max-w-[829px] md:max-h-[512px] sm:max-w-[400px] sm:max-h-[250px] md:mt-[105px] sm:mt-[15px] mb-[35px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
