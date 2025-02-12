import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        {children}
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
