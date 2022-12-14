import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import { NavBar } from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

import { getUserProfile } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EditExperiences } from "./components/Experiences/EditExperiences";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/experiences" element={<EditExperiences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
