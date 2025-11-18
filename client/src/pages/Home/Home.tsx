import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.shape}>
        <h1 className={styles.text}>Explore the world <br></br>
        of <span>vinyl</span> discs</h1>
        <button className={styles.btn}>
          Shop the Collection
        </button>
      </div>
      
    </div>
  )
}

export default Home;