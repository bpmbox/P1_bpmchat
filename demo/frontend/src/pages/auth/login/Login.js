
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Label, Input, FormGroup } from 'reactstrap';
import Widget from '../../../components/Widget';
import { loginUser, receiveToken, doInit } from 'actions/auth';
import { useLocation } from 'react-router';
import jwt from "jsonwebtoken";
import s from './Login.module.scss';
import signinImg from "../../../images/signinImg.svg";
import { push } from 'connected-react-router';
import img1 from "../../../images/Vector-1.svg";
import img2 from "../../../images/Vector-2.svg";
import img3 from "../../../images/Vector-3.svg";
import img4 from "../../../images/Vector-4.svg";

const Login = () => {
  const [email, setEmail] = useState('admin@flatlogic.com');
  const [password, setPassword] = useState('password');

  const location = useLocation();
  const dispatch = useDispatch();
  const authStore = useSelector((store) => store.auth);

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const doLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const googleLogin = () => {
    dispatch(loginUser({ social: 'google' }));
  };

  const microsoftLogin = () => {
    dispatch(loginUser({ social: 'microsoft' }));
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      dispatch(receiveToken(token));
      dispatch(doInit());
    }
  }, []);

  const signUp = () => {
    dispatch(push('/register'));
  };

        return (
            <div className="auth-page">
            <Widget
              className="widget-auth my-auto"
              title={
                <h3 className="mt-0 mb-2" style={{ fontSize: 40 }}>
                  Login
                </h3>
              }
            >
              <p className="widget-auth-info">
                Welcome Back! Please login to your account
              </p>
              <form className="mt" onSubmit={doLogin}>
                {authStore.errorMessage && (
                  <Alert className="alert-sm" color="danger">
                    {authStore.errorMessage}
                  </Alert>
                )}
                <div className="form-group">
                  <Label for="search-input1">Username</Label>
                  <input
                    className="form-control"
                    defaultValue={"admin"}
                    onChange={changeEmail}
                    required
                    name="email"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group mb-2">
                  <Label for="search-input1">Password</Label>
                  <input
                    className="form-control"
                    defaultValue={"123123"}
                    onChange={changePassword}
                    type="password"
                    required
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <FormGroup className="checkbox abc-checkbox mb-4 d-flex" check>
                  <Input
                    id="checkbox1"
                    type="checkbox"
                  />
                  <Label for="checkbox1" check className={"mr-auto"}>
                    Remember me
                  </Label>
                  <Link to="/forgot">Forgot password?</Link>
                </FormGroup>
                <Button
                  type="submit"
                  color="warning"
                  className="auth-btn mb-3"
                  size="sm"
                >
                  {authStore.isFetching ? "Loading..." : "Login"}
                </Button>
                <p className="widget-auth-info text-center">Or</p>
                <div className={"d-flex mb-4 mt-3"}>
                  <p className={"mb-0"}>Login with</p>
                  <a href={"/"}>
                    <img src={img1} alt="facebook" className={"ml-3"} />
                  </a>
                  <a href={"/"}>
                    <img src={img2} alt="github" className={"ml-3"} />
                  </a>
                  <a href={"/"}>
                    <img src={img3} alt="linkedin" className={"ml-3"} />
                  </a>
                  <a href={"/"}>
                    <img src={img4} alt="google_plus" className={"ml-3"} />
                  </a>
                </div>
                <div className={"d-flex align-items-center"}>
                  Don't have an account?{" "}
                  <Link to="register" className={"ml-1"}>
                    Sign Up here
                  </Link>
                </div>
                <footer className={s.footer}>{new Date().getFullYear()} ©  demo3</footer>
              </form>
            </Widget>
            <img src={signinImg} alt="signin" className={"backImg"} />
          </div>
        );
}

Login.isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = jwt.decode(token);
  if (!data) return;
  return date < data.exp;
};

export default Login;
