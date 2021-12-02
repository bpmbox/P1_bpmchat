
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Label, FormGroup, Input } from 'reactstrap';
import Widget from '../../../components/Widget';
import { registerUser, authError } from '../../../actions/auth';
import { loginUser } from 'actions/auth';
import signupImg from "../../../images/signupImg.svg";
import s from './Register.module.scss';

import img1 from "../../../images/Vector-1.svg";
import img2 from "../../../images/Vector-2.svg";
import img3 from "../../../images/Vector-3.svg";
import img4 from "../../../images/Vector-4.svg";


const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isFetching = useSelector((store) => store.auth.isFetching);
  const errorMessage = useSelector((store) => store.auth.errorMessage);

  const dispatch = useDispatch();

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const checkPassword = () => {
    if (!isPasswordValid()) {
      if (!password) {
        dispatch(authError('Password field is empty'));
      } else {
        dispatch(authError('Passwords are not equal'));
      }
      setTimeout(() => {
        dispatch(authError());
      }, 3 * 1000);
    }
  };

  const isPasswordValid = () => {
    return password && password === confirmPassword;
  };

  const doRegister = (e) => {
    e.preventDefault();
    if (!isPasswordValid()) {
      checkPassword();
    } else {
      dispatch(
      registerUser({
        email,
        password,
      }),
    );
    }
  };

  const googleLogin = React.useCallback(() => {
    dispatch(loginUser({ social: 'google' }));
  }, []);

  const microsoftLogin = React.useCallback(() => {
    dispatch(loginUser({ social: 'microsoft' }));
  }, []);

    return (
        <div className="auth-page">
        <Widget
          className="widget-auth my-auto"
          title={
            <h3 className="mt-0 mb-2" style={{ fontSize: 40 }}>
              Sing up
            </h3>
          }
        >
          <p className="widget-auth-info">
            Welcome! Please create your account
          </p>
          <form className="mt" onSubmit={doRegister}>
            {errorMessage && (
              <Alert className="alert-sm" color="danger">
                {errorMessage}
              </Alert>
            )}
            <div className="form-group">
              <Label for="search-input1">Email</Label>
              <input
                className="form-control"
                defaultValue={""}
                onChange={changeEmail}
                required
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-2">
              <Label for="search-input1">Password</Label>
              <input
                className="form-control"
                defaultValue={""}
                onChange={changePassword}
                type="password"
                required
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
                <input className="form-control" value={confirmPassword}
                        onChange={changeConfirmPassword} onBlur={checkPassword} type="password" required name="confirmPassword"
                        placeholder="Confirm"/>
            </div>
            <FormGroup className="checkbox abc-checkbox mb-4 d-flex" check>
              <>
                <Input
                  id="checkbox1"
                  type="checkbox"
                  style={{ marginLeft: 3 }}
                />
                <Label for="checkbox1" check>
                  Remember me
                </Label>
              </>
            </FormGroup>
            <Button
              type="submit"
              color="warning"
              className="auth-btn mb-3"
              size="sm"
              onClick={(e) => doRegister(e)}
            >
              {isFetching ? "Loading..." : "Signup"}
            </Button>
            <p className="widget-auth-info text-center mb-0">Or</p>
            <div className={"d-flex mb-4 mt-3"}>
              <p className={"mb-0"}>Login with</p>
              <a href={"/"}>
                <img src={img1} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img2} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img3} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img4} alt="" className={"ml-3"} />
              </a>
            </div>
            <div className={"d-flex align-items-center"}>
              Have an account?{" "}
              <Link to="login" className={"ml-1"}>
                Login here
              </Link>
            </div>
            <footer className={s.footer}>{new Date().getFullYear()} © demo3</footer>
          </form>
        </Widget>
        <img
          src={signupImg}
          alt="signin"
          className={"backImg"}
        />
      </div>
    );
}

export default Register;

