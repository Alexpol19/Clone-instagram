// user component
import React from 'react';
import {NavLink} from 'react-router-dom'
// redux
import {connect} from 'react-redux';
// styles
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon, Button } from "antd";
class User extends React.Component {
   constructor(props){
      super(props);
      // about items
      const about=this.props.user.about;
      this.listItems=about.map((item)=><li>{item}</li>)
   }
  render() {
    return (
      <Container fluid="true" >
         <Row className="info my-5">
            <Container fluid="true" className="info_width">
               <Row>
                  <Col sm={3}>
                     <img className="img-fluid img-thumbnail rounded-circle" alt='' src={this.props.user.logo} />
                  </Col>
                  <Col >
                  </Col>
                  <Col sm={8}>
                     <Row className="my-3">
                        <span className="shortname">{this.props.user.shortname}</span>
                        <Button type="primary" className="ml-3 infobutton">Подписаться</Button>
                        <Button type="primary" className="ml-2 infobutton infobutton2"><Icon type="caret-down" /></Button>
                        <Button type="link" className="ml-2 infobutton3"><Icon type="dash" /></Button>
                     </Row>
                     <Row className="info2">
                        <NavLink to='/'>
                           <span >
                              <span>{this.props.user.publications}</span> публикаций
                           </span>
                        </NavLink>
                        <NavLink to='/' className="mx-5">
                           <span >
                              <span>{this.props.user.subscribers}</span> подписчиков
                           </span>
                        </NavLink>
                        <NavLink to='/'>
                           <span>
                              Подписки: <span>{this.props.user.subscriptions}</span>
                           </span>
                        </NavLink>
                     </Row>
                     <Row className="mt-3 aboutblock">
                        <p className="name mb-0">{this.props.user.name}</p>
                        <ul className="about pl-3">
                        {this.listItems}
                        </ul>
                     </Row>
                  </Col>
               </Row>
               <Row className="mt-5 info3">
                  <Col  sm={3} md={2} className="row no-gutters justify-content-center">
                     <NavLink to='/'>
                        <div>
                        <img className="img-fluid img-thumbnail rounded-circle icons" alt='' src="https://scontent-frt3-1.cdninstagram.com/vp/d862df9a156b77d8f2302d955c13604d/5E4F3B38/t51.2885-15/s150x150/68728048_2455513447825027_4986615381244379122_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&bc=1571337657" />
                        </div>
                        <span>Party</span>
                     </NavLink>
                  </Col>
                  <Col  sm={3} md={2} className="row no-gutters justify-content-center mx-4">
                     <NavLink to='/'>
                        <div>
                        <img className="img-fluid img-thumbnail rounded-circle icons" alt='' src="https://scontent-frt3-1.cdninstagram.com/vp/026cb91ac667b5549aa11759a577e0df/5E547D31/t51.2885-15/s150x150/66658753_1389603464528254_7232152438906069023_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&bc=1571337657" />
                        </div>
                        <span>Inside EBS</span>
                     </NavLink>
                  </Col>
                  <Col  sm={3} md={2} className="row no-gutters justify-content-center mr-4">
                     <NavLink to='/'>
                        <div>
                        <img className="img-fluid img-thumbnail rounded-circle icons" alt='' src="https://scontent-frt3-1.cdninstagram.com/vp/741f1c1a8068da19d49371e2ebf2862e/5E434FF2/t51.2885-15/s150x150/67667450_731326857288502_7390810059043536007_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&bc=1571337657" />
                        </div>
                        <span>EBS People</span>
                     </NavLink>
                  </Col>
                  <Col  sm={3} md={2} className="row no-gutters justify-content-center">
                     <NavLink to='/'>
                        <div>
                           <img className="img-fluid img-thumbnail rounded-circle icons" alt='' src="https://scontent-frt3-1.cdninstagram.com/vp/b928c3bf301329547e3382bdfa564f2d/5E4751DD/t51.2885-15/s150x150/68895711_663904430757042_2719406545743151609_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&amp;bc=1571337657" />
                        </div>
                        <span>Events</span>
                     </NavLink>
                  </Col>
                  <Col></Col>
               </Row>
            </Container>
         </Row>
      </Container>
    ); 
  }
}
// get state from redux
let mapStateToProps=(state)=>{
   return {
      user: state.users.usersData[0],  
   }
}
export default connect(mapStateToProps)(User)