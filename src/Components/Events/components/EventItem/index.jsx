import styles from "./EventItem.module.css";

const EventItem = ({ info, name, image, onEventClick, id }) => {
  return (
    <div
      className={styles.eventItemContainer}
      onClick={() => console.log("soy el padre div ")}
    >
      <img src={image} alt="name" width="200" height="200" />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button
          className={styles.seeMoreBtn}
          onClick={(e) => {
            e.stopPropagation();
            onEventClick(id);
          }}
        >
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
