import React  from 'react';
import {Route, Switch } from 'react-router-dom';


const Controls = () => {
  <div>
    <Switch>
      <Route exact path="/" component={Splash}></Route>
    </Switch>

  </div>
}

export default Controls;