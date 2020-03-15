import React from "react";
import { Input, Form, Header, Button, Segment, Grid,
        Message } from "semantic-ui-react";

import { AxiosplusAuth } from '../urls/plusheaders'
import { skillsURL } from '../urls/urls'

class SkillsA extends React.Component {
    state = {
        name: '',
        value: '',
        loading: '',
        error: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, value } = this.state;
        console.log(name)
        AxiosplusAuth
              .post(skillsURL, {
                name: name,
                value: value})
              .then(res => this.setState({loading: false}))
              .catch(error => this.setState({error: error, loading: false}))
    };

    render() {
        const { name, value, error , loading} = this.state;
        return (
            <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as='h2' color='blue' >
                        Add skills
                    </Header>
                    <Segment color='blue'>
                    {error && (
                      <Message
                      error
                      header='There is error'
                      content={JSON.stringify(error)} />
                    )}
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group 
                        className="mt-4"
                        widths='equal'>
                            <Form.Field
                                value={name}
                                name='name'
                                onChange={this.handleChange}
                                control={Input}
                                placeholder='Name of the skill'
                            />
                            <Form.Field
                                value={value}
                                name='value'
                                onChange={this.handleChange}
                                control={Input}
                                placeholder='Value'
                            />
                        </Form.Group>
                        <Form.Field
                        color="blue"
                        control={Button}
                        content='Save'
                        loading={loading}
                        disabled={loading}
                        />
                    </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
          )
      }
    }

export default SkillsA;