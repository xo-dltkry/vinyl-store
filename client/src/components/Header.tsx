import { useContext } from "react";
import {Context} from '../context/StoreContext';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

function Header() {
  const navigate = useNavigate()
  const context = useContext(Context)
  if (!context) {
    throw new Error("Header must be used within Context.Provider");
  }
  const {user} = context
  return (
    <div className="header-container">
      <div className="header-name">
        <h1 className="vinyl-store">Vinyl Store</h1>
      </div>
      {user.isAuth ? 
        <div className="header-auth">
          <button className="headbutton admin-panel" onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</button>
          <button className="headbutton logout" onClick={() => navigate(LOGIN_ROUTE)}>Logout</button>
        </div>
        :
        <div className="header-unauth">
          <button className="headbutton login" onClick={() => user.setIsAuth(true)}>Login / Registration</button>
        </div>
      }
    </div>
  )
}

export default observer(Header);