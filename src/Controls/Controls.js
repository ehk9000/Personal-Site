import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import { Splash } from '../Splash/Splash';


const Controls = () => {
  <div>
    <Switch>
      <Route exact path="/" component={Splash}></Route>
    </Switch>
    
  </div>
}

export default Controls;