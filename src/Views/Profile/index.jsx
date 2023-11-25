import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  /* revisar el pathname */

  const handleTabClick = (path) => {
    navigate(`/profile/${path}`);
  };
  return (
    <div>
      <span
        className={`${pathname.includes("my-info") ? styles.active : ""}`}
        onClick={() => handleTabClick("my-info")}
      >
        Mi Informacion
      </span>
      <span
        className={`${pathname.includes("liked-events") ? styles.active : ""}`}
        onClick={() => handleTabClick("liked-events")}
      >
        Eventos Favorito
      </span>

      <Outlet />
    </div>
  );
};

export default Profile;
