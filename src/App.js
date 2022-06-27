import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/appointment" element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;