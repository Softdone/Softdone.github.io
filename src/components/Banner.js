import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/Softdone test.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Websites', 'Mobile apps', 'Web apps', 'E-commerce', 'Landing pages'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2.3);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <h2>{"We make "} </h2>
                        <h1>{"</> "}<span className="wrap">{text}</span></h1>
                        <p style={{ color: 'white', textAlign: 'center' }}>Let's turn your idea into a reality</p>

                        <a id="link-card-project" href="#connect" ><button onClick={() => console.log('Hi, you are connect')}>Contact us <ArrowRightCircle size={25} /></button></a>
                    </Col>
                    {/* <Col xs={12} md={12} xl={12}>
                        <img src={headerImg} alt="Header img"></img>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )

}
