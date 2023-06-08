import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import HomePageHeader from "./HomePage";
import MainPageContent from "./MainPageContent";
import SecondPage from "./SecondPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay muted loop playsInline className="videoTag">
          <source src="/videos/nxt_wave_bg.mp4" type="video/mp4"></source>
        </video>
        <HomePageHeader />
        <MainPageContent />
      </header>
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;
