import PropTypes from "prop-types";
const Button = ({ href, text, className }) => {
  return (
    <div>
      {/* <button className={className}>{text}</button> */}
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  );
};

export default Button;

// Define prop types
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string,
};
