import React, {Component} from 'react';
import '../App.css';
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
                            <a href="/">Прокат-Wien</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="Home">
                                Главная
                            </NavItem>
                            <NavDropdown eventKey={3} title="Компания" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="AdditionalServices">Доп. услуги</MenuItem>
                                <MenuItem eventKey={3.2} href="OurAdvantages">Наши преимущества</MenuItem>
                                <MenuItem eventKey={3.3} href="Insurance">Страхование</MenuItem>
                                <MenuItem eventKey={3.4} href="BordersCrossing">Пересечение границ</MenuItem>
                                <MenuItem eventKey={3.5} href="DamageAssessment">Оценка повреждений</MenuItem>

                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Інфо" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="AboutFines">О штрафах</MenuItem>
                                <MenuItem eventKey={3.2} href="DifferencesTrafficCode">Отличия ПДД</MenuItem>
                                <MenuItem eventKey={3.3} href="ParkingFeatures">Особенности парковки</MenuItem>
                                <MenuItem eventKey={3.4} href="AboutTollRoads">О платных дорогах</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.5} href="Contacts">Контакты</MenuItem>

                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="CarReservation">
                                РЕЗЕРВИРОВАНИЕ АВТО
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
