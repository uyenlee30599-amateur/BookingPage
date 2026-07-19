import HotelItem from "./HotelItem";
import "./HotelList.css";

// Dữ liệu mẫu copy từ hotel_list.json
const hotelData = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HotelList = () => {
  return (
    <div className="hotel-section">
      <h2 className="hotel-section__title">Homes guests love</h2>
      <div className="hotel-list">
        {hotelData.map((hotel, index) => (
          <HotelItem
            key={index}
            name={hotel.name}
            city={hotel.city}
            price={hotel.price}
            rate={hotel.rate}
            type={hotel.type}
            image_url={hotel.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
