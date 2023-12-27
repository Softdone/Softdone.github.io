import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo from '../assets/img/logo-name-sd-full.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4-blank.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={5}>
                        <img src={logo} alt='Logo' className="footer-logo" />
                    </Col>

                    <Col sm={3}>

                        <div className="footer-icons-box">
                            <div className="social-icon">
                                <a target="_blank" href="https://www.linkedin.com/company/softdone/"><img src={navIcon1} alt="linkedin-icon" /></a>
                                {/* <a target="_blank" href=""><img src={navIcon2} alt="face-icon" /></a> */}
                                {/* <a target="_blank" href=""><img src={navIcon4} alt="insta-icon" /></a>  */}
                                <a target="_blank" href="https://github.com/Softdone"><img src={navIcon3} alt="git-icon" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="footer-CR-box">
                        <p className="footer-text-sm">
                            Crafted with care by&nbsp;
                            <a
                                href="https://softdone.com.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Softdone
                            </a>
                            <span className="footer-year">&nbsp;&copy; {new Date().getFullYear()}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All rights reserved.
                        </p>
                    </Col>


                </Row>
            </Container>
        </footer>
    )
}
