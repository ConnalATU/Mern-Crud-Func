

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //import boostrap 
import './App.css';

import Container from 'react-bootstrap/Container'; //import bootstrap container
import Nav from 'react-bootstrap/Nav'; //import bootstrap nav
import Navbar from 'react-bootstrap/Navbar'; //import bootstrap Navbar
import { Display } from './components/Display';
import { Add } from './components/Add';
import { Update } from './components/Update';
import { Body } from './components/Body';

//import Routing to change component
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";





//creating functional component that will enable us to use JSX
function App() {
  //render method 

  //returns content component 
  return (
    <Router>{/*start router*/}
      <div className="App">
        {/*Bootstrap Nav Bar*/}
        <Navbar bg="black" variant="dark">
          <Container>
            {/*Adding image to bootstrap nav bar*/}
            <Navbar.Brand href="/">  <img src={require('./Images/BillBusters.png')}alt="BillBusters logo" />

            </Navbar.Brand>
            <Nav className="me-auto">
              {/*Adding Navbar links*/}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/display">Display</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>{/*Adding Router Paths*/}
          <Route path='/' element={<Body></Body>} exact></Route>
          <Route path='/display' element={<Display></Display>} exact></Route>
          <Route path='/add' element={<Add></Add>} exact></Route>
          <Route path='/Update/:id' element={<Update></Update>}></Route>
        </Routes>
      </div>
    </Router>
  );//end return

}//end class

export default App;

