import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Header from "./components/Header"
import { observer } from "mobx-react-lite"
import { useStore } from "./context/StoreContext"
import { useEffect, useState } from "react"
import { check } from "./http/userAPI"

function App() {
  const {user} = useStore()
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])
  if(Loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}

export default observer(App)
