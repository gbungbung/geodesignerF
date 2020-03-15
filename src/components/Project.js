import React from 'react';
import {Container,
        Divider,
        Header,
        Icon,
        Image,
        Progress,
        Segment,
        Form,
        } from 'semantic-ui-react'
import CommentExampleComment from './compartments/Comments'

class Project extends React.Component {
    render() {
        return (
            <section className="portfolio-block project">
            <Container>
                <Header
                as='h1'
                className='text-center'
                style={{marginTop: '0em', marginBottom: '2em'}}
                content='Project name' />
                <div className="carousel slide" data-ride="carousel" id="carousel-1">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active"><img className="w-100 d-block" src={require("../assets/img/Screenshot.png")} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={require("../assets/img/Screenshot.png")} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={require("../assets/img/Screenshot.png")} alt="Slide Image" /></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button"
                            data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-1" data-slide-to="1"></li>
                        <li data-target="#carousel-1" data-slide-to="2"></li>
                    </ol>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 offset-md-1 info">
                        <Header as='h3' content='Description' />
                        <p>Nam a ultrices mauris. Nam efficitur, lorem a vehicula interdum, ligula velit euismod lorem, vitae vehicula ligula tortor eu leo. Maecenas porttitor massa ut vestibulum euismod. Aliquam eget mi aliquam.</p>
                        <p>Lorem ipsum dapibus dolor non, malesuada mauris. Aliquam eleifend mauris non odio mattis auctor. Aenean sit amet elementum tellus, a facilisis ligula. Pellentesque ac vehicula mauris.</p>
                    </div>
                    <div className="col-12 col-md-3 offset-md-1 meta">
                        <div className="tags">
                            <span className="meta-heading">Tags</span>
                                <a href="#">Resource</a>
                                <a href="#">Project</a>
                            <span className="meta-heading">Date</span>
                            <span>25-04-2017</span>
                        </div>
                    </div>
                </div>
                <CommentExampleComment />
                <div className="more-projects">
                    <h3 className="text-center">More Projects</h3>
                    <div className="row gallery">
                        <div className="col-md-4 col-lg-3">
                            <div className="item"><a href="#"><img className="img-fluid scale-on-hover" src={require("../assets/img/Screenshot.png")} /></a></div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="item"><a href="#"><img className="img-fluid scale-on-hover" src={require("../assets/img/Screenshot.png")} /></a></div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="item"><a href="#"><img className="img-fluid scale-on-hover" src={require("../assets/img/Screenshot.png")} /></a></div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="item"><a href="#"><img className="img-fluid scale-on-hover" src={require("../assets/img/Screenshot.png")} /></a></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        )
    }
}

export default Project;