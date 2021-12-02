
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Container } from 'reactstrap';
import Widget from '../../../components/Widget';
import { authError, resetPassword } from '../../../actions/auth';
import { useLocation } from 'react-router';

const Reset = () => {

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isFetching = useSelector((store) => store.auth.isFetching);
  const errorMessage = useSelector((store) => store.auth.errorMessage);

  const dispatch = useDispatch();

  const location = useLocation();

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const checkPassword = () => {
    if (!isPasswordValid()) {
      if (password) {
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

  const doReset = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (!token) {
      authError('There are no token');
    }

    if (!isPasswordValid()) {
      checkPassword();
    } else {
      dispatch(resetPassword(token, password));
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <h5 className="auth-logo">
          <i className="la la-circle text-gray"/>
          demo3
          <i className="la la-circle text-warning"/>
        </h5>
        <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Reset password</h3>}>
          <p className="widget-auth-info">
            Please fill all fields below
          </p>
          <form className="mt" onSubmit={doReset}>
            {
              errorMessage && (
                <Alert className="alert-sm" color="danger">
                  {errorMessage}
                </Alert>
              )
            }
            <div className="form-group">
              <input className="form-control no-border" value={password}
                     onChange={changePassword} type="password" required name="password"
                     placeholder="Password"/>
            </div>
            <div className="form-group">
              <input className="form-control no-border" value={confirmPassword}
                     onChange={changeConfirmPassword} onBlur={checkPassword} type="password" required
                     name="confirmPassword"
                     placeholder="Confirm"/>
            </div>
            <Button type="submit" color="inverse" className="auth-btn mb-3"
                    size="sm">{isFetching ? 'Loading...' : 'Reset'}</Button>
          </form>
          <p className="widget-auth-info">
            or
          </p>
          <Link className="d-block text-center" to="login">Enter the account</Link>
        </Widget>
      </Container>
      <footer className="auth-footer">
        {new Date().getFullYear()} &copy; demo3.
      </footer>
    </div>
  );
}

export default Reset;

