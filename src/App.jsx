import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar/navbar'


function App() {

  return (
    <div className="app">
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
