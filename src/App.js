import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import './css/bootstrap.min.css';
import Login from './login';
import Main from './main';
import Subscriber from './Subscriber';
function App() {
  console.log(Boolean(localStorage.getItem("loggedIn")))

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("loggedIn")));
   
  return (
    <div className="">
 
    <BrowserRouter>
 
    <Routes>
    <Route  path='/' element={<Login/>}/>
    <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/subscriber' element={<Subscriber/>}/>
      <Route exact path='/main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
