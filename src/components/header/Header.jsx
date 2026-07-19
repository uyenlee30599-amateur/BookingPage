import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const handleSearch = () => {
    window.location.replace("/search");
  };

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
        <p className="header__subtitle">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="header__signin-btn">Sign in / Register</button>
      </div>

      <div className="header__search">
        <div className="header__search-field header__search-field--location">
          <FontAwesomeIcon icon={faBed} className="header__search-icon" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="header__search-input"
          />
        </div>

        <div className="header__search-field">
          <FontAwesomeIcon icon={faCalendar} className="header__search-icon" />
          <input
            type="text"
            defaultValue="06/24/2022 to 06/24/2022"
            className="header__search-input"
          />
        </div>

        <div className="header__search-field">
          <FontAwesomeIcon icon={faFemale} className="header__search-icon" />
          <input
            type="text"
            defaultValue="1 adult · 0 children · 1 room"
            className="header__search-input"
          />
        </div>

        <button className="header__search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
