import { Routes, Route } from "react-router-dom"
import PlaceToStay from './pages/PlaceToStay';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
