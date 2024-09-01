import React from 'react';
import "./home.scss";
import SVGBackground from './svgBackground/SVGBackground';
import HomeTitle from './homeTitle/HomeTitle';


function Home() {
  return (
    <main style={{color:"blue"}}>
   <section className='homeSection'>
   <SVGBackground />
</section>
   </main>
  );
}

export default Home;