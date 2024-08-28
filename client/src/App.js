import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import SignUp from "./pages/BookingForm";
import About from "./pages/About";
import './styles.css';  // General styles for the application

function App() {

  // // ----- Testing a GET request -----
  // // Just renders a test message in real-time 
  // const [testMessage, setTestMessage] = useState('');
  // // Renders anything from /test to home 
  // useEffect(() => {
  //   fetch("/test")
  //   .then(res => res.json())
  //   .then(data => {setTestMessage(data)})
  // })

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BookingForm" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
