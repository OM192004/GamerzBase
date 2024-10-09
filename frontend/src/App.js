import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Events from './pages/Events';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import NewsDetails from './components/NewsDetails';
import EventCard from './components/EventCard';
import News from './pages/News'
import NewsPage from './pages/NewsPage';
import Main from './pages/Main';
import Games from './pages/Games';
import AddEvent from './components/Admin/addEvent';
import Profile from './pages/Profile';
import Home from './pages/Home';
import TeamsList from './components/TeamRequests.jsx/TeamList';
import TeamCard from './components/TeamRequests.jsx/TeamCard';
import CreateTeam from './components/TeamRequests.jsx/CreateTeam';

function App() {
  return (
    <div className="App">
      <Router> 
        {/* <Navbar />  Navbar can be displayed on all routes */}
        <Routes>
          {/* Main route */}
          <Route path="/" element={<Main />} />
          {/* Other routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Event routes */}
          <Route path="/event" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/eventcard" element={<EventCard />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/newsdetails" element={<NewsDetails />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/teamlist" element={<TeamsList />} />
          <Route path="/teamcard" element={<TeamCard />} />
          <Route path="/createteam" element={<CreateTeam />} />
        </Routes>
        {/* <Footer />  Footer can be displayed on all routes */}
        <ToastContainer /> 
      </Router>
    </div>
  );
}

export default App;