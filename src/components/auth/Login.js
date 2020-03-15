import React from "react";
import { Input,
          Form,
          Header,
          Button,
          Segment,
          Grid,
          Message,
        } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authLogin } from "../../store/actions/auth";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error, loading, token } = this.props;
    const { username, password } = this.state;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
              <Header as='h2' color='blue' >
                  Login
              </Header>
              <p>Welcome again, sign in to make more of you.</p>
              <Segment color='blue'>
              <Form onSubmit={this.handleSubmit}>
                  {error && <Message>{this.props.error.message}</Message>}
                  <Form.Group 
                  className="mt-4"
                  widths='equal'>
                      <Form.Field
                          value={username}
                          name='username'
                          onChange={this.handleChange}
                          icon="user"
                          iconPosition="left"
                          control={Input}
                          placeholder='Username'
                      />
                  </Form.Group>
                  <Form.Group widths='equal'>
                      <Form.Input
                      onChange={this.handleChange}
                      value={password}
                      name='password'
                      icon="lock"
                      iconPosition="left"
                      type='password'
                      placeholder='password'
                      />
                  </Form.Group>
                  <Form.Field
                  color="blue"
                  control={Button}
                  content='Login'
                  loading={loading}
                  disabled={loading}
                  />
              </Form>
          <p className='mt-3'>
              Don't have account? <Link to="/signup">Sign up</Link> now. Forget password? <Link to="/password/reset">Reset</Link>
          </p>
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
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
