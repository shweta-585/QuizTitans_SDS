import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/carousel.css'

function MyCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    l_mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
    xs_mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    }
  };
  return (
    <>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-cards" containerClass="carousel-container">
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBME1JxJQOMRHlFW-oQcAHaTaPqhk3hJaNA&s" alt="img"></img>
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2d858fad-05bc-4790-8577-90e88709e59e/8959c65f-dcea-44d3-97c0-66422528b026.png" alt="img"></img>
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
        <div>
          <h3>Quiz Name</h3>
          <img className="carousel-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdReC-5KGbHyGA5bYKtHBlKniT6Iz2xFh1UQ&s" alt="img" />
        </div>
      </Carousel>;
    </>
  )
}

export default MyCarousel