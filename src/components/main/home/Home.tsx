import React from 'react';
import "./home.scss";
import SVGBackground from './svgBackground/SVGBackground';
import HomeTitle from './homeTitle/HomeTitle';
import HomeRegister from './homeRegister/HomeRegister';


function Home() {
  return (
    <main style={{color:"blue"}}>
   <section className='homeSection'>
   <SVGBackground />
   <div className='homeSection__container'>
   <HomeTitle />
   <HomeRegister />
   </div>
</section>
   </main>
  );
}

export default Home;