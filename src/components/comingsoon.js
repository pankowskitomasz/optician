import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Comingsoon extends Component{
    render(){
        return(        
            <Container fluid className="comingsoon-s1 d-flex align-items-center p-header">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={10} className="mx-auto text-shadow text-white">
                        <h1 className="display-4 font-weight-bold font-logo">
                            Starting soon
                        </h1>
                        <p className="lead">
                            Hi, we are not ready yet, however we are starting soon<br/>  
                            Please visit us again in a while.
                        </p>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Comingsoon;