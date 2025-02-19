import { Link } from "react-scroll";

const Links = [
  { link: "Home", section: "home" },
  { link: "Services", section: "services" },
  { link: "About us", section: "about" },
  { link: "Contact us", section: "contact" },
  { link: "Career", section: "career" },
];

const NavbarLinks = () => {
  return (
    <div>
      <ul className="flex gap-6 text-black text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-2xl sm:text-xl sm:bg-blue/30 backdrop-blur-lg sm:w-full lg:bg-darkWhite">
        {Links.map((item, index) => (
          <li key={index} className="group">
            <Link
              to={item.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-100} // Adjusted for proper scrolling
              className="cursor-pointer font-poppins text-[16px] leading-[24px] font-normal text-black hover:text-blue transition-all duration-500"
            >
              {item.link}
            </Link>
            <div className="mx-auto bg-blue w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
