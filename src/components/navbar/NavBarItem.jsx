import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarItem = ({ type, icon, active }) => {
  return (
    <div className={`navbar-item ${active ? "navbar-item--active" : ""}`}>
      <FontAwesomeIcon icon={icon} className="navbar-item__icon" />
      <span className="navbar-item__text">{type}</span>
    </div>
  );
};

export default NavBarItem;
