import './assests/styles/style.css';

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
import Profile from './pages/Profile'
import Home from './pages/Home';
import CreateTeam from './components/Request/CreateTeam';
import TeamCard from './components/Request/TeamCard';
import TeamsList from './components/Request/TeamList';


function App() {
  return (
    <div className="App">
    <Router> 
      <Main/>
      <Routes>
        {/* Authentication routes */}
        <Route path="/home" element={<Home/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        {/* Event routes */}
        <Route path='/Event' element={<Events />} />
        <Route path='/EventList' element={<EventList/>} />
        <Route path='/EventCard' element={<EventCard/>} />
        <Route path='/EventDetails' element={<EventDetails/>} />
        {/*Request routes*/}
        <Route path='/CreateTeam' element={<CreateTeam/>}/>
        <Route path='/TeamCard' element={<TeamCard/>} />
        <Route path='/TeamsList' element={<TeamsList/>} />
        
        {/*News routes*/}
        <Route path='/NewsPage' element={<NewsPage/>}/>

        {/*Admin routes*/}
        <Route path='/addEvent' element={<AddEvent/>}/>
      </Routes>
      <ToastContainer /> 
    </Router>
      
    </div>
  );
}

export default App;
