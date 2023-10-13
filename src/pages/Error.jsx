import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="font-inter text-8xl font-medium">404 Not Found</h2>

      <p className="mt-10 mb-20 font-poppins text-base font-normal">Your visited page not found. You may go home page.</p>
      
      <Link to="/" className="bg-red-600 text-white px-12 py-4 font-poppins text-base font-medium">Back to home page</Link>
    </div>
  );
};

export default Error;
