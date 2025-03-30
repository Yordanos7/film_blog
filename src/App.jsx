import "./App.css";
import Home from "./pages/Home.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div className=" overflow-hidden break-words">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
