import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Overview from './contents/Overview';

const App=() =>{
  return (
    <>
    <Routes>
        <Route path='/dashboad' element={<Overview/>} ></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/'element={<Register/>}></Route>
    </Routes>
    </>
  );
}

export default App;
