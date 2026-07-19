import CityItem from "./CityItem";
import "./CityList.css";

// Dữ liệu mẫu copy từ city.json
const cityData = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const CityList = () => {
  return (
    <div className="city-list">
      {cityData.map((city, index) => (
        <CityItem
          key={index}
          name={city.name}
          subText={city.subText}
          image={city.image}
        />
      ))}
    </div>
  );
};

export default CityList;
