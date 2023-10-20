import { Col } from "react-bootstrap";

export const ProjectCarousel = ({ title, imgUrl}) => {
    return (
        <Col sm={12} md={6}  >
            <a href="#" target="_blank" id="link-card-project">
                <img src={imgUrl} alt="inserte imagen" />
                <h5>{title}</h5>
            </a>
        </Col>
    )
}
