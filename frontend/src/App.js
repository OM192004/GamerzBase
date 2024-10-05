import './assests/styles/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function App() {
  return (
    <div className="App">
    <Router>
      {/* <Navbar/> */}
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
      </Routes>
      <div className='bg-white h-10'></div>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
