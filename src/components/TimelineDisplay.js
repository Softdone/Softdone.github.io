import { Col } from "react-bootstrap";

export const TimelineDisplay = ({ title, description, imgUrl, projectUrl }) => {
    return (
        <Col>
            <a href={projectUrl} target="_blank"  id="link-card-project">
                <div className="time-imgbx">
                    <img src={imgUrl} alt="inserte imagen" />
                    <div className="time-txtx">
                        <h4 >{title}</h4>
                        <span>{description}</span>
                    </div>

                </div>
            </a>
        </Col>
    )
}
