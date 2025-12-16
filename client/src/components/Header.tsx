import {useStore} from '../context/StoreContext';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

function Header() {
  const navigate = useNavigate()
  const {user} = useStore()

  const logOut = () => {
    user.clearUser()
    user.setIsAuth(false)
  }
  return (
    <div className="header-container">
      <div className="header-name">
        <h1 className="vinyl-store" onClick={() => navigate(SHOP_ROUTE)} style={{cursor: "pointer"}}>Vinyl Store</h1>
      </div>
      {user.isAuth ? 
        <div className="header-auth">
          <button className="headbutton admin-panel" onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</button>
          <button className="headbutton logout" onClick={() => logOut()}>Logout</button>
        </div>
        :
        <div className="header-unauth">
          <button className="headbutton login" onClick={() => navigate(LOGIN_ROUTE)}>Login / Registration</button>
        </div>
      }
    </div>
  )
}

export default observer(Header);