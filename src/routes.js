import React from 'react';
import Layout from './Components/HOC/Layout';
import {Switch, Route} from "react-router-dom";
import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {
  return (
    <div>
      <Layout >
        <Switch>
          <Route exact path = "/sign_in" component={SignIn} />
          <Route exact path = "/" component={Home} />
          <Route exact path = "/dashboard" component={Dashboard} />
        </Switch>
    
        </Layout>
    </div>
  )
} 


export default Routes;
