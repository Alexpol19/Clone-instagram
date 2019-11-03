// main component
import React from 'react';
import {BrowserRouter} from "react-router-dom";
// components
import Header from './pages/Header'
import UserContainer from './pages/user/UserContainer';
import GalleryContainer from './pages/gallery/GalleryContainer';
// styles
import "antd/dist/antd.css";
import './index.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Container fluid="true" className="" >
          <Header />
          <Row >
           <UserContainer /> 
          </Row>
          <Row >
           <GalleryContainer />
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
