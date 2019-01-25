import React from 'react';
import Layout from './Components/HOC/Layout';
import {Switch, Route} from "react-router-dom";
import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import PublicRoute from "./Components/authRoutes/publicRoutes"
import PrivateRoute from './Components/authRoutes/privateRoutes';

const Routes = (props) => {
  return (
    <div>
      <Layout >
        <Switch>
          <PrivateRoute {...props} exact path="/dashboard" component ={Dashboard} />
          
          <PublicRoute {...props} restricted={true} exact path="/" component ={Home} />
          <PublicRoute {...props} restricted={false} exact path="/sign_in" component ={SignIn} />
          
          
          
        </Switch>
    
        </Layout>
    </div>
  )
} 


export default Routes;
