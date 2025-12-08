import styles from './Auth.module.css'
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>Login</h1>
        </div>
        <div className={styles.inputs}>
          <input placeholder='Enter your email' /> <br></br>
          <input placeholder='Enter your password' />
        </div>
        <div className={styles.loginbottom}>
          <p className={styles.logintext}>Don't have an account? <Link to="/registration"><span>Register</span></Link></p>
          <button className={styles.loginbtn}>Login</button>
        </div>
      </div>
    </div>
    
  )
}

export default Auth;