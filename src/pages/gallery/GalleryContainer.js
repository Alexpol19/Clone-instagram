// gallery component
import React from 'react';
import * as axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
// styles
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon} from "antd";
// infinite scroll
import InfiniteScroll from 'react-infinite-scroller';
// modal
import ModalContainer from './ModalContainer';
// redux
import {connect} from 'react-redux';
import { setPhotos} from "../../reducers/actionCreators";
// api const
var API=require('../../config').API;
var KEY=require('../../config').ACCESS_KEY;
var PAGE=require('../../config').PAGE;
var PER_PAGE=require('../../config').PER_PAGE;

class Gallery extends React.Component {
   constructor(props){
      super(props); 
      this.state={
         page: PAGE,
         hasMoreItems: true,
         photoid: '',
         modalShow: false,
      }  
      this.fetchPhoto=this.fetchPhoto.bind(this);
      this.setModalShow=this.setModalShow.bind(this);
   }
   // fetch Photos
  fetchPhoto=()=>{
      axios.get(API+'?page='+(this.state.page+1)+'&per_page='+PER_PAGE+'&'+KEY).then(res=>{
         console.log(res.data);
             this.props.setPhotos(res.data);
             this.setState({
               page: this.state.page+1,
            })
      })
  }
  // for modal
  setModalShow=(history)=>{
      if(this.state.modalShow == true){
         this.setState({
            'modalShow':false,
         },()=>{
            history.push('/');
         });
      }else{
         this.setState({
            'modalShow':true,
         });
      } 
   }
  render() {
   //   for infinite scroll
   const loader = <div className="loader">Loading ...</div>;
   // list Photos in redux
   let listPhotos=this.props.photos.map((photo)=>{
   return <Col sm={4} className="mb-4 photo "><NavLink to={'/'+photo.id} className="img-hover"  
   onClick={()=>{
      this.setState({'photoid':photo.id});
      this.setModalShow()}}>
         <p>
            <span className="mr-5"><Icon type="heart" theme="filled"  /> {photo.likes}</span>
            <span><Icon type="message" theme="filled" /> 0</span>
         </p>
         <div  style={{backgroundImage: 'url('+photo.urls.regular+')'}} className=""/>
      </NavLink>
      </Col>
   })
    return (
      <Container fluid="true" className="gallery"  >
         <Row className="my-2 links ">
            <Col className="d-none d-sm-flex"></Col>
            <Col sm={4} md={3} lg={2} className="col row justify-content-center align-items-center">
               <NavLink to='/'>
                  <Icon type="table" /> Публикации
               </NavLink>
            </Col>
            <Col sm={4} md={3} lg={2} className="col row justify-content-center align-items-center mr-0">
               <NavLink to='/'><Icon type="user" />Отметки</NavLink> 
            </Col>
            <Col className="d-none d-sm-flex"></Col>
         </Row>
         <InfiniteScroll
                pageStart={PAGE}
                loadMore={this.fetchPhoto}
                hasMore={this.state.hasMoreItems}
                loader={loader}>
                  <Row>
                  {listPhotos}
                  </Row>
            </InfiniteScroll>
         {/* Modal */}
         <Route path={'/:photoid'} render={(routeProps)=>{ 
            return  <ModalContainer photoid={this.state.photoid} routeProps={routeProps} 
            show={this.state.modalShow}  onHide={this.setModalShow} />
          }} /> 
     </Container>
    ); 
  }
}
// get state from redux
let mapStateToProps=(state)=>{
   return {
      photos: state.gallery.photosData,
   }
}
// get actions from redux
let mapDispatchToProps=(dispatch)=>{
   return {
      setPhotos:(photos)=>{
         dispatch(setPhotos(photos));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps )(Gallery)