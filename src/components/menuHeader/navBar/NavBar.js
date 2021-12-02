import {ReactComponent as ExpressLogo} from "../../../assets/ExpressLogo.svg";
import Button from "../../button";
import {
    Col,
    Container,
    Navbar,
    Row
}
    from "react-bootstrap";
import Menu from "../menu/Menu";
import s from './style.module.css';

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Row className={s.row} xs='auto'>
                    <Col><Navbar.Brand><ExpressLogo/></Navbar.Brand></Col>
                    <Col><Menu/></Col>
                    <Col><Button>Call us</Button></Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;