import { Category, Featured, MonthSale, Products, SliderLand, SpecialOffer, TodaySale, WhyUs } from "../components/home";

const Home = () => {
  return (
    <>
      <div className="lg:flex lg:mb-36">
        <Category />
        <SliderLand />
      </div>
      <TodaySale />
      <MonthSale />
      <SpecialOffer />
      <Products />
      <Featured />
      <WhyUs />
    </>
  );
};

export default Home;
