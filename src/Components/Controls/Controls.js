import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash  from '../Splash/Splash';
import About from '../About/About';


const Controls = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Portfolio' component={Splash}></Route>
      </Switch>
    </div>

  );
}

export default Controls;