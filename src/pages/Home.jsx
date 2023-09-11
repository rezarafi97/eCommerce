import { Category, SliderCategory, SliderLand } from "../components/home";

const Home = () => {
  return (
    <>
      <div className="flex mb-36">
        <Category />
        <SliderLand />
      </div>
      <SliderCategory />
    </>
  );
};

export default Home;
