const EventItem = ({ info, name, image, onEventClick, id }) => {
  return (
    <div onClick={() => console.log("soy el padre div ")}>
      <img src={image} alt="name" width="150" height="150" />
      <h4>{name}</h4>
      <p>{info}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEventClick(id);
        }}
      >
        Ver mas{" "}
      </button>
    </div>
  );
};

export default EventItem;
