import PropTypes from "prop-types";
import useContextValue from "../../hooks/useContextValue";

const Container = ({ children, className = "px-5" }) => {
  const { isDark } = useContextValue();
  return (
    <section className={`${isDark && "dark"}`}>
      <section
        className={`w-full pt-16 bg-white dark:bg-darkThree text-darkTwo dark:text-lightTwo ${className}`}
      >
        {children}
      </section>
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
