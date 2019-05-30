import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from '../home'
import ProductDetail  from '../product-detail'
import Header from '../layout/header'
import Container from '../layout/container'
import Login from '../auth/login';


const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/product-detail" component={ProductDetail} />
        <Route path="/login" component={Login} />
      </Container>
    </Router>
  );
}

export default App;
