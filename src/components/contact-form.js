import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";

class ContactForm extends Component{
    render(){
        return(        
            <Container fluid className={"contact-form align-items-center p-0 py-5 bg-light d-flex minh-50vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={6} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-left w-100 border border-light p-4 rounded bg-white shadow text-secondary">
                            <div className="border-bottom mb-4">
                                <p className="font-logo mb-1 text-center">
                                    Contact online
                                </p>
                            </div>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                 <Form.Control type="text" placeholder="Enter first name" className="rounded-pill"/>
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" className="rounded-pill"/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="rounded-pill"/>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Enter phone" className="rounded-pill"/>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                            <div class="w-100 text-center">
                                <Button variant="outline-dark" type="reset" className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button variant="outline-dark" type="submit" className="mx-1 rounded-pill">
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ContactForm;