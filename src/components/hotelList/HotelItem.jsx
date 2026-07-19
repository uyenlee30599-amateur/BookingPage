const HotelItem = ({ name, city, price, rate, type, image_url }) => {
  const handleNameClick = () => {
    window.location.replace("/detail");
  };

  return (
    <div className="hotel-item">
      <img src={image_url} alt={name} className="hotel-item__image" />
      <p className="hotel-item__name" onClick={handleNameClick}>
        {name}
      </p>
      <p className="hotel-item__city">{city}</p>
      <p className="hotel-item__price">Starting from ${price}</p>
      <div className="hotel-item__rate">
        <span className="hotel-item__rate-score">{rate}</span>
        <span className="hotel-item__rate-text">{type}</span>
      </div>
    </div>
  );
};

export default HotelItem;
