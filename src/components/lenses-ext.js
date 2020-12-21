import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class LensesExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/lenses/lenses-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                About contact lenses
                            </h3>
                            <p className="initialism">
                                Don’t let common misconceptions about contact lenses put you off trying them. 
                                Our contact lenses cheat sheet helps you bust the myths and get to grips with 
                                the facts, once and for all.
                            </p>
                            <p className="initialism">
                                Heard from a friend that you can’t wear contact lenses past the age of 40? 
                                They’re having you on. If you’ve started noticing changes to your eyesight 
                                and are struggling to focus up close, give our multifocal contact lenses a 
                                try.
                            </p>
                            <p className="initialism">
                                If you’re worrying about contact lens discomfort, don’t. Most contact lenses 
                                are made from materials that are extremely soft and flexible. With the correct 
                                lens choice, many people can’t even feel them once they’re in. And they’re really 
                                not that hard to put in, once you get the hang of it. 
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                How to wear
                            </h3>
                            <p className="initialism">
                                Tempted to give contact lenses a whirl? Why not try our free contact lens 
                                trial and discover the joys of frame-free life?* 
                            </p>
                            <p className="initialism">
                                If you have a prescription dated within the last 12 months, use our store 
                                locator to find your nearest Boots Opticians who can book you in for your 
                                free contact lens trial. You can also book one of these online.
                            </p>
                            <p className="initialism">
                                If you haven’t had an eye test in the last year, we’ll need to check your 
                                eyes before your contact lens trial. Book your eye test and free contact 
                                lens trial today online or by calling 0345 125 37
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/lenses/lenses-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default LensesExt;