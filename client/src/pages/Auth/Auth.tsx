import styles from './Auth.module.css'
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>{isLogin ? "Login" : "Registration"}</h1>
        </div>
        <div className={styles.inputs}>
          <input placeholder='Enter your email' /> <br></br>
          <input placeholder='Enter your password' />
        </div>
        {isLogin ?
        <div className={styles.loginbottom}>
          <p className={styles.logintext}>Don't have an account? <Link to={REGISTRATION_ROUTE}><span>Register</span></Link></p>
          <button className={styles.loginbtn}>Login</button>
        </div>
        :
        <div className={styles.loginbottom}>
          <p className={styles.logintext}>Already have an account? <Link to={LOGIN_ROUTE}><span>Login</span></Link></p>
          <button className={styles.loginbtn}>Register</button>
        </div>
        }
      </div>
    </div>
    
  )
}

export default Auth;