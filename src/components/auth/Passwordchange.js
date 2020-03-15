import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import Sideba from '../SettingBar'
import { changepassURL } from "../urls/urls";
import { AxiosplusAuth } from '../urls/plusheaders'

class PasswordChange extends Component {
  state = {
    old_password: "",
    new_password1: "",
    new_password2: "",
    data: [],
    error: '',
    loading: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { old_password, new_password1, new_password2 } = this.state;
    AxiosplusAuth.post(changepassURL, {
      old_password: old_password,
      new_password1: new_password1,
      new_password2: new_password2,
    })
    .then(res => this.setState({data: res}))
    .catch(error => this.setState({error: error}))
  };

  render() {
    const { old_password, new_password1, new_password2, data, error, loading } = this.state;
      return(
          <div className="container">
            <div className="row">
                <Sideba />
                <div className="col-lg-9 mt-5">
                  <Segment textAlign='center'>
                    <Header as='h1'>Change password</Header>
                    <Grid  verticalAlign='middle'>
                      <Grid.Column style={{ maxWidth: 800 }}>
                        <Form onSubmit={this.handleSubmit}>
                          {error && <Message content={JSON.stringify(error)} />}
                          <Form.Group 
                          className="mt-4"
                          widths='equal'>
                              <Form.Input
                              onChange={this.handleChange}
                              name='old_password' 
                              value={old_password}
                              label='Old password'
                              icon="lock"
                              iconPosition="left"
                              type='password'
                              placeholder='Old password'
                              />
                          </Form.Group>
                          <Form.Group 
                          className="mt-4"
                          widths='equal'>
                              <Form.Input
                              onChange={this.handleChange}
                              name='new_password1'
                              value={new_password1}
                              label='New password'
                              icon="lock"
                              iconPosition="left"
                              type='password'
                              placeholder='New password'
                              />
                              <Form.Input
                              onChange={this.handleChange}
                              name='new_password2'
                              value={new_password2}
                              label='Confirm new password'
                              icon="lock"
                              iconPosition="left"
                              type='password'
                              placeholder='Retype new password'
                              />
                          </Form.Group>
                          <Form.Field
                              color="blue"
                              control={Button}
                              content='Save password'
                              loading={loading}
                              disabled={loading}
                              />
                        </Form>
                      </Grid.Column>
                    </Grid>
                  </Segment>
              </div>
            </div>
          </div> 
      )
  }
}

export default PasswordChange;