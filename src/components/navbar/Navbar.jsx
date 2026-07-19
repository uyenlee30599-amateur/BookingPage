import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import NavBarItem from "./NavBarItem";
import "./Navbar.css";

// Dữ liệu mẫu copy từ navBar.json
const navBarData = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

// map chuỗi icon trong JSON sang icon object của FontAwesome
const iconMap = {
  "fa-bed": faBed,
  "fa-plane": faPlane,
  "fa-car": faCar,
  "fa-taxi": faTaxi,
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo">Booking Website</div>
        <div className="navbar__auth">
          <button className="navbar__auth-btn">Register</button>
          <button className="navbar__auth-btn">Login</button>
        </div>
      </div>

      <div className="navbar__menu">
        {navBarData.map((item, index) => (
          <NavBarItem
            key={index}
            type={item.type}
            icon={iconMap[item.icon]}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
