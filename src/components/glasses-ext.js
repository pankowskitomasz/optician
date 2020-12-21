import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class GlassesExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/glasses/glasses-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Oval face
                            </h3>
                            <p className="initialism">
                                The most common shape, an oval face is typically defined as one and a half 
                                times longer than its width with a chin slightly narrower than the forehead. 
                                Because the features on an oval face shape are considered rather balanced, 
                                most styles will suit you. Try a selection of different shapes to find your 
                                favourite but try not to go too large or too small – we recommend going for 
                                styles that are a little wider than the widest part of your face.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Round face
                            </h3>
                            <p className="initialism">
                                A round face is characterised by wider cheekbones, a round chin and a curved 
                                hairline. Add balance and definition to your softer features by trying more 
                                angular frames. Square or rectangular frames tend to suit round faces, making 
                                them appear longer. Choose frames that enhance your unique style - rimless or 
                                delicate arm details are great for work or go for a bold colour to make a 
                                statement.  
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/glasses/glasses-ext-2.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-light">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/glasses/glasses-ext-3.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Square face
                            </h3>
                            <p className="initialism">
                                A square face shape is typically angular with a square jaw line and a wider 
                                forehead in proportion to the length of the face. Round or oval frames suit 
                                square faces, creating balance by softening sharp angles. The interesting 
                                shape of round glasses add a cool, vintage feel to your look while oval 
                                frames are classic and elegant – go as bold as you like.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default GlassesExt;