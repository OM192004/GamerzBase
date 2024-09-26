
import './App.css';
import './assests/styles/style.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
