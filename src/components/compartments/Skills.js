import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom'
import { Header, Segment, Progress, Input, Form, Button, Grid,
    Message  } from "semantic-ui-react";
import { AxiosplusAuth } from '../urls/plusheaders';
import { skillsURL, dskillsURL } from '../urls/urls'

// class SkillsU extends React.Component {
// state = {
//     formData: [],
//     loading: '',
//     error: ''
// };

// handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
// };

// componentDidMount() {
//     AxiosplusAuth.get(skillsURL, )
//     .then(res => this.setState({formData: res.data}))
// }

// handleSubmit = e => {
//     e.preventDefault();
//     const { name, value } = this.state;
//     console.log(name)
//     AxiosplusAuth
//           .put(skillsURL, {
//             name: name,
//             value: value})
//           .then(res => this.setState({loading: false}))
//           .catch(error => this.setState({error: error, loading: false}))
// };

// render() {
//     const { formData, error , loading} = this.state;
//     return (
//                 <Form onSubmit={this.handleSubmit}>
//                     {error && (
//                     <Message
//                     error
//                     header='There is error'
//                     content={JSON.stringify(error)} />
//                     )}
//                     <Form.Group 
//                     widths='equal'>
//                         <Form.Field
//                             value={formData.name}
//                             name='name'
//                             onChange={this.handleChange}
//                             control={Input}
//                             placeholder='Name of the skill'
//                         />
//                         <Form.Field
//                             value={formData.value}
//                             name='value'
//                             onChange={this.handleChange}
//                             control={Input}
//                             placeholder='Value'
//                         />
//                         <Form.Field
//                         color="blue"
//                         control={Button}
//                         content='Save'
//                         loading={loading}
//                         disabled={loading}
//                         />
//                     </Form.Group>
//                 </Form>
//       )
//   }
// }

export default class SkillsList extends React.Component {
    state= {
        skills: []
    }

    componentDidMount() {
        AxiosplusAuth
            .get(skillsURL,)
            .then(res => {
                this.setState({skills: res.data})})
    }

    handleDeleteSki = id => {
        AxiosplusAuth
            .delete(dskillsURL(id))
            .then(res => console.log(res))
    }

    render() {
        const { skills } = this.state;
        return (
            <div className="col-md-6 mt-2">
                <Segment>
                    <Header as='h2'>Skills</Header>
                    {skills.map(skil =>
                    <div key={skil.id}>
                        <Header as='h5'>{skil.name}<Button color='yellow' size='tiny' content='Edit' /><Button size='tiny' onClick={() => handleDeleteSki(skil.id)} content='Erase' /></Header>
                        <Progress percent={skil.value} style={{ height: '0.3em'}} color='blue' />
                    </div>
                    )}
                    <div className='row justify-content-end'>
                        <Button
                        size='tiny'
                        as={Link} 
                        to='/add/skills' 
                        content='Add'/>
                    </div>
                </Segment>
            </div>
        )
    }
}
