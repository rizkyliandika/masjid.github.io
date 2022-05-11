import { useState, useEffect } from "react";
import { Navigation } from "./components/user-page/navigation";
import { Header } from "./components/user-page/header";
import { Features } from "./components/user-page/features";
import { About } from "./components/user-page/about";
import { Articles } from "./components/user-page/article";
import { Team } from "./components/user-page/team";
import { Contact } from "./components/user-page/contact";
import { PrayerTimes } from "./components/user-page/prayer_times";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Router } from './root';
import { Outlet } from 'react-router-dom';

export const scroll = new SmoothScroll('[data-easing="linear"]', {
  easing: "linear",
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <div id="#beranda">
        <Header data={landingPageData.Articles} />
      </div>
      {/* <div id="#prayertimes">
        <PrayerTimes />
      </div> */}
      <div id="#layanan">
        <Features data={landingPageData.Features} />
      </div>
      <div id="#tentang-kami">
        <About data={landingPageData.About} />
      </div>
      <div id="#artikel">
        <Articles data={landingPageData.Articles} />
      </div>
      <div id="#teams">
        <Team data={landingPageData.Team} />
      </div>
      <div id="#kontak">
        <Contact data={landingPageData.Contact} />
      </div>

    </div>
  );
};

export default App;
