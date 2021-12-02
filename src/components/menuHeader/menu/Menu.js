import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const MENU = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'About us',
        to: '/about',
    },
    {
        title: 'Our services',
        dropdown: [
            {
                title: 'Lorem ipsum',
                to: '/ipsum1',
            },
            {
                title: 'Lorem ipsum',
                to: '/ipsum2',
            },
            {
                title: 'Lorem ipsum',
                to: '/ipsum3',
            },
            {
                title: 'Lorem ipsum',
                to: '/ipsum4',
            },
        ],
    },
    {
        title: 'Contact us',
        to: '/contact',
    }
]

const Menu = () => {
    return (
        <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {
                        MENU.map((item) => {
                                if (item.dropdown) {
                                    return (
                                        <NavDropdown title="Our services" id="basic-nav-dropdown">
                                            {item.dropdown.map((drop) => {return (
                                                <NavDropdown.Item href={drop.to}>{drop.title}</NavDropdown.Item>
                                            )})
                                            }
                                        </NavDropdown>
                                    );
                                } return (
                                <Nav.Link href={item.to}>{item.title}</Nav.Link>
                            )
                            }
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </div>
    );
};

export default Menu