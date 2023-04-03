import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
const NavBar = ({ value, setLogedIn }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setLogedIn(false);
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.battery}>
        Battery: <span>{value}%</span>
      </div>
      <div className={styles.content}>
        <Link to="/" className={styles.value}>
          DashBoard
        </Link>
        <Link to="/camera" className={styles.value}>
          Camera
        </Link>
        <Link to="/gps" className={styles.value}>
          GPS
        </Link>
        <Link to="documentation" className={styles.value}>
          Documentation
        </Link>
        <span className={styles.value} onClick={handleLogOut}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default NavBar;
