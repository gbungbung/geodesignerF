import React from "react";
import {Form, Input,
        Button, Grid,
        Header, Segment, Message
        } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authSignup } from "../../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, first_name, last_name, email, password1, password2 } = this.state;
    this.props.signup(username, first_name, last_name, email, password1, password2);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, first_name, last_name, email, password1, password2 } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Grid textAlign='center' style={{ marginTop: '2em'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="blue" >
              Sign Up for account
          </Header>
          <p>Welcome</p>
          <Segment color='blue'>
          <Form onSubmit={this.handleSubmit}>
              {error && <Message>{this.props.error.message}</Message>}
              <Form.Group 
              widths='equal'
              className="mt-4">
                  <Form.Field
                      id='form-input-control-first-name'
                      onChange={this.handleChange}
                      control={Input}
                      name='first_name'
                      value={first_name}
                      label='First name'
                      placeholder='First name'
                  />
                  <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      onChange={this.handleChange}
                      name='last_name'
                      value={last_name}
                      label='Last name'
                      placeholder='Last name'
                  />
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Field
                      id='form-input-control-last-name'
                      onChange={this.handleChange}
                      control={Input}
                      name='username'
                      icon="user"
                      iconPosition="left"
                      value={username}
                      label='username'
                      placeholder='Username'
                  />
                  <Form.Field
                      id='form-input-control-error-email'
                      onChange={this.handleChange}
                      control={Input}
                      name='email'
                      icon="mail"
                      iconPosition="left"
                      value={email}
                      label='Email'
                      placeholder='joe@schmoe.com'
                  />
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Input
                      icon="lock"
                      iconPosition="left"
                      onChange={this.handleChange}
                      type='password'
                      name='password1'
                      value={password1}
                      label='Password'
                      placeholder='password'
                  />
                  <Form.Input
                      icon="lock"
                      iconPosition="left"
                      onChange={this.handleChange}
                      label='Confirm assword'
                      value={password2}
                      name='password2'
                      type='password'
                      placeholder='Confirm password'
                  />
              </Form.Group>
              <Form.Field
                  id='form-button-control-public'
                  color="blue"
                  control={Button}
                  content='Confirm'
                  loading={loading}
                  disabled={loading}
              />
              <p className="text-center mt-4">
                  Already have account? <Link to="/login">Sign In</Link> now.
              </p>
          </Form>
          </Segment>
      </Grid.Column>
  </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (first_name, last_name, username, email, password1, password2) =>
      dispatch(authSignup(first_name, last_name, username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
