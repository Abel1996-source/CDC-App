import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboad from './pages/Dashboad';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Formulaire from './pages/Formulaire';
import ValidationRgister from './pages/ValidationRegister';
import { isAuthenticated } from './TokenValidation';



const App=() =>{

  const ProtectedRoute = () => {
    console.log(isAuthenticated());
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <>
    <Routes>

        <Route path='/login'element={<Login/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
        <Route path="/validation" element={<ValidationRgister/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        
          <Route path='/dashboad' element={<Dashboad/>} ></Route>
        <Route path='/dashboad' element={<ProtectedRoute/>} >
        </Route>
        <Route path='/blog' element={<ProtectedRoute/>}>
          <Route path='/blog' element={<Blog/>}></Route> 
        </Route>
        <Route path='/formulaire/:id' element={<ProtectedRoute/>}>
          <Route path='/formulaire/:id' element={<Formulaire/>}></Route> 
        </Route>
    </Routes>
    </>
  );
}

export default App;
