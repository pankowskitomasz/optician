import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfficesExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offices/offices-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="mb-3 font-logo">
                                Office 1
                            </h3>
                            <p className="initialism">
                                From your first office’s entryway design, to architecture elements like trend-setting 
                                optical and distinctive exterior architecture, we are going to help you stand 
                                out and feel most comfortable in out office. 
                            </p>
                            <ul className="list-unstyled">
                                <li>ul. Street 1</li>
                                <li>00-123 City</li>
                                <li>(00) 123 456 789 </li>
                                <li>Mon-Tue 11:00-19:00</li>
                                <li>SAT 11:00-16:00</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                    <div className="text-center">
                            <h3 className="mb-3 font-logo">
                                Office 2
                            </h3>
                            <p className="initialism">
                                Modern design of our second office enhancing your efficiency and showcasing 
                                products for our customers allow us to provide all services for large group
                                of customers at the same time.
                            </p>
                            <ul className="list-unstyled">
                                <li>ul. Street 2</li>
                                <li>00-123 City</li>
                                <li>(00) 123 456 789 </li>
                                <li>Mon-Tue 11:00-19:00</li>
                                <li>SAT 11:00-16:00</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offices/offices-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfficesExt;