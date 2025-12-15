import cas from "../../../public/cas.jpg"
import styles from "./VinylPage.module.css"

function VinylPage() {
  const vinyl = {id: 1, title: "Cigarretes After Sex", img: cas, price: 39990}
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.imgcontainer}>
          <img src={vinyl.img} className={styles.vinylimg} />
        </div>
        <div className={styles.description}>
          <h1 className={styles.vinyltitle}>{vinyl.title}</h1>
          <h2 className={styles.vinylbandname}>Cigarretes After Sex</h2>
          <p className={styles.vinylprice}>Price: {vinyl.price}</p>
        </div>
      </div>
    </>
  )
}

export default VinylPage;