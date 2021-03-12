import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class IndexSlider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-dark minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item className="bg-blue">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-multiply"
                                    src="img/index-slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo slide-title">
                                        We Care
                                    </h1>
                                    <p className="initialism">
                                        Our team consists of profesional and experienced opticians and optometrists.
                                        In our examinations we use only certified and high quality medical devices.
                                    </p>
                                    <Link to="/offer" className="btn btn-primary rounded-pill font-weight-bold">
                                        More
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-blue">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-multiply"
                                    src="img/index-slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo slide-title">
                                        Knowledge and experience
                                    </h1>
                                    <p className="initialism">
                                        Our team includes specialists from sales and intergration
                                        areas. See more information about us.
                                    </p>
                                    <Link to="/about" className="btn btn-primary rounded-pill font-weight-bold">
                                        More
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-blue">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover mix-multiply"
                                    src="img/index-slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo slide-title">
                                        Contact now
                                    </h1>
                                    <p className="initialism">
                                        Our employees are for your disposal and answer all your questions.
                                        Contact us online, by phone or personally. 
                                    </p>
                                    <Link to="/contact" className="btn btn-primary rounded-pill font-weight-bold">
                                        More
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default IndexSlider;