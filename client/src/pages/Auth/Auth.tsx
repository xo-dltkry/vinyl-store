import styles from './Auth.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { login, registration } from '../../http/userAPI';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../context/StoreContext';

function Auth() {
  const {user} = useStore()
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const click = async () => {
    try {
      const data = isLogin
      ? await login(email, password)
      : await registration(email, password);

      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE)
    } catch(e: any) {
      alert(e.response.data.message)
    }
  };
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>{isLogin ? "Login" : "Registration"}</h1>
        </div>
        <div className={styles.inputs}>
          <input 
            placeholder='Enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> <br></br>
          <input 
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {isLogin ?
        <div className={styles.loginbottom}>
          <p className={styles.logintext}>Don't have an account? <Link to={REGISTRATION_ROUTE}><span>Register</span></Link></p>
          <button className={styles.loginbtn} onClick={click}>Login</button>
        </div>
        :
        <div className={styles.loginbottom}>
          <p className={styles.logintext}>Already have an account? <Link to={LOGIN_ROUTE}><span>Login</span></Link></p>
          <button className={styles.loginbtn} onClick={click}>Register</button>
        </div>
        }
      </div>
    </div>
    
  )
}

export default observer(Auth);