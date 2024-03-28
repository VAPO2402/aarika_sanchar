import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./styles/app.scss"
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/voiceCallSms" element={<Voicecallsms />} /> */}
        {/* <Route path="/whatsappCallSms" element={<Whatsappcallsms />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
