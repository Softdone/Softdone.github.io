import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import proj1 from '../assets/img/angel.png';
import proj2 from '../assets/img/tono.png';
import proj3 from '../assets/img/roomreserve.png';

export const Testimonials = () => {

  const testimonials = [
    {
      title: "Servismedicamp",
      subtitle: "Estamos orgullosos del desarrollo de nuestra app. Nuestro enfoque colaborativo y detallado garantizó una solución a medida que cumple con sus necesidades y supera expectativas.",
      imgUrl: proj1,
    },

    {
      title: "Motivacion secu",
      imgUrl: proj2,
    },

    {
      title: "Room reserve",
      imgUrl: proj3,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: 3
    },

    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },


    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    },

    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },

  };

  return (
    <section className="testimonial" id="testimonials">
      <Container>
        <Row>
          <Col>
            <div className="testimonial-bx">
              <div className="container" id="testimonial-bx-text">
                <h2 style={{ color: '#fff' }}>
                  Testimonials
                </h2>
                <p style={{ color: '#fff' }}>People that trust in our work</p>
              </div>

              <Carousel responsive={responsive} infinite={true} className="testimonial-slider">

                {
                  testimonials.map((testimonial, index) => {
                    return (

                      <div className="item"
                        key={index}>
                        <img src={testimonial.imgUrl} alt="anImage" />
                        <h5>{testimonial.title}</h5>
                        <p>{testimonial.subtitle}</p>
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}