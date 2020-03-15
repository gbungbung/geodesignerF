import React from "react";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  DropdownDivider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class CustomLayout extends React.Component {
  render() {
    const trigger = (
      <span>
        MrGerald <Image avatar src={require('../assets/img/Screenshot.png')} />
      </span>
    )
    const { authenticated } = this.props;
    return (
      <div>
        <nav className="navbar navbar-dark sticky-top navbar-expand-lg gradient">
            <div className="container">
                <Menu.Item as={Link} to='/' header className="navbar-brand logo">
                Brand Name
                </Menu.Item>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <Menu.Item
                        className="nav-link"
                        as={Link} to='/'
                        name='Home'
                        />
                        {authenticated ? (
                          <div className='nav navbar-nav'>
                        <Menu.Item className="nav-link">
                          <Dropdown
                          pointing='right'
                          icon='mail'
                          simple>
                            <Dropdown.Menu>
                                <Dropdown.Header as='h6'>Messages</Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item as={Link} to=''>
                                  <div className="d-flex">
                                      <div className="dropdown-list-image mr-3"><Image avatar src={require('../assets/img/Screenshot.png')} />
                                      </div>
                                      <div className="font-weight-bold">
                                          <div className="text-truncate"><span>Last month's report looks great.</span></div>
                                          <p className="small text-gray-500 mb-0">Fathiya Shah - 2d</p>
                                      </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to=''>
                                  <div className="d-flex">
                                      <div className="dropdown-list-image mr-3"><Image avatar src={require('../assets/img/Screenshot.png')} />
                                      </div>
                                      <div className="font-weight-bold">
                                          <div className="text-truncate"><span>Last month's report looks great.</span></div>
                                          <p className="small text-gray-500 mb-0">Fathiya Shah - 2d</p>
                                      </div>
                                  </div>
                                </Dropdown.Item>
                                <DropdownDivider/>
                              <Dropdown.Item as={Link} to=''>
                                <p className="text-center small">Show All Messages</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Menu.Item>
                          <Menu.Item className="nav-link">
                            <Dropdown
                            trigger={trigger}
                            icon='null' simple>
                              <Dropdown.Menu >
                                  <Dropdown.Item as={Link} to='/profile'><Icon name='user' />&nbsp;Profile</Dropdown.Item>
                                  <Dropdown.Item as={Link} to='/settings'><Icon name='setting'></Icon>&nbsp;Settings</Dropdown.Item>
                                  <Dropdown.Item ><Icon name='list ol'></Icon>&nbsp;Activity log</Dropdown.Item>
                                  <DropdownDivider/>
                                  <Dropdown.Item onClick={() => this.props.logout()}><Icon name='log out'></Icon>&nbsp;Logout</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Menu.Item>
                          </div>
                        ) : (
                          <Menu.Item>
                              <Button primary as={Link} to='/login'>Join</Button>
                          </Menu.Item>
                        )}
                        
                    </ul>
                </div>
            </div>
        </nav>

        {this.props.children}

        <Segment
        inverted
        vertical
        style={{ margin: "3em 0em 0em", padding: "3em 0em" }}
        >
        <Container textAlign="center" >
          <Grid divided stackable verticalAlign='middle'>
            <Grid.Column width={6} >
              <Header inverted as="h4" content="Categories" />
              <List link inverted>
                <List.Item as="a">Architectures</List.Item>
                <List.Item as="a">Programmers</List.Item>
                <List.Item as="a">Video editor</List.Item>
                <List.Item as="a">Writter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Where to find us" />
              <List link inverted>
                <List.Item ><b>Company Ltd.</b></List.Item>
                <List.Item >13/25 New Avenue</List.Item>
                <List.Item >Kimara </List.Item>
                <List.Item >Tanzania</List.Item>
              </List>
              <Divider />
              <Header inverted as='h4' content='Stay in touch' />
              <p>
                <Link to="#"><Icon name='facebook f'></Icon></Link>
                <Link to="#"><Icon name='twitter'></Icon></Link>
                <Link to="#"><Icon name='instagram'></Icon></Link>
                <Link to="#"><Icon name='github'></Icon></Link>
              </p>
            </Grid.Column>
            <Grid.Column width={6}>
                <Header inverted as='h4' content='Get the news' />
                <p className="text-muted">Subscribe to receive our updates.</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#root">
              Site Map
            </List.Item>
            <List.Item as="a" href="#root">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#root">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);