import React from 'react';

import CategoriesLists from '../../Containers/CategoriesLists/CategoriesLists';
import Layout from '../Layout/Layout';
import Home from '../../Containers/Home/Home';
import PageNotFound from '../../Containers/404 page/404page';
import Signup from '../../Components/Signup/Signup';
import AuthLogIn from '../../Containers/AuthLogIn/AuthLogIn';
import Logout from '../../Containers/AuthLogIn/Logout/Logout';

import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div>
     <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalog" exact component={CategoriesLists}/>
          <Route path="/signin" exact component={AuthLogIn}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/logout" exact component={Logout}/>
          <Route component={PageNotFound}/>
        </Switch>
     </Layout>
      
    </div>
  );
}

export default App;
