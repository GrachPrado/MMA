import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../main/home/Home';
import Price from '../main/price/Prices';
import Schedule from '../main/schedule/Schedule';
import About from '../main/about/About';
import Grappling from '../main/martialArt/Grappling';
import Thaibox from '../main/martialArt/ThaiBox';
import MMA from '../main/martialArt/MMA';
import MMAKids from '../main/martialArt/MMAKids';
import Contacts from '../main/contact/Contacts';
import FAQ from '../main/faq/FAQ';
import NotFound from '../main/notFound/NotFound';

const HeaderRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price" element={<Price />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/about" element={<About />} />
      <Route path="/grappling" element={<Grappling />} />
      <Route path="/thaibox" element={<Thaibox />} />
      <Route path="/mma" element={<MMA />} />
      <Route path="/mmakids" element={<MMAKids />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default HeaderRoutes;
