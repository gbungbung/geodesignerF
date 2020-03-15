import React from "react";
import { Input,
          Form,
          Header,
          Button,
          Segment,
          Grid,
          Message,
          TextArea,
        } from "semantic-ui-react";
import { addCategoryURL, updateCategoryURL } from "../urls/urls";
import { AxiosplusAuth } from '../urls/plusheaders'

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
            <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as='h2' color='blue' >
                        Add Category
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

export default Category;

// class UpdateCategory extends React.Component {
//     state = {
//         data: '',
//         loading: '',
//         error: ''
//     };

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     componentDidMount() {
//       console.log(),
//       AxiosplusAuth.put(updateCategoryURL(), )
//             .then(res => {
//               console.log(res),
//               this.setState()})

//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         AxiosplusAuth
//               .put(addCategoryURL, {
//                   description: this.state.description,
//                   title: this.state.title,})
//               .then(res => this.setState({loading: false}))
//               .catch(error => this.setState({error: error, loading: false}))
//     };

//     render() {
//         const { description, title, error , loading} = this.state;
//         return (
//             <Grid textAlign='center' style={{ marginTop: '2em' }} verticalAlign='middle'>
//                 <Grid.Column style={{ maxWidth: 500 }}>
//                     <Header as='h2' color='blue' >
//                         Add Category
//                     </Header>
//                     <Segment color='blue'>
//                     {error && (
//                       <Message
//                       error
//                       header='There is error'
//                       content={JSON.stringify(error)} />
//                     )}
//                     <Form onSubmit={this.handleSubmit}>
//                         <Form.Group 
//                         className="mt-4"
//                         widths='equal'>
//                             <Form.Field
//                                 value={title}
//                                 name='title'
//                                 onChange={this.handleChange}
//                                 control={Input}
//                                 placeholder='Title'
//                             />
//                         </Form.Group>
//                         <Form.Group 
//                         className="mt-4"
//                         widths='equal'>
//                             <Form.Field
//                                 value={description}
//                                 name='description'
//                                 onChange={this.handleChange}
//                                 control={TextArea}
//                                 placeholder='Descrition'
//                             />
//                         </Form.Group>
//                         <Form.Field
//                         color="blue"
//                         control={Button}
//                         content='Save'
//                         loading={loading}
//                         disabled={loading}
//                         />
//                     </Form>
//                     </Segment>
//                 </Grid.Column>
//             </Grid>
//           )
//       }
//     }

// export default UpdateCategory;