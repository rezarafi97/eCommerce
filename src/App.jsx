import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Footer } from "./components/footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <div className="container w-4/5 mx-auto">
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
