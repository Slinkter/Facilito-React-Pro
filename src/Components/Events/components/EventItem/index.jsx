const EventItem = ({ info, name, image, onEventClick, id }) => {
  return (
    <div>
      <img src={image} alt="name" width="150" height="150" />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={() => onEventClick(id)}>Ver mas </button>
    </div>
  );
};

export default EventItem;
