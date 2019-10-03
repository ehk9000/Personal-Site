import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import { Splash } from '../Splash/Splash';


const Controls = () => {
  <div>
    <Switch>
      <Route exact path="/" component={Splash}></Route>
      <Route exact path='/About' component={Splash}></Route>
      <Route exact path='/Projects' component={Splash}></Route>
      <Route exact path='/Experience' component={Splash}></Route>
    </Switch>
    
  </div>
}

export default Controls;