import React, {Component} from 'react';

import CategoriesLists from '../../Containers/CategoriesLists/CategoriesLists';
import Layout from '../Layout/Layout';
import Home from '../../Containers/Home/Home';
import PageNotFound from '../../Containers/404 page/404page';
import Signup from '../../Components/Signup/Signup';
import AuthLogIn from '../../Containers/AuthLogIn/AuthLogIn';
import Logout from '../../Containers/AuthLogIn/Logout/Logout';

import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';



class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
       <Layout>
          <Switch>
            <Route path="/catalog" component={CategoriesLists}/>
            <Route path="/signin" component={AuthLogIn}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={Home}/>
            <Route component={PageNotFound}/>
          </Switch>
       </Layout>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
