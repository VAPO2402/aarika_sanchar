import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./styles/app.scss"
import Notfound from "./components/Notfound";
import Voicecallsms from "./components/Voicecallsms";
import Whatsappsms from "./components/Whatsappsms";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voiceCallSms" element={<Voicecallsms />} />
        <Route path="/whatsappSms" element={<Whatsappsms />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
