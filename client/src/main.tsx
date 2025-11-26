import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserStore from './store/UserStore.tsx'
import VinylStore from './store/VinylStore.tsx'

interface IStoreContext {
  user: UserStore
  vinyl: VinylStore
}

export const Context = createContext<IStoreContext | null>(null)

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    user: new UserStore(),
    vinyl: new VinylStore()
  }}>
    <StrictMode>
      <App />
    </StrictMode>
  </Context.Provider>
)
