import { Link } from "react-scroll";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const sections = [
  {
    title: "Company",
    items: [
      { text: "Home", section: "home" },
      { text: "Services", section: "services" },
      { text: "Our Team", section: "about" },
      // { text: "Contact us", section: "contact" },
    ],
  },
  {
    title: "Follow us",
    items: [
      {
        icon: <FaInstagramSquare />,
        text: "Instagram",
        url: "https://www.instagram.com/techmonk.np/",
      },
      {
        icon: <FaFacebookSquare />,
        text: "Facebook",
        url: "https://www.facebook.com/techmonknp",
      },
    ],
  },
  {
    title: "Get in Touch",
    items: [
      { icon: <FaPhoneAlt />, text: "+977-9823446552" },
      { icon: <FaEnvelope />, text: "tech.monk313@gmail.com" },
      { icon: <FaMapMarkerAlt />, text: "Godavari-11, Lalitpur, Nepal" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full bg-white flex md:flex-row md:justify-around items-center font-poppins sm:flex-col">
        <div className="max-w-[474px] py-10">
          <div className="flex flex-row items-center sm:justify-center">
            <img src="/logo.svg" alt="" className="h-[59px] w-[54px]" />
            <h1 className="text-[72px] leading-[108px] font-normal sm:hidden md:block">
              TechMonk
            </h1>
          </div>
          <p className="font-poppins text-[24px] sm:text-center">
            Innovating the future with cutting-edge technology, seamless
            solutions, and a passion for excellence.
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 justify-items-center mx-auto">
            {sections.map((section, index) => (
              <div key={index}>
                <h1 className="text-[20px] font-medium">{section.title}</h1>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center sm:text-center">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center sm:text-center"
                        >
                          {item.icon && (
                            <span className="text-xl mr-3">{item.icon}</span>
                          )}
                          <span>{item.text}</span>
                        </a>
                      ) : item.section ? (
                        <Link
                          to={item.section}
                          smooth={true}
                          duration={500}
                          offset={-100}
                          className="cursor-pointer flex items-center sm:text-center hover:text-blue transition-all duration-500"
                        >
                          <span>{item.text}</span>
                        </Link>
                      ) : (
                        <span className="flex items-center sm:text-center">
                          {item.icon && (
                            <span className="text-xl mr-3">{item.icon}</span>
                          )}
                          <span>{item.text}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center md:space-x-[300px] py-4 bg-white sm:space-x-[10px]">
        <div>Copyright 2024 Techmonk All Right Reserved</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
    </>
  );
};

export default Footer;
