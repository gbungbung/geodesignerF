import React, { useState } from 'react'
import classnames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Button,
        Container,
        Divider,
        Header,
        Icon,
        Image,
        Segment,
        } from 'semantic-ui-react';
import {
        Card,
        CardBody,
        NavItem,
        NavLink,
        Nav,
        TabContent,
        TabPane,
        Row,
        Col
        } from "reactstrap";
import { userURL } from './urls/urls';
import { AxiosplusAuth } from './urls/plusheaders';
import Portfolio from './compartments/ExpEdu'
import SkillsList from './compartments/Skills'

class Profile extends React.Component {
    state = {
        data: [],
        iconTabs: 1,
        plainTabs: 1
    };

    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };

    componentDidMount() {
        AxiosplusAuth
            .get(userURL,)
            .then(res => {
                this.setState({data: res.data})})
            .catch(error => this.setState({error: error}));
        };

    render() {
        const { data } = this.state;
        return (
             <div className="mt-3">
                <div className="row justify-content-center">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    <Image
                        alt="..."
                        className="rounded-circle shadow"
                        src={data.prof_pic}
                        style={{ width: "220px", height: "220px" }}
                    />
                    </a>
                </div>
                <div className="row justify-content-center">
                    <div key={data.slug} className="text-center mt-5">
                        <Header as='h3'>{data.first_name} {data.last_name}</Header>
                        <div className="h6 mt-4">
                            <i className="ni business_briefcase-24 mr-2" />
                            <small className="h6 text-muted"><b>{data.occupation}</b></small>
                            <br />
                            <small className="h6 text-muted"><b>@ {data.place_of_work}</b></small>
                        </div>
                        <div className="h6 mt-4">
                            <i className="ni business_briefcase-24 mr-2" />
                            <small className="h6 text-muted">{data.country}</small>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className=" py-4">
                      <Button
                        color="blue"
                        onClick={e => e.preventDefault()}
                        size="small"
                      >
                        Connect
                      </Button>
                      <Button
                        color="blue"
                        onClick={e => e.preventDefault()}
                        size="small"
                      >
                        Message
                      </Button>
                    </div>
                </div>
                <Row className="mt-5 justify-content-center">
                <Col lg="10">
                    <div className="nav-wrapper">
                        <Nav
                            className="nav-fill flex-column flex-md-row "
                            id="tabs-icons-text"
                            pills
                            role="tablist"
                        >
                            <NavItem className='shadow'>
                            <NavLink
                                aria-selected={this.state.iconTabs === 1}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.iconTabs === 1
                                })}
                                onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                                href="#pablo"
                                role="tab"
                            >
                                <Icon name='home' />
                                Projects
                            </NavLink>
                            </NavItem>
                            <NavItem className='shadow'>
                            <NavLink
                                aria-selected={this.state.iconTabs === 2}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.iconTabs === 2
                                })}
                                onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                                href="#pablo"
                                role="tab"
                            >
                                <Icon name='book' />
                                Profile
                            </NavLink>
                            </NavItem>
                            <NavItem className='shadow'>
                            <NavLink
                                aria-selected={this.state.iconTabs === 3}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.iconTabs === 3
                                })}
                                onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                                href="#pablo"
                                role="tab"
                            >
                                <Icon name='forumbee' />
                                Forum
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <Card className='mt-4'>
                    <CardBody>
                        <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                            <TabPane tabId="iconTabs1">
                                <section className="portfolio-block photography">
                                    <Header as='h2' className="text-center mt-5" content='Recent projects' />
                                    <Container>
                                        <div className="row no-gutters">
                                            <div className="col-md-6 col-lg-3 item zoom-on-hover">
                                                <Image as={Link} to='/project' className="img-fluid image" src={require('../assets/img/Screenshot.png')} />
                                            </div>
                                            <div className="col-md-6 col-lg-3 item zoom-on-hover">
                                                <Image as={Link} to='/project' className="img-fluid image" src={require('../assets/img/bg-masthead.jpg')} />
                                            </div>
                                            <div className="col-md-6 col-lg-3 item zoom-on-hover">
                                                <Image as={Link} to='/project' className="img-fluid image" src={require('../assets/img/Screenshot.png')} />
                                            </div>
                                            <div className="col-md-6 col-lg-3 item zoom-on-hover">
                                                <Image as={Link} to='/project' className="img-fluid image" src={require('../assets/img/Screenshot.png')} />
                                            </div>
                                        </div>
                                    </Container>
                                </section>
                            </TabPane>
                            <TabPane tabId="iconTabs2">
                                <section className="portfolio-block cv">
                                    <Container>
                                        <Portfolio />
                                        <div className="group">
                                            <div className="row">
                                                <SkillsList />
                                                <div className="col-md-6 mt-2">
                                                    <Segment>
                                                        <Header as='h2'>Contact Info</Header>
                                                        <div className="row">
                                                            <div className="col-1"><Icon name='text telephone'></Icon></div>
                                                            <div className="col-9"><span>{data.phone_number}</span></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-1"><Icon name='mail'></Icon></div>
                                                            <div className="col-9"><span>{data.email}</span></div>
                                                        </div>
                                                    </Segment>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </section>
                            </TabPane>
                            <TabPane tabId="iconTabs3">
                                <Segment style={{ padding: "    2em 0em" }} vertical>
                                    <Container text>
                                        <Divider
                                        as="h4"
                                        className="header"
                                        horizontal
                                        style={{ margin: "5em 0em", textTransform: "uppercase" }}
                                        >
                                        <a href="#">Cutting techniques</a>
                                        </Divider>
                                        <Header as="h3" style={{ fontSize: "1.5em" }}>
                                        Breaking The Grid, Grabs Your Attention
                                        </Header>
                                        <p style={{ fontSize: "1em" }}>
                                        Instead of focusing on content creation and hard work, we have learned
                                        how to master the art of doing nothing by providing massive amounts of
                                        whitespace and generic content that can seem massive, monolithic and
                                        worth your attention.
                                        </p>
                                        <Button as="a" size="small">
                                        Read More
                                        </Button>
                                        <Divider
                                        as="h4"
                                        className="header"
                                        horizontal
                                        style={{ margin: "3em 0em", textTransform: "uppercase" }}
                                        >
                                        <a href="#">Case Studies</a>
                                        </Divider>
                                        <Header as="h3" style={{ fontSize: "1.5em" }}>
                                        Did We Tell You About Our Bananas?
                                        </Header>
                                        <p style={{ fontSize: "1em" }}>
                                        Yes I know you probably disregarded the earlier boasts as non-sequitur
                                        filler content, but it's really true. It took years of gene splicing
                                        and combinatory DNA research, but our bananas can really dance.
                                        </p>
                                        <Button as="a" size="small">
                                        I'm Still Quite Interested
                                        </Button>
                                    </Container>
                                </Segment>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </div>
        )
    }
}

export default Profile;