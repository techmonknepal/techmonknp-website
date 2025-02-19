import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trust = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white w-full py-10">
      <h1 className="font-poppins text-[48px] md:text-[96px] font-semibold mb-10 md:ml-[100px] sm:text-[40px] sm:ml-[30px]">
        WHY TRUST US?
      </h1>

      <div className="flex flex-wrap justify-around w-full">
        {data.map(({ title, value }) =>
          title.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <h1 className="font-poppins text-[60px] md:text-[120px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-blue to-darkBlue">
                {value[i]}
              </h1>
              <p className="font-poppins text-[24px] md:text-[32px] font-normal w-[250px]">
                {t}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="w-[80%] mx-auto mt-10 relative overflow-visible">
        <Slider {...settings}>
          {data[0].testimonials.map((d, index) => (
            <div className="flex md:flex-row justify-center items-center">
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-around text-center md:text-left"
              >
                <div className="flex justify-center">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="md:w-[450px] md:h-[450px] sm:w-[150px] sm:h-[150px] rounded-full"
                  />
                </div>
                <div className="md:ml-8 mt-6 md:mt-0 md:w-[900px]">
                  <p className="font-poppins text-[24px] md:text-[32px] font-light md:w-[600px]">
                    "{d.para}"
                  </p>
                  <h2 className="md:text-[32px] font-semibold sm:text-[24px] mt-4">
                    {d.name}
                  </h2>
                  <h3 className="md:text-[24px] font-normal sm:text-[16px] text-gray-500">
                    {d.position}, {d.company}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    title: [
      "Projects Completed",
      "Years of Experience",
      "Trusted Clients & Partners",
      "Client Satisfaction",
    ],
    value: ["15+", "1.5+", "10+", "15+"],
    testimonials: [
      {
        img: "/trust-1.png",
        para: "TechMonk is a game-changer in the tech industry, offering innovative solutions with a perfect blend of creativity and functionality. Their website is sleek, user-friendly, and packed with valuable insights, reflecting their expertise in web development, AI, and cutting-edge technology.",
        name: "Asmin",
        position: "CEO",
        company: "TechMonk",
      },
      {
        img: "/trust-1.png",
        para: "TechMonk provided us with the best tech solutions, helping us scale our business efficiently. Their expertise in AI and web development is top-notch.",
        name: "John Doe",
        position: "CTO",
        company: "InnovateTech",
      },
    ],
  },
];

export default Trust;
