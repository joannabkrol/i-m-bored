import React from 'react';

import CategoriesLists from '../../Containers/CategoriesLists/CategoriesLists';
import Layout from '../Layout/Layout';
import Home from '../../Containers/Home/Home';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalog" exact component={CategoriesLists}/>
        </Switch>
     </Layout>
      
    </div>
  );
}

export default App;
