
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import proj1 from '../assets/img/servis.png';
import proj2 from '../assets/img/tono.png';
import proj3 from '../assets/img/roomreserve.png';
import proj4 from '../assets/img/firedots.png';
import proj5 from '../assets/img/elainapc.png';
import proj6 from '../assets/img/alowespc.png';
import proj7 from '../assets/img/nasapc.png';
import proj8 from '../assets/img/depsthink.png';
import proj9 from '../assets/img/saluddigna.png';
import proj10 from '../assets/img/Valofast.png';
// import { ProjectCarousel } from "./ProjectCarousel";

export const Projects = () => {

    const mobiles = [

        {
            title: "Motivación secu",
            imgUrl: proj2,
        },

        {
            title: "Room reserve",
            imgUrl: proj3,
        },

        {
            title: "Firedots",
            imgUrl: proj4,
        },

        {
            title: "Depsthink",
            imgUrl: proj8,
        },
        {
            title: "Healthy Hive",
            imgUrl: proj9,
        },
        {
            title: "Servismedicamp",
            imgUrl: proj1,
        },


    ];

    const webs = [

        {
            title: "Elaina",
            imgUrl: proj5,
        },

        {
            title: "Alowes Marketing Solutions",
            imgUrl: proj6,
        },

        {
            title: "Pocket U",
            imgUrl: proj7,
        },

        {
            title: "Valofast",
            imgUrl: proj10,
        },

    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },

        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },


        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
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
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">

                            <div className="container" id="project-bx-text">
                                <h2 style={{ color: '#fff' }}>
                                    Projects
                                </h2>
                                <p style={{ color: '#fff' }}>At Softdone, we developed:</p>
                            </div>

                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Mobile Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                <Carousel responsive={responsive} infinite={true} className="project-slider">
                                                    {
                                                        mobiles.map((project, index) => {
                                                            return (
                                                                <div className="item"
                                                                    key={index}>
                                                                    <img src={project.imgUrl} alt="anImage" />
                                                                    <h5>{project.title}</h5>
                                                                    {/* <ProjectCarousel {...project}></ProjectCarousel> */}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Carousel>
                                            }
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                webs.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}></ProjectCard>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
