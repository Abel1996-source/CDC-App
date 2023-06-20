import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboad from './pages/Dashboad';


const App=() =>{
  return (
    <>
    <Routes>
        <Route path='/dashboad' element={<Dashboad/>} ></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/'element={<Register/>}></Route>
    </Routes>
    </>
  );
}

export default App;
