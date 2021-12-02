import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "../button";

import s from './style.module.css';

const InputStyle = {
    backgroundColor: '#EEF3FC',
    borderRadius: 'inherit',
    borderColor: '#EEF3FC'
}

const SectionForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <Container fluid className={s.root_form}>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <Container>
                                    <Row>
                                        <Col lg={12} className={s.row_form_first}>
                                            <h2 className={s.h2_form}><span className={s.blue}>Contact</span> Us</h2>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail" className="mb-3">
                                            <Form.Control type="email" placeholder="Enter email"/>
                                        </Form.Group>

                                        <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                                            <Form.Control type="password" placeholder="Last name" style={InputStyle}/>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} xs={12} md={6} controlId="formGridState" className="mb-3">
                                            <Form.Select defaultValue="Choose..." style={InputStyle}>
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} xs={12} md={6} controlId="formGridZip">
                                            <Form.Control type="email" placeholder="Enter email" style={InputStyle}/>
                                        </Form.Group>
                                    </Row>
                                    <FloatingLabel controlId="floatingTextarea" label="Tell Us What Happened"
                                                   className="mb-3">
                                        <Form.Control as="textarea" placeholder="Tell Us What Happened"
                                                      style={InputStyle}/>
                                    </FloatingLabel>
                                    <Row>
                                        <Col className={s.button_form}>
                                            <Button type='primary'>Send</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}

export default SectionForm;