import React from 'react';

import CategoriesLists from '../../Containers/CategoriesLists/CategoriesLists';
import Layout from '../Layout/Layout';
import Home from '../../Containers/Home/Home';
import PageNotFound from '../../Containers/404 page/404page';
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div>
     <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalog" exact component={CategoriesLists}/>
          <Route component={PageNotFound}/>
        </Switch>
     </Layout>
      
    </div>
  );
}

export default App;
