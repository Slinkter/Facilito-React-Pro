import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";

const EventItem = ({ info, name, image, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      className={styles.eventItemContainer}
      onClick={() => console.log("soy el padre div ")}
    >
      <img src={image} alt="name" width="200" height="200" />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          {/*      <Link to={`/detail/${id}`}>Ver mas</Link> */}
          ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
