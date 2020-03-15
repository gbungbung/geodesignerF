import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Hoc from '../../hoc/hoc';
import { Grid, Button, Card, Header, Image, Icon } from 'semantic-ui-react'
import { userListURL } from '../urls/urls';

class UserList extends React.Component {
    state= {
      user: [],
      error: '',
      loading: '',
    };
  
    componentDidMount(){
      this.setState({loading: true})
      Axios
          .get(userListURL, )
          .then(res => {this.setState({user: res.data, loading: false})})
          .catch(error => {this.setState({error: error.error, loading: false})});
    };
    
    render() {
      const { user, error, loading } = this.state
      return(
        <Grid.Column style={{ paddingBottom: "2em", paddingTop: "4em" }}>
            {user.map(member =>
              <Card>
                <Image src={member.prof_pic} wrapped ui={false} />
                <Card.Content>
                  <Card.Header as={Link} to={`/${member.slug}`}>{member.first_name} {member.last_name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{member.occupation}</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    icon='instagram'
                    style={{ width: "30px", height: "30px" }}
                    onClick={e => e.preventDefault()}
                  >
                  </Button>
                  <Button
                    icon='facebook f'
                    style={{ width: "30px", height: "30px" }}
                    onClick={e => e.preventDefault()}
                  >
                  </Button>
                  <Button
                    icon='twitter'
                    style={{ width: "30px", height: "30px" }}
                    onClick={e => e.preventDefault()}
                  >
                  </Button>
                </Card.Content>
              </Card>
            )}
        </Grid.Column>
        )
    }
}

export default UserList;