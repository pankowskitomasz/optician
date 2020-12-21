import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";
import {Link} from "react-router-dom";

class PrivacyPolicy extends Component{
    render(){
        return(        
            <Container fluid className="privacy-s1 d-flex align-items-center p-header">
                <Row className="mx-auto d-flex w-100">
                    <Col xs={10} md={6} className="mx-auto">
                        <Card className="p-4 privacy-container my-4">
                            <h1 className="h5 font-weight-bold text-secondary text-uppercase text-center">
                                Privacy policy
                            </h1>
                            <p className="pt-2">
                                This website is a demo version of real website, It doesn't collect and process, 
                                in long term meaning (longer than needed for website operation during visitor's 
                                presence), any user (visitor) data. All information collected during visitor's 
                                presence on this website is used only for technical purposes, required for correct 
                                operation of website or demonstration purposes related to technical mechanisms 
                                and presentation of its operation.
                            </p>
                            <p className="pt-2">
                                All data stored in cookies is directly related to saved visitor's settings 
                                for website's mechanisms, and can be managed by visitor with functionality 
                                provided by visitor's web browser - in order to get more information visitor 
                                should check web browser's manual.
                            </p>
                            <p  className="pt-2">
                                However this website may contain attached third-party addons (like for 
                                example: scripts added by hosting services provider) which may collect 
                                visitors data for security and technical purposes. In order to know more 
                                about them, visitor should visit hosting provider's website and check 
                                privacy policy related to collected data.
                            </p>
                            <p className="pt-2">
                                All materials used for creation of this website were acquired from legal 
                                resources. Any convergences and similarities with any materials presented 
                                on other websites or resources are accidental.
                            </p>
                            <div className="p-3 text-center">
                                <Link to={this.props.backLink.href} className="btn btn-lg btn-outline-dark d-inline">
                                    {this.props.backLink.name}
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default PrivacyPolicy;