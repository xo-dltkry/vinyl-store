import styles from './Admin.module.css'

function Admin() {
  return (
    <div className={styles.admincontainer}>
      <button className={styles.adminbtn}>Add new artist</button>
      <button className={styles.adminbtn}>Add new genre</button>
      <button className={styles.adminbtn}>Add new vinyl</button>
    </div>
  )
}

export default Admin;