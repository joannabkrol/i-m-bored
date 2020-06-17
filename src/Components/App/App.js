import React, {Component} from 'react';

import CategoriesLists from '../../Containers/CategoriesLists/CategoriesLists';
import Layout from '../Layout/Layout';
import Home from '../../Containers/Home/Home';
import PageNotFound from '../../Containers/404 page/404page';
import Signup from '../../Components/Signup/Signup';
import AuthLogIn from '../../Containers/AuthLogIn/AuthLogIn';
import Logout from '../../Containers/AuthLogIn/Logout/Logout';
import UserChallenges from '../../Containers/UserChallenges/UserChallenges';

import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';



class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
      let routes = (
        <Switch>
            <Route path="/catalog" exact component={CategoriesLists}/>
            <Route path="/signin" exact component={AuthLogIn}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/" exact component={Home}/>
            <Route component={PageNotFound}/>
          </Switch>
      )
      if (this.props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path="/catalog" exact component={CategoriesLists}/>
            <Route path="/signin" exact component={AuthLogIn}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/user" exact component={UserChallenges}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/" exact component={Home}/>
            <Route component={PageNotFound}/>
          </Switch>
        )
      }


    return (
      <div>
       <Layout>
          <Switch>
            {routes}
          </Switch>
       </Layout>
        
      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token != null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
