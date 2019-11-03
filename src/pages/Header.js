//header component
import React from 'react';
import {NavLink} from 'react-router-dom';
// styles
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon, Input } from "antd";

const { Search } = Input;
class Header extends React.Component {
  render() {
    return (
      <Row  className="header bg-white ">
            <Container fluid="true" className="header_width  ">
               <Row className="header_block align-items-center">
                  <Col className="row justify-content-center align-items-center logo_web icons">
                     <NavLink to='/' className="color-black">
                        <Icon type="instagram" />
                        <span className="px-2 line">|</span>
                        <span >
                           Instargam
                        </span>
                     </NavLink>
                  </Col>
                  <Col className="row justify-content-center mr-0">
                     <Search
                        placeholder="Search"
                        onSearch={value => console.log(value)}
                        className="search "
                     />
                  </Col>
                  <Col className="d-none d-sm-flex row justify-content-center icons" >
                     <NavLink to='/'><Icon type="compass" /></NavLink>
                     <NavLink to='/' className="mx-4"><Icon type="heart"  /></NavLink>
                     <NavLink to='/'><Icon type="user" /></NavLink>
                  </Col>
               </Row>
            </Container>
         </Row>
    ); 
  }
}
export default Header