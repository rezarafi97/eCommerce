import { CategoryHome, Featured, MonthSale, Products, SliderLand, SpecialOffer, TodaySale, WhyUs } from "../components/home";

const Home = () => {
  return (
    <>
      <div className="lg:flex mb-20 lg:mb-36">
        <CategoryHome />
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
