import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Routes } from 'react-router-dom';
import Navbarn from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Cardcontain from './components/Cardcontain'

function App() {
  return (
    
<div className="App">
< Navbarn />
<Home />
<Cardcontain />
<Login />


    </div>
  );
}

export default App;
