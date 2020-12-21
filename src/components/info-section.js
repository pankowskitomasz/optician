import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";

class InfoSection extends Component{
    render(){
        return(
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row>
                    
                </Row>
            </Container>
        );
    }
}

export default InfoSection;