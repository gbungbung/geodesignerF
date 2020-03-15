import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Input, Form, Header, Button,
          Segment, Grid, Message,
          } from "semantic-ui-react";
import { resetpassURL } from "../urls/urls";

class Resetpassword extends React.Component {
  state = {
    email: "",
    error: '',
    loading: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    Axios.post(resetpassURL, {
      email: this.state.email
    })
    .then(res => this.setState({data: res}))
    .catch(error => this.setState({error: error}))
  };

  render() {
    const {loading } = this.props;
    const { email, error } = this.state;
    return (
      <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
              <Header as='h2' color='blue' >
                  Reset your account
              </Header>
              <Segment color='blue'>
              <Form onSubmit={this.handleSubmit}>
                  {error && <Message>{JSON.stringify(error)}</Message>}
                  <Form.Group 
                  className="mt-4"
                  widths='equal'>
                      <Form.Field
                          value={email}
                          name='email'
                          onChange={this.handleChange}
                          icon="mail"
                          iconPosition="left"
                          control={Input}
                          placeholder='email'
                      />
                        <Form.Field
                        color="blue"
                        control={Button}
                        content='Login'
                        size="large"
                        loading={loading}
                        disabled={loading}
                        />
                  </Form.Group>
              </Form>
              </Segment>
          </Grid.Column>
      </Grid>
    );
  }
}

const mapToStateProps = state => {
  return {
    loading: state.auth.loading
  }
}

export default connect(mapToStateProps)(Resetpassword);