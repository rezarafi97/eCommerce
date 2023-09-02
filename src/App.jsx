import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="container w-4/5 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
