import { Routes, Route } from "react-router-dom"
import PlaceToStay from './pages/PlaceToStay';
import Home from './pages/Home';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
