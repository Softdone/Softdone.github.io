
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { TimelineDisplay } from "./TimelineDisplay";

import proj1 from '../assets/img/testgift.gif';
import proj2 from '../assets/img/testgift2.gif';
import proj3 from '../assets/img/testgift3.gif';
// import proj3 from '../assets/img/roomreserve.png';
// import proj4 from '../assets/img/firedots.png';
// import proj5 from '../assets/img/elainapc.png';
// import proj6 from '../assets/img/alowespc.png';
// import proj7 from '../assets/img/nasapc.png';
// import proj8 from '../assets/img/depsthink.png';
// import proj9 from '../assets/img/saluddigna.png';
// import { ProjectCarousel } from "./ProjectCarousel";

export const Timeline = () => {

    const Promo1 = [
        {
            title: "Servismedicamp",
            imgUrl: proj1,
        },
        {
            title: "Motivacion secu",
            imgUrl: proj2,
        },
    ];
    const Promo2 = [
        {
            title: "Servismedicamp",
            imgUrl: proj3,
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 1
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
        <section className="timeline" id="timelines">
            <Container>
                <Row>
                    <Col>
                        <div className="timeline-bx">
                            <Row>
                                {
                                    Promo1.map((timeline, index) => {
                                        return (
                                            <TimelineDisplay
                                                key={index}
                                                {...timeline}></TimelineDisplay>
                                        )
                                    })
                                }
                            </Row>
                            <Row>
                                {
                                    Promo2.map((timeline, index) => {
                                        return (
                                            <TimelineDisplay
                                                key={index}
                                                {...timeline}></TimelineDisplay>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
