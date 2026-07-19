const CityItem = ({ name, subText, image }) => {
  return (
    <div className="city-item">
      <img src={image} alt={name} className="city-item__image" />
      <div className="city-item__overlay">
        <p className="city-item__name">{name}</p>
        <p className="city-item__subtext">{subText}</p>
      </div>
    </div>
  );
};

export default CityItem;
