import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { AboutUs } from './pages/AboutUs/AboutUs.jsx';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { Menu } from './pages/Menu/Menu.jsx';
import { Reservations } from './pages/Reservations/Reservations.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route
            path="/about-us"
            element={ <AboutUs /> }
          />
          <Route
            path="/contact-us"
            element={ <ContactUs /> }
          />
          <Route
            path="/menu"
            element={ <Menu /> }
          />
          <Route
            path="/reservations"
            element={ < Reservations /> }
          />
          <Route
            path="/"
            element={ <AboutUs /> }
          />

      </Routes>
    </div>
  )
}
export default App