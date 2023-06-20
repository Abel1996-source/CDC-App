import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Loyout from './pages/Loyout';

const App=() =>{
  return (
    <>
    <Routes>
        <Route path='/dashboad' element={<Loyout/>} ></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
    </Routes>
    </>
  );
}

export default App;
