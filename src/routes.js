import React from 'react';
import Layout from './Components/HOC/Layout';
import {Switch, Route} from "react-router-dom";
import Home from './Components/home';
import SignIn from './Components/signin';

const Routes = (props) => {
  return (
    <div>
      <Layout >
        <Switch>
          <Route exact path = "/sign_in" component={SignIn} />
          <Route exact path = "/" component={Home} />
        </Switch>
    
        </Layout>
    </div>
  )
} 


export default Routes;
