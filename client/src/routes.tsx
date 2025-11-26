import { ADMIN_ROUTE, CART_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, VINYL_ROUTE, HOME_ROUTE } from "./utils/consts.ts"
import Admin from './pages/Admin/Admin.tsx'
import Cart from "./pages/Cart/Cart.tsx"
import type { RouteObject } from "react-router-dom"
import Shop from "./pages/Shop/Shop.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import VinylPage from "./pages/VinylPage/VinylPage.tsx"
import Home from "./pages/Home/Home.tsx"

export const authRoutes: RouteObject[] = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: CART_ROUTE,
    element: <Cart />,
  }
]

export const publicRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: VINYL_ROUTE + '/:id',
    element: <VinylPage />
  }
]