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
   componentWillUnmount(){
      this.props.setphoto(null)
      
   }
   // photo dates from redux
   getPhotoData=()=>{
      if(this.props.detailedPhoto && this.props.detailedPhoto.id != null){
         return <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.show}
            onHide={()=>{this.props.onHide(this.props.routeProps.history)}}
         >
            <Row className="justify-content-center">
               <Col md={8} xl={8} className="row col-11 justify-content-center my-3 my-md-0 ">
                  <img src={this.props.detailedPhoto.urls.regular} className="img-fluid" alt='' />
               </Col>
               <Col sm={6} md={3} xl={4} className="col-7 ml-3  pt-sm-2 aboutPhoto mb-2">
                  <h4 className="d-none d-md-block">About Photo:
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
            <Button type="link" onClick={()=>{
               this.props.onHide(this.props.routeProps.history);
               }} className="close"><Icon type="close" size="large" /></Button>
         </Modal>
         
      }
      else{
         // fetching one Photo by parameter photoid from Gallery component
         if(this.props.photoid !=''){
            axios.get(API+'/'+this.props.photoid+'?'+KEY).then(res=>{
               this.props.setphoto(res.data)
            }).catch(err=>{
               console.log(err)
            })
         }
         // return <div>loader</div>

      }
   }
  render() {
    return (
        <div>
           {this.getPhotoData()}
        </div>
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