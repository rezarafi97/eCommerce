import { Category, MonthSale, Products, SliderLand, SpecialOffer, TodaySale } from "../components/home";

const Home = () => {
  return (
    <>
      <div className="flex mb-36">
        <Category />
        <SliderLand />
      </div>
      <TodaySale />
      <MonthSale />
      <SpecialOffer />
      <Products />
    </>
  );
};

export default Home;
