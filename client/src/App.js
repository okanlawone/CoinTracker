import './App.css';
import  Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Login } from './pages/Login';
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { LoginContext } from './contexts/LoginContext';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Show from './pages/Show';
import Contact from './pages/Contact';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}> 
      <Router>
        <Navbar />
        <Toaster position='top-center' toastOptions={{duration:5000, fontSize: 20}}/>
        <Routes>
        <Route
          path="/"
          element={loggedIn ? <Home /> : <Navigate to="/login" />} // Show Stocks if loggedIn, else navigate to Login
        />
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />} // Show Login if not loggedIn, else navigate to Stocks
        />
        <Route path="/show/:symbol" element={<Show />} />
        <Route path="/contact" element={<Contact />} />

          {/* <Route path="/" element={<Stocks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stocks" element={<Stocks />} /> */}
        </Routes>
      </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
