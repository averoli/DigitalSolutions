import Button from "../button";
import {Container, Row, Col} from "react-bootstrap";
import s from './style.module.css';


const Header = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className={s.block_text_center}><h1 className={s.h1}>Lorem ipsum set <br/> ammet test-test
                </h1></Col>
            </Row>
            <Row className={s.row_second}>
                <Col lg={12} className={s.col_h2}><h2 className={s.h2}>LET US HELP YOU GET IT <br/> ALL BACK!</h2></Col>
            </Row>
            <Row className={s.row_third}>
                <Col lg={6} md={6} xs={12} className={s.block_text}><p className={s.text}>We currently take cases <br/>that
                    are $10,000
                    US and up</p></Col>
                <Col lg={6} md={6} xs={12} className={s.block_button}><Button type='primary'>Get a free
                    consultation</Button></Col>
            </Row>
        </Container>
    );
};

export default Header;