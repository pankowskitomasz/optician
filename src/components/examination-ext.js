import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ExaminationExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Examination
                            </h3>
                            <p className="initialism">
                                An eye examination is a series of tests performed to assess vision and ability 
                                to focus on and discern objects. It also includes other tests and examinations 
                                pertaining to the eyes. Eye examinations are primarily performed by an 
                                optometrist, ophthalmologist, orthoptist, or an optician. Health care 
                                professionals often recommend that all people should have periodic and thorough 
                                eye examinations as part of routine primary care, especially since many eye 
                                diseases are asymptomatic.
                            </p>
                            <p className="initialism">
                                Eye examinations may detect potentially treatable blinding eye diseases, ocular 
                                manifestations of systemic disease, or signs of tumours or other anomalies of 
                                the brain.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/examination/examination-ext-1.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/examination/examination-ext-2.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Examination Types
                            </h3>
                            <p className="initialism">
                                A full eye examination consists of an external examination, followed by specific 
                                tests for visual acuity, pupil function, extraocular muscle motility, visual 
                                fields, intraocular pressure and ophthalmoscopy through a dilated pupil.
                            </p>
                            <p className="initialism">
                                A minimal eye examination consists of tests for visual acuity, pupil function, 
                                and extraocular muscle motility, as well as direct ophthalmoscopy through an 
                                undilated pupil.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ExaminationExt;