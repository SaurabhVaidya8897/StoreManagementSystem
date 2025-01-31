import React from 'react'
import './Carousel_Cleaning.js';
import './Carousel.css';
import ServiceCarousel from './Carousel_Cleaning.js';
import ServiceCarousel1 from './Carousel_Plumber.js';
<link rel="stylesheet" href="container.css"></link>

function Home() {
  return (



    <div className="Container">
      <div className="col-12 box" >


        <section id="home" className="hero">
          <h2>Welcome to Home Care Connect</h2>
          <p>Your ultimate solution for seamless household service management.</p>
          <div >
            <img src='https://t3.ftcdn.net/jpg/07/93/69/46/240_F_793694609_mXNSzTswyGXIGbV07vggV77X3O54Xt0X.jpg' class='imag-fluid' />
          </div>
        </section>




        {/* Carousel */}
        <div class="home-page">
          <h2>Our Services</h2>
          <h3 class='Service'>Cleaning Services</h3>
          <ServiceCarousel />
        </div>
        <br></br>
        <br></br>
        <div class="home-page1">
          <h3 class='Service1'>Plumber Services</h3>
          <ServiceCarousel1 />
        </div>
        <br>
        </br>
      </div>
      <br></br>
    </div>


  );
}
export default Home;
