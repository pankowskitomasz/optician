import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutShort extends Component{
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
            <Container fluid className={"about-short p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Who we are
                            </h3>
                            <p className="lead">
                                Optician is a company built for years. We care about our customers eyes for three
                                generations and the first steps on market we made in 1970's. Under current brand 
                                name our comany operates since 1992 and since that moment we have introduced on
                                market wide range of innovative products.
                            </p>
                            <div className="text-center">
                                {linking}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-short.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;