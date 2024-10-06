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
import NewsPage from './pages/NewsPage';
import Main from './pages/Main'
import Home from './pages/Home';
import Games from './pages/Games';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
    <Router>
      <Main/>
      <Routes>
        {/* Authentication routes */}
        <Route path="/login" element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Home' element={<Home/>}/>
        {/* Event routes */}
        <Route path='/Event' element={<Events />} />
        <Route path='/EventList' element={<EventList/>} />
        <Route path='/EventCard' element={<EventCard/>} />
        <Route path='/EventDetails' element={<EventDetails/>} />
        <Route path='/NewsPage' element={<NewsPage/>}/>
        <Route path='/Games' element={<Games/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      <ToastContainer /> 
    </Router>
      
    </div>
  );
}

export default App;
