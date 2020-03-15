import React from "react";
import {  Input,
          Form,
          Header,
          Button,
          Segment,
          Grid,
          Message,
          TextArea,
        } from "semantic-ui-react";
import { eduationURL } from "../urls/urls";
import { AxiosplusAuth } from '../urls/plusheaders'

class Education extends React.Component {
    state = {
        title: '',
        school: '',
        description: '',
        start_date: '',
        end_date: '',
        loading: '',
        error: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        AxiosplusAuth
              .post(eduationURL, {
                title: this.state.title,
                school: this.state.school,
                description: this.state.description,
                start_date: this.state.start_date,
                end_date: this.state.end_date})
              .then(res => this.setState({loading: false}))
              .catch(error => this.setState({error: error, loading: false}))
    };

    render() {
        const { title, school, description, start_date, end_date, error , loading} = this.state;
        return (
            <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as='h2' color='blue' >
                        Add Education
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
                                value={title}
                                name='title'
                                onChange={this.handleChange}
                                control={Input}
                                placeholder='Title'
                            />
                            <Form.Field
                                value={school}
                                name='school'
                                onChange={this.handleChange}
                                control={Input}
                                placeholder='School'
                            />
                        </Form.Group>
                        <Form.Group 
                        className="mt-4"
                        widths='equal'>
                            <Form.Input
                                value={start_date}
                                name='start_date'
                                onChange={this.handleChange}
                                type='date'
                                icon='calendar'
                                placeholder='Start date'
                            />
                            <Form.Input
                                value={end_date}
                                name='end_date'
                                onChange={this.handleChange}
                                type='date'
                                icon='calendar'
                                placeholder='End date'
                            />
                        </Form.Group>
                        <Form.Group 
                        className="mt-4"
                        widths='equal'>
                            <Form.Field
                                value={description}
                                name='description'
                                onChange={this.handleChange}
                                control={TextArea}
                                placeholder='Descrition'
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

export default Education;