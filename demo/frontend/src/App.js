import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Router } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { AdminRoute, UserRoute, AuthRoute } from './RouteComponents';
import { ConnectedRouter } from 'connected-react-router';
import { getHistory } from './index';

import 'styles/theme.scss';

import ErrorPage from 'pages/error';
import LayoutComponent from 'components/Layout';
import DocumentationLayoutComponent from 'documentation/DocumentationLayout';
import Login from 'pages/auth/login';
import Verify from 'pages/auth/verify';
import Register from 'pages/auth/register';
import Reset from 'pages/auth/reset';
import Forgot from 'pages/auth/forgot';

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

const App = () => {

  const currentUser = useSelector((store) => store.auth.currentUser);
  const loadingInit = useSelector((store) => store.auth.loadingInit);

  const dispatch = useDispatch();

  if (loadingInit) {
    return <div />;
  }

  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton/>}
      />
      <ConnectedRouter history={getHistory()}>
        <Router history={getHistory()}>
          <Switch>
            <Route
              path="/documentation"
              exact
              render={() => <Redirect to="/documentation/getting-started/overview"/>}
            />
            <Route path="/documentation" component={DocumentationLayoutComponent}/>
            <Route path="/" exact render={() => <Redirect to="/app"/>}/>
            <Route path="/app" exact render={() => <Redirect to="/app/dashboard"/>}/>
            <UserRoute path="/app" dispatch={dispatch} component={LayoutComponent}/>
            <AdminRoute
              path="/admin"
              currentUser={currentUser}
              dispatch={dispatch}
              component={LayoutComponent}
            />
            <AuthRoute path="/register" exact component={Register}/>
            <AuthRoute path="/login" exact component={Login}/>
            <AuthRoute path="/verify-email" exact component={Verify}/>
            <AuthRoute path="/password-reset" exact component={Reset}/>
            <AuthRoute path="/forgot" exact component={Forgot}/>
            <Route path="/error" exact component={ErrorPage}/>
            <Redirect from="*" to="/app/dashboard"/>
          </Switch>
        </Router>
      </ConnectedRouter>
      </div>
  );
}

export default App;
