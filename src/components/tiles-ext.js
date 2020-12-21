import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class TilesExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Examination
                            </h3>
                            <p className="initialism">
                                A visit to the opticians not only helps identify potential problems with your 
                                eyesight before they develop but also provides a window to your overall health.
                                That's because eyes can give an early indication of common health problems, 
                                like high blood pressure and high cholesterol.
                            </p>
                            <p className="initialism">
                                Checking children's eyesight is particularly important as up to 80% of what 
                                they learn is through sight.* Checking their eyes can also help prevent 
                                conditions like a lazy eye developing.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Glasses
                            </h3>
                            <p className="initialism">
                                Did you know that more than half of adults think glasses won't suit them?* 
                                At Boots, we think you should wear whatever frames make you feel the most 
                                fabulous, but there are a few tips and tricks for selecting glasses frames 
                                that flatter your features. For the five most common face shapes, there are 
                                certain frames that may suit you better than others, helping you to feel 
                                fantastic in your glasses.
                            </p>
                            <p className="initialism">
                                To determine your face shape, compare a recent photo or selfie of your face 
                                with those below, making sure you are looking straight into the camera. The 
                                idea is to use frames that are complementary to your face shape to balance 
                                and highlight your best features. Remember, it's only a guide and you should 
                                wear whichever frames you fall in love with.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-2.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-3.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Contact Lenses
                            </h3>
                            <p className="initialism">
                                From classic aviators to cat eyes, we all love a fashionable frame. But did 
                                you know that almost all eyesight prescriptions can be corrected with contact 
                                lenses? Why not give contacts a go and start enjoying a more active and 
                                flexible lifestyle, without your trusty frames.
                            </p>
                            <p className="initialism">
                                A whopping 98 percent of glasses wearers could try contact lenses, so whether 
                                you’re long-sighted, short-sighted, wear varifocal lenses or have an astigmatism, 
                                chances are there’s a lens that’s right for you or your child.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TilesExt;