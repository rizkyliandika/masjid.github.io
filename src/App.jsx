import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { PrayerTimes } from "./components/PrayerTimes";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

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
        <Header data={landingPageData.Services} />
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
        <Services data={landingPageData.Services} />
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
