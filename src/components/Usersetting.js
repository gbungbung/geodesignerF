import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from "semantic-ui-react";
import Sideba from './SettingBar'

class Usersettings extends Component {
    render() {
    const options = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', text: 'Antigua' },
    ]
    return (
            <div className="container">
                <div className="row">
                    <Sideba />
                    <div className="col-lg-9 mt-5">
                        <Segment textAlign='center'>
                            <Header as='h1'>Personal details</Header>
                            <p>Change your details</p>
                            <Grid verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 800 }}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group 
                                    className="mt-4"
                                    widths='equal'>
                                        <Form.Input
                                        name='first_name'
                                        label='First name'
                                        type='text'
                                        placeholder='First name'
                                        />
                                        <Form.Input
                                        name='last_name'
                                        label='Last name'
                                        type='text'
                                        placeholder='Last name'
                                        />
                                    </Form.Group>
                                    <Form.Group 
                                    className="mt-4"
                                    widths='equal'>
                                        <Form.Input
                                        name='Profile_pic'
                                        label='Picture'
                                        type='text'
                                        placeholder='Profile picture'
                                        />
                                        <Form.Input
                                        name='username'
                                        label='Username'
                                        type='text'
                                        placeholder='Username'
                                        />
                                    </Form.Group>
                                    <Form.Group 
                                    className="mt-4"
                                    widths='equal'>
                                        <Form.Input
                                        name='Company'
                                        label='Company'
                                        type='text'
                                        placeholder='Company'
                                        />
                                        <Form.Input
                                        name='Zip'
                                        label='Zip'
                                        type='text'
                                        placeholder='Zip'
                                        />
                                        <Form.Input
                                        name='State'
                                        label='State'
                                        type='text'
                                        placeholder='State'
                                        />
                                        <Form.Select
                                        name='Country'
                                        label='Country'
                                        type='text'
                                        placeholder='Country'
                                        options={options}
                                        />
                                    </Form.Group>
                                    <Form.Group 
                                    className="mt-4"
                                    widths='equal'>
                                        <Form.Input
                                        name='Telephone'
                                        label='Telephone'
                                        icon="phone"
                                        iconPosition="left"
                                        type='text'
                                        placeholder='Telephone'
                                        />
                                        <Form.Input
                                        name='email'
                                        label='Email'
                                        icon="mail"
                                        iconPosition="left"
                                        type='text'
                                        placeholder='email'
                                        />
                                    </Form.Group>
                                    <Form.Field
                                    color="blue"
                                    control={Button}
                                    content='Save changes'
                                    />
                                </Form>
                            </Grid.Column>
                            </Grid>
                        </Segment>
                    </div>
                </div>
            </div>
    )}
}

export default Usersettings;