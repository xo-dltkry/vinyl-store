import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserStore from './store/UserStore.tsx'
import VinylStore from './store/VinylStore.tsx'
import type {IStoreContext} from './context/StoreContext.ts'
import { Context } from './context/StoreContext.ts'

const store: IStoreContext = {
  user: new UserStore(),
  vinyl: new VinylStore(),
}

console.log(import.meta.env.VITE_API_URL);


createRoot(document.getElementById('root')!).render(
  <Context.Provider value={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Context.Provider>
)
