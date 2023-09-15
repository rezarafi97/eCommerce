import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <div className="bg-red-600 w-5 h-10 rounded"></div>
      <div className="flex items-center">
        <p className="font-poppins text-base font-semibold text-red-600">
          {title}
        </p>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
