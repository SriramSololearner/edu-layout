import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';
import LandingPage from './Pages/LandingPage';
import Teachers from './Pages/Teachers';
import ContactPage from './Pages/ContactPage';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <FootBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
