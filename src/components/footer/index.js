import {Col, Container, Row} from "react-bootstrap";
import s from './style.module.css';
import Layout from "../layout";
import {ReactComponent as DMCA} from "../../assets/DMCA.svg";
import {ReactComponent as Express} from "../../assets/Express.svg"

const Footer = () => {
    return (
        <Container fluid className={s.root_footer}>
            <Row className={s.wrap_footer}>
                <Col xl={1}></Col>
                <Col xl={3} md={6} className={s.wrap_col}>
                    <Layout title={<Express/>}>
                        <p>All Rights Reserved to info.com</p>
                        <p>© DDD – Web Marketing</p>
                        <p>Privacy Policy</p>
                        <DMCA/>
                    </Layout>
                </Col>
                <Col xl={2} md={6} className={s.wrap_cols}>
                    <Layout title="CONTACT US">
                        <Container fluid style={{margin: 0, padding: 0}}>
                            <Row style={{paddingBottom: '18px'}}>
                                <Col xl={3} xs={1}><p>UK</p></Col>
                                <Col xl={9} xs={11}><p>+44-2020202020 <br/>+44-2020202020</p></Col>
                            </Row>
                            <Row style={{paddingBottom: '12px'}}>
                                <Col xl={3} xs={1}><p>AUT</p></Col>
                                <Col xl={9} xs={11}><p>+44-2020202020</p></Col>
                            </Row>
                            <Row>
                                <Col xl={3} xs={1}><p>AUS</p></Col>
                                <Col xl={9} xs={11}><p>+44-2020202020</p></Col>
                            </Row>
                        </Container>
                    </Layout>
                </Col>
                <Col xl={3} md={8} className={s.wrap_col}>
                    <Container fluid style={{margin: 0, padding: 0}}>
                        <Row>
                            <Col xl={12} md={5} xs={12}>
                                <Layout title="ADDRESS">
                                    <p>Lorem ipsum <br/>
                                        set amet</p>
                                </Layout>
                            </Col>
                            <Col xl={12} md={7} xs={12}>
                                <Layout title="OUR OFFICE HOURS">
                                    <p>Mon-Fr: 8:00-18:00 GMT <br/>
                                        Sat/Su: Closed</p>
                                </Layout>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xl={2} md={4}>
                    <Layout title="Email US">
                        <p>info@info.com</p>
                    </Layout>
                </Col>
                <Col xl={1}></Col>
            </Row>
        </Container>
    )
};

export default Footer;