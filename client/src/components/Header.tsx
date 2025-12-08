import { useContext } from "react";
import {Context} from '../main.tsx';
import { observer } from "mobx-react-lite";

function Header() {
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
          <button className="headbutton admin-panel">Admin Panel</button>
          <button className="headbutton logout" onClick={() => user.setIsAuth(false)}>Logout</button>
        </div>
        :
        <div className="header-unauth">
          <button className="login" onClick={() => user.setIsAuth(true)}>Login / Registration</button>
        </div>
      }
    </div>
  )
}

export default observer(Header);