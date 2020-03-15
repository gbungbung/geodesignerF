import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Hoc from '../../hoc/hoc';
import { AxiosplusAuth } from '../urls/plusheaders'
import { categoryURL, deCategoryURL, addCategoryURL } from '../urls/urls'
import { Input, Icon, Form, Header,
        Button, Grid, Message, TextArea,
        } from "semantic-ui-react";

const create_form = 'CREATE_FORM'
const update_form = 'UPDATE_FORM'

class Category extends React.Component {
    state = {
        description: "",
        title: "",
        loading: '',
        error: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        AxiosplusAuth
              .post(addCategoryURL, {
                  description: this.state.description,
                  title: this.state.title,})
              .then(res => this.setState({loading: false}))
              .catch(error => this.setState({error: error, loading: false}))
    };

    render() {
        const { description, title, error , loading} = this.state;
        return (
          <Hoc>
              <Header as='h2' color='blue' >
                  Add Category
              </Header>
              <Form style={{ maxWidth: 500}} onSubmit={this.handleSubmit} error={error}>
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
                {error && (
                  <Message
                  error
                  header='There is error'
                  content={JSON.stringify(error)} />
                )}
              </Form>
          </Hoc>
          )
      }
    }

class Categories extends React.Component {
    state= {
      category: [],
    };
  
    componentDidMount(){
      Axios
          .get(categoryURL, )
          .then(res => {this.setState({category: res.data})})
    };

    handleDelete = (id) => {
      AxiosplusAuth.delete(deCategoryURL(id))
    }
    
    handleAdd = () => {
    }
    
    render() {
      const { category } = this.state;
      return(
          <Hoc>
            {category.map(item =>
              <Grid.Column key={item.id} style={{ paddingBottom: "2em", paddingTop: "2em" }}>
                  <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0"><Icon name='image'></Icon></div>
                      <div className="card-body">
                          <Header as='h3' className="card-title"><Link to='/'>{item.title}</Link></Header>
                          <p className="card-text">{item.description}</p>
                      </div>
                  </div>

                  {/* TODO: Check if the user is admin then give the permission to see the edit and erase buttons */}
                  <Hoc>
                    <Button color='green' style={{ width: '5em'}} size='tiny' content='Edit' />
                    <Button color='red' size='tiny' style={{ width: '5em'}} onClick={() => this.handleDelete(item.id)} content='Erase' />
                  </Hoc>
              </Grid.Column>
            )}
              <Grid.Column>
                <Button onClick={() => handleAdd()} size='tiny' content='Add category' />
                <Category />
              </Grid.Column>
          </Hoc>
      )
    }
}

export default Categories;