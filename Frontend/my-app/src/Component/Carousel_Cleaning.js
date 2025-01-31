import React from "react";
import Slider from "react-slick";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const services = [
  {
    title: "Sofa cleaning",
    //rating: "4.86 (153.2K)",
   // price: "₹699",
    imageUrl: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659096798036-9b40ee.png",
  },
  {
    title: "Intense cleaning ",
    //rating: "4.78 (1.6M)",
    //price: "₹519",
    imageUrl: "https://we4u.ind.in/blog/wp-content/uploads/2023/04/AC_Repair_Cost_279259535.jpg",
    discount: "10% OFF",
  },
  {
    title: " bathroom cleaning",
    //rating: "4.78 (1.6M)",
    //price: "₹519",
    imageUrl: "https://media.istockphoto.com/id/646261652/photo/tv-wall-bracket-installation.jpg?s=612x612&w=0&k=20&c=b2Imv2J-dMUzjU1GoygvPZC6ZnpUwVRPbUe9-CguInc=",
  },
  {
    title: "Top load checkup",
    //rating: "4.83 (113.2K)",
    //price: "₹519",
    imageUrl: "https://img3.exportersindia.com/product_images/bc-full/2023/4/11878897/refrigerator-repair-service-1681123353-6842662.jpeg",
  },
  {
    title: "Instant glowfacials",
    //rating: "4.82 (75.1K)",
    //price: "₹749",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/7/328411716/PH/JM/IV/147201157/microwave-oven-repairing-service.jpg",
  },
];


const ServiceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // We will use custom arrows
  };

let sliderRef = React.useRef(null);

const nextSlide = () => {
  sliderRef.slickNext();
};

const prevSlide = () => {
  sliderRef.slickPrev();
};

  return (
    <div id="carouselExample" className="carousel slide">
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <Link to={`/service/${service.id}`} className="service-link">
              <img src={service.imageUrl} alt={service.title} className="service-image" />
              <div className="service-info">
                <h3>{service.title}</h3>
                {/* <p>{service.rating}</p>
                <p>{service.price}</p>
                {service.discount && <span className="discount">{service.discount}</span>} */}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      
  );
};

export default ServiceCarousel;
