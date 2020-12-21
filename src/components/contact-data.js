import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"contact-data align-items-center p-0 bg-secondary d-flex minh-50vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/contact/contact-data.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0 d-flex align-items-center">
                        <div className="p-5 contact-bg text-center">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Contact us
                            </h1>
                            <p className="initialism">
                                Our employees are always ready to solve your problems.
                                Contact with us and check how we can help you. 
                            </p>
                            <ul className="list-unstyled">
                                <li className="font-logo">Office 1</li>
                                <li>ul. Street 1</li>
                                <li>00-123 City</li>
                                <li>(00) 123 456 789 </li>
                                <li>Mon-Tue 11:00-19:00</li>
                                <li>SAT 11:00-16:00</li>
                            </ul>
                            <ul className="list-unstyled">
                                <li className="font-logo">Office 2</li>
                                <li>ul. Street 2</li>
                                <li>00-123 City</li>
                                <li>(00) 123 456 789 </li>
                                <li>Mon-Tue 11:00-19:00</li>
                                <li>SAT 11:00-16:00</li>
                            </ul>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ContactData;