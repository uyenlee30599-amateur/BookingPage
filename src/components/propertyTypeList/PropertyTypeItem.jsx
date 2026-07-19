const PropertyTypeItem = ({ name, count, image }) => {
  return (
    <div className="property-type-item">
      <img src={image} alt={name} className="property-type-item__image" />
      <p className="property-type-item__name">{name}</p>
      <p className="property-type-item__count">{count} hotels</p>
    </div>
  );
};

export default PropertyTypeItem;
