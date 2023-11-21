const EventItem = ({ info, name, image }) => {
  return (
    <div>
      <img src={image} alt="name" width="150" height="150" />
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  );
};

export default EventItem;
