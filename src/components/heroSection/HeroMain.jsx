import HeroText from "./HeroText";
import HeroPick from "./HeroPick";

const HeroMain = () => {
  return (
    <div
      id="home"
      className="pt-40 pb-16 conic-gradient-to-r from-white to-darkerWhite  w-full mt-8"
      style={{
        background:
          "linear-gradient(135deg, #FEFEFE 30%, rgba(241, 241, 241, 0.8) 40%, #9C9C9C 70%)",
      }}
    >
      <div className="w-full mx-auto flex md:flex-row sm:flex-col justify-around md:items-start sm:items-center relative">
        <HeroText />
        <HeroPick />
      </div>
    </div>
  );
};

export default HeroMain;
