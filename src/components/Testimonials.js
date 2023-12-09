import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const TestimonialsSection = () => {
  const settings = {
    dots: true, // Muestra puntos de navegación en la parte inferior del carrusel
    infinite: true, // Permite que el carrusel se desplace infinitamente
    speed: 500, // Velocidad de la transición entre slides
    slidesToShow: 1, // Muestra un slide a la vez
    slidesToScroll: 1, // Desplaza un slide a la vez
    vertical: false, // Desplazamiento horizontal
    swipeToSlide: true, // Permite desplazar los slides con un gesto táctil
    variableWidth: false // Ancho fijo para cada slide
  };


  const testimonials = [
    // Tu array de testimoniales aquí


    {
      "name": "Cristobal Niño",
      "title": "Founder at Servismedicamp",
      "quote": "Softdone played a crucial role in revolutionizing our online presence through the development of our application. Their keen ability to embody our brand's essence into the app's design has been vital for our success. Their meticulous attention to detail and technological innovation has given us a substantial competitive edge.",
      "image": "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1576497771/content-items/003/518/364/FernandoKrapp-85-2-original.jpg?1576497771"
    },

    {
      "name": "Alexa Duarte",
      "title": "Chief Technology Officer at Innovatech",
      "quote": "The partnership with Softdone has significantly elevated our technological capabilities. Their innovative solutions meshed perfectly with our existing systems, boosting both our operational efficiency and the overall user experience.",
      "image": "https://agencia-fotografia.com/wp-content/uploads/2014/06/foto3.jpg"
    },

    {
      name: "Mboine Jowas",
      title: "CEO - Alowes Marketing Solutions",
      quote: "We're incredibly grateful for the digital marketing website, Softdone crafted for us. It has not only enhanced our online presence but also has been pivotal in engaging our audience and boosting our digital campaigns.",
      image: "https://yt3.googleusercontent.com/ytc/APkrFKYfbBK1S9cEd23I5TP7L6Bps1FtUv3GnpwQBlXsKNA=s176-c-k-c0x00ffffff-no-rj"
    },
  ];

  return (
    <div className="testimonials-section">
      <h2>Our Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <figure>
              <img src={testimonial.image} alt={testimonial.name} />
              <figcaption>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.title}</p>
              </figcaption>
            </figure>
            <blockquote>{testimonial.quote}</blockquote>
          </div>
        ))}
      </Slider>
      <div className="find-us-section">
        <h2>Also find us on</h2>
        <div className="platform-buttons">
          <button type="button" onClick={() => window.open("https://www.fiverr.com/softdone", "_blank")}>Fiverr</button>
          <button type="button" onClick={() => window.open("https://www.freelancer.com/u/softdone", "_blank")}>Freelancer</button>
          {/* <button type="button" onClick={() => window.open("https://www.upwork.com", "_blank")}>Upwork</button> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
