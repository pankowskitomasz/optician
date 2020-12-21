import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Our Experience
                            </h3>
                            <p className="lead">
                                For more than thirty years of operation we earned trust of thousands customers.
                                Our company is famous for our individual aproach to each customer, and long term
                                support and care services. Our offer contains unique option for realization of 
                                all examinations on place, at each of our offices.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Individual Approach
                            </h3>
                            <p className="lead">
                                Our opticians and optometrists always carefully listen our customers and make 
                                all examinations with use of advanced medical equipment. The comfort of wearing
                                glasses is also very important for us, that is why each time for each customer
                                we repeat all examination if needed, in order to allow our customer find the
                                best product.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutExt;