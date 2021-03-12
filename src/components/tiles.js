import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Card from "../../node_modules/react-bootstrap/Card";

class Tiles extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-warning rounded-pill">
                See now
            </Link>;
        }
        return(        
            <Container fluid className={"tiles align-items-center px-0 py-5 bg-white minh-50vh d-flex "+this.props.classExt}>
                <div className="mx-auto px-5 w-100">
                    <Row className="mx-auto text-center w-100 py-3 text-center">
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/examination" className="text-decoration-none mb-3">
                                <Card className="shadow h-100 hover-blue min">
                                    <Card.Img variant="top" src="img/offer/tile-1.jpg" className="minh-25vh fit-cover"/>
                                    <Card.Footer className="font-logo px-2 text-blue">
                                        Examination
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/glasses" className="text-decoration-none mb-3">
                                <Card className="shadow h-100 hover-blue">
                                    <Card.Img variant="top" src="img/offer/tile-2.jpg" className="minh-25vh fit-cover"/>
                                    <Card.Footer className="font-logo px-2 text-blue">
                                        Glasses
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/lenses" className="text-decoration-none mb-3">
                                <Card className="shadow h-100 hover-blue">
                                    <Card.Img variant="top" src="img/offer/tile-3.jpg" className="minh-25vh fit-cover"/>
                                    <Card.Footer className="font-logo px-2 text-blue">
                                        Contact lenses                                        
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} className="mx-auto text-shadow text-white p-0">
                            {linking}
                        </Col>
                    </Row>
                </div>
            </Container>    
        );
    }
}

export default Tiles;