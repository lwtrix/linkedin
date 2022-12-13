<<<<<<< Updated upstream
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
=======
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile/Profile';

import { getUserProfile } from './redux/actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

>>>>>>> Stashed changes
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Homepage />} />
=======
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<Profile />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
