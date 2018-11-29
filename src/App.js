import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Container from './components/Container';
// Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import Detail from './pages/Detail';


class App extends Component {

  render() {
    return (
      <BrowserRouter>        
        <React.Fragment>
           <Navbar/>
           <Container >
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/characters" exact component={Characters} />
                <Route path="/detail/:id" exact component={Detail} /> 
                <Redirect to="/home" />
              </Switch>
            </Container>
        </React.Fragment>        
      </BrowserRouter>
    );
  }
}
export default App;
