import React, {Component} from 'react';
import '../App.css';
import Button from "react-bootstrap/es/Button";
import Label from "react-bootstrap/es/Label";
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import MenuItem from "react-bootstrap/es/MenuItem";
import NavDropdown from "react-bootstrap/es/NavDropdown";

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Прокат-Wien</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Главная
                            </NavItem>
                            <NavDropdown eventKey={3} title="Компания" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Доп. услуги</MenuItem>
                                <MenuItem eventKey={3.2}>Наши преимущества</MenuItem>
                                <MenuItem eventKey={3.3}>Страхование</MenuItem>
                                <MenuItem eventKey={3.4}>Пересечение границ</MenuItem>
                                <MenuItem eventKey={3.5}>Оценка повреждений</MenuItem>

                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Інфо" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>О штрафах</MenuItem>
                                <MenuItem eventKey={3.2}>Отличия ПДД</MenuItem>
                                <MenuItem eventKey={3.3}>Особенности парковки</MenuItem>
                                <MenuItem eventKey={3.4}>О платных дорогах</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.5}>Контакты</MenuItem>

                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                РЕЗЕРВИРОВАНИЕ АВТО
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
                {/*<ButtonToolbar>*/}
                    {/*<Button Button bsStyle="primary">Главная</Button>*/}
                    {/*<Button Button bsStyle="primary">Доп. услуги</Button>*/}
                    {/*<Button Button bsStyle="primary">Наши преимущества</Button>*/}
                    {/*<Button Button bsStyle="primary">Страхование</Button>*/}
                    {/*<Button Button bsStyle="primary">Пересечение границ</Button>*/}
                    {/*<Button Button bsStyle="primary">Оценка повреждений</Button>*/}
                {/*</ButtonToolbar>*/}
                {/*<ButtonToolbar>*/}
                {/*<p>*/}
                    {/*<Button Button bsStyle="primary">О штрафах</Button>*/}
                    {/*<Button Button bsStyle="primary">Отличия ПДД</Button>*/}
                    {/*<Button Button bsStyle="primary">Особенности парковки</Button>*/}
                    {/*<Button Button bsStyle="primary">О платных дорогах</Button>*/}
                    {/*<Button Button bsStyle="primary">Контакты</Button>*/}
                    {/*<Button Button bsStyle="danger">РЕЗЕРВИРОВАНИЕ АВТО</Button>*/}
                {/*</p>*/}
                {/*</ButtonToolbar>*/}

            </div>
        );
    }
}

export default NavBar;
