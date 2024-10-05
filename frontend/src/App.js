import './assests/styles/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Events from './pages/Events'
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        {/* Authentication routes */}
        <Route path="/login" element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        {/* Event routes */}
        <Route path='/Event' element={<Events />} />
        <Route path='/EventList' element={<EventList/>} />
        <Route path='/EventCard' element={<EventCard/>} />
        <Route path='/EventDetails' element={<EventDetails/>} />
      </Routes>
      <div className='bg-white h-10'></div>
      <Footer />
      <ToastContainer /> 
    </Router>
      
    </div>
  );
}

export default App;
