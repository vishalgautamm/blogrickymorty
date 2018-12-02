import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import Container from './components/Container'
// Pages
import Home from './pages/Home'
import Characters from './pages/Characters'
import Detail from './pages/Detail'

const Routes = () => (
  <Container>
    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/characters' exact component={Characters} />
      <Route path='/detail/:id' exact component={Detail} />
      <Redirect to='/home' />
    </Switch>
  </Container>
)

export default Routes
