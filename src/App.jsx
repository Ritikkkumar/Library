import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
//mport Home from './components/Home'
import BrowseBooks from './components/BrowseBooks'
import { Provider} from 'react-redux'
import appStore from './utils/appStore'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
      <Header></Header>
      <Outlet></Outlet>
      </Provider>
    </>
  )
}

export default App
