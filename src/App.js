import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboad from './pages/Dashboad';
import Home from './pages/Home';


const App=() =>{
  return (
    <>
    <Routes>
        <Route path='/dashboad' element={<Dashboad/>} ></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
