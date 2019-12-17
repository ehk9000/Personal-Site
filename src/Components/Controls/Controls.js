import React  from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Splash  from '../Splash/Splash';
import About from '../About/About';


const Controls = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash}></Route>
        <NavLink to='/About'  activeClassName="active" component={About}></NavLink>
        <Route exact path='/Projects' component={Splash}></Route>
        <Route exact path='/Experience' component={Splash}></Route>
      </Switch>
    </div>

  );
}

export default Controls;