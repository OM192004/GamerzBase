import './assests/styles/style.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
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
import Games from './pages/Games';
import AddEvent from './components/Admin/addEvent';

function App() {
  return (
    <div className="App">
    <Router>
       <Navbar/> 
      <Main/>
      <Games/>
      <Routes>
        {/* Authentication routes */}
        <Route path="/login" element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        {/* Event routes */}
        <Route path='/Event' element={<Events />} />
        <Route path='/EventList' element={<EventList/>} />
        <Route path='/EventCard' element={<EventCard/>} />
        <Route path='/EventDetails' element={<EventDetails/>} />
        <Route path='/NewsPage' element={<NewsPage/>}/>
        <Route path='/addEvent' element={<AddEvent/>}/>
      </Routes>
      <div className='bg-white h-10'></div>
      <Footer />
      <ToastContainer /> 
    </Router>
      
    </div>
  );
}

export default App;
