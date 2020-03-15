import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {
  Header,
  Segment,
  Icon,
} from "semantic-ui-react";
import { logout } from '../store/actions/auth'

class Sideba extends Component {
  render() {
  const { authenticated } = this.props;
  return (
      <div className="col-lg-3 mt-5">
        <Segment>
          <div className="card-header">
            <Header as='h3' className="card-title">Settings</Header>
          </div>
          <div className="card-body">
            <ul className="nav nav-pills flex-column">
              <Link to="/settings" className="nav-link"><Icon name="user" />Edit details</Link>
              <Link to="/password/change" className="nav-link"><Icon name="lock" />Change password</Link>
              <Link className="nav-link" onClick={() => this.props.logout()}><Icon name='log out' />Logout</Link>
            </ul>
          </div>
        </Segment>
      </div>
    )
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
  )(Sideba)
);