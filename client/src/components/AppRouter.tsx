import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../context/StoreContext';

function AppRouter() {
  const {user} = useContext(Context)!
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element} />
      )}
      {publicRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element} />
      )}
      <Route path='*' element={<Navigate to={SHOP_ROUTE} replace/>} />
    </Routes>
  )
}

export default AppRouter;