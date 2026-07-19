import PropertyTypeItem from "./PropertyTypeItem";
import "./PropertyTypeList.css";

// Dữ liệu mẫu copy từ type.json
const typeData = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const PropertyTypeList = () => {
  return (
    <div className="property-type-section">
      <h2 className="property-type-section__title">Browse by property type</h2>
      <div className="property-type-list">
        {typeData.map((type, index) => (
          <PropertyTypeItem
            key={index}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeList;
