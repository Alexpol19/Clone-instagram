// main component
import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';
// styles
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { Icon, Button } from "antd";
// redux
import {connect} from 'react-redux';
import { setDetailedPhoto} from "../../reducers/actionCreators";
// api const
var API=require('../../config').API;
var KEY=require('../../config').ACCESS_KEY;

class ModalWindow extends React.Component {
   constructor(props){
      super(props);
      this.state={
         photoid: ''
      }
      this.getPhotoData=this.getPhotoData.bind(this);
   }
   // fetching one Photo by parameter photoid from Gallery component
   componentDidMount(){
      if(this.props.photoid !=''){
         axios.get(API+'/'+this.props.photoid+'?'+KEY).then(res=>{
              this.props.setphoto(res.data)
           })
      }
   }
   // photo dates from redux
   getPhotoData=()=>{
      if(this.props.detailedPhoto.id != null){
         console.log(this.props.detailedPhoto)
         return <Row >
               <Col sm={7} md={7} xl={8} className="row col justify-content-center ">
                  <img src={this.props.detailedPhoto.urls.regular} className="img-fluid" alt='' />
               </Col>
               <Col sm={2} md={3} xl={4} className="ml-3 pt-2 aboutPhoto">
                  <h4>About Photo:
                  </h4>
                  <Row>
                  <span>Desciption:</span> {this.props.detailedPhoto.description || this.props.detailedPhoto.alt_description}
                  </Row>
                  <Row>
                  <span>Author:</span> <image src={this.props.detailedPhoto.user.profile_image.small} />{this.props.detailedPhoto.user.name}
                  </Row>
                  <Row>
                  <span>Link:</span> <a href={this.props.detailedPhoto.user.links.html}>honest</a>
                  </Row>
                  <Row>
                  This post has <span className="ml-1">{this.props.detailedPhoto.likes}</span> likes
                  </Row>
               </Col>
         </Row>
      }
   }
  render() {
    return (
         <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.show}
            onHide={()=>{this.props.onHide(this.props.routeProps.history)}}
         >
            {this.getPhotoData()}
         <Button type="link" onClick={()=>{
            this.props.onHide(this.props.routeProps.history);
            }} className="close"><Icon type="close" size="large" /></Button>
      </Modal>
    ); 
  }
}
// get state from redux
let mapStateToProps=(state)=>{
   return {
      detailedPhoto: state.gallery.detailedPhoto,
   }
}
// get actions from redux
let mapDispatchToProps=(dispatch)=>{
   return {
      setphoto:(photo)=>{
         dispatch(setDetailedPhoto(photo));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps )(ModalWindow)