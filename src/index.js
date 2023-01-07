import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutOverview from './pages/AboutOverview';
import OurTeam from './pages/OurTeam';
import OurTeamOverview from './pages/OurTeamOverview';
import Physiotherapists from './pages/Physiotherapists';
import PhysiotherapistsOverview from './pages/physiotherapistsOverview';
import Physiotherapist from './pages/Physiotherapist';
import RemedialMassageTherapist from './pages/RemedialMassageTherapist';
import Fees from './pages/Fees';
import Services from "./pages/Services";
import ServicesOverview from './pages/ServicesOverview';
import GeneralPhysiotherapy from './pages/GeneralPhysiotherapy';
import GeneralPhysiotherapyOverview from './pages/GeneralPhysiotherapyOverview';
import ChildrensPhysiotherapy from './pages/ChildrensPhysiotherapy';
import DVAPhysiotherapy from './pages/DVAPhysiotherapy';
import MotorVehicleClaims from './pages/MotorVehicleClaims';
import WorkcoverPhysiotherapy from './pages/WorkcoverPhysiotherapy';
import SportsPhysiotherapy from './pages/SportsPhysiotherapy';
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import BookOnline from './pages/BookOnline';
import NoPage from "./pages/NoPage";

export default function MainApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<AboutOverview />} />
            <Route path="our-team" element={<OurTeam />}>
              <Route index element={<OurTeamOverview />} />
              <Route path="physiotherapists" element={<Physiotherapists/>}>
                <Route index element={<PhysiotherapistsOverview />} />
                <Route path=":physiotherapistId" element={<Physiotherapist />}/>
              </Route>
              <Route path="remedial-massage-therapist" element={<RemedialMassageTherapist />}></Route>
            </Route>
          </Route>
          <Route path="services" element={<Services />}>
            <Route index element={<ServicesOverview />} />
            <Route path="general-physiotherapy" element={<GeneralPhysiotherapy />}>
              <Route index element={<GeneralPhysiotherapyOverview />} />
              <Route path="childrens-physiotherapy" element={<ChildrensPhysiotherapy />} />
              <Route path="DVA-physiotherapy" element={<DVAPhysiotherapy />} />
              <Route path="motor-vehicle-claims" element={<MotorVehicleClaims />} />
              <Route path="workcover-physiotherapy" element={<WorkcoverPhysiotherapy />} />
            </Route>
            <Route path="sports-physiotherapy" element={<SportsPhysiotherapy />}></Route>
          </Route>
          <Route path="fees" element={<Fees />} />
          <Route path="conditions" element={<Conditions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-online" element={<BookOnline />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);