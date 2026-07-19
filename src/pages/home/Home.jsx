import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import CityList from "../../components/cityList/CityList";
import PropertyTypeList from "../../components/propertyTypeList/PropertyTypeList";
import HotelList from "../../components/hotelList/HotelList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CityList />
      <PropertyTypeList />
      <HotelList />
    </div>
  );
};

export default Home;
