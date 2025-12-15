import { SHOP_ROUTE } from "../../utils/consts";
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.background}>
      <div className={styles.shape}>
        <h1 className={styles.text}>Explore the world <br></br>
        of <span>vinyl</span> discs</h1>
        <button className={styles.btn} onClick={() => navigate(SHOP_ROUTE)}>
          Shop the Collection
        </button>
      </div>
      
    </div>
  )
}

export default Home;