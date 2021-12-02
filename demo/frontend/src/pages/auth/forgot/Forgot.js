
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Container } from 'reactstrap';
import Widget from '../../../components/Widget';
import { sendPasswordResetEmail } from '../../../actions/auth';

const Forgot = () => {

  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();
  const isFetching = useSelector((store) => store.auth.isFetching);
  const errorMessage = useSelector((store) => store.auth.errorMessage);

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const doSendResetEmail = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetEmail(email));
  };

    return (
      <div className="auth-page">
        <Container>
          <h5 className="auth-logo">
            <i className="la la-circle text-gray"/>
            demo3
            <i className="la la-circle text-warning"/>
          </h5>
          <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Forgot password?</h3>}>
            <p className="widget-auth-info">
              Please fill your email below
            </p>
            <form className="mt" onSubmit={doSendResetEmail}>
              { errorMessage && (
                  <Alert className="alert-sm" color="danger">
                    {errorMessage}
                  </Alert>
                )
              }
              <div className="form-group">
                <input className="form-control no-border" value={email}
                       onChange={changeEmail} type="email" required name="email"
                       placeholder="Email"/>
              </div>
              <Button type="submit" color="inverse" className="auth-btn mb-3"
                      size="sm">{isFetching ? 'Loading...' : 'Send'}</Button>
            </form>
            <p className="widget-auth-info">
              Need to Login?
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

export default Forgot;
