import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import Categories from "./compartments/Categories";
import UserList from './compartments/UserList'

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class Homepage extends React.Component {
  render() {
    return(
      <ResponsiveContainer>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they never
                  thought possible. Let us delight your customers and empower your
                  needs... through pure data analytics.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="huge"
                  src={require("../assets/img/Screenshot.png")}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="medium">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" textAlign="center" columns="equal" stackable>
            <Grid.Row >
              <Categories />
            </Grid.Row>
          </Grid>
        </Segment>
        
        <Segment style={{ padding: "0em" }} vertical>
          <Grid verticalAlign='middle' columns="equal" stackable>
            <Grid.Row className="justify-content-center text-center mb-lg">
                <Grid.Column style={{ paddingBottom: "2em", paddingTop: "4em" }}>
                  <Header as='h2' style={{fontSize: '3em'}}>Amazing Experts</Header>
                  <p className="lead text-muted">
                    Choose the fit of your work
                  </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center" className="justify-content-center">
              <Grid.Column >
                <UserList />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column textAlign="center">
                <Button size="small" content='Check Them More' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default Homepage;