import PropTypes from "prop-types";
import useContextValue from "../../hooks/useContextValue";

const Container = ({ children, className = "", paddingX = true, paddingY = 'py-16' }) => {
  const { isDark } = useContextValue();
  return (
    <section className={`${isDark && "dark"}`}>
      <section
        className={`w-full max-w-screen-2xl mx-auto bg-gray-50 dark:bg-darkThree text-darkTwo dark:text-lightTwo ${className} ${paddingX && 'px-5 lg:px-10'} ${paddingY}`}
      >
        {children}
      </section>
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  paddingX: PropTypes.bool,
  className: PropTypes.string,
  paddingY: PropTypes.string,
};

export default Container;
