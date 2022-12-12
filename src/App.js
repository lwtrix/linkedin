import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
