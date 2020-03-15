import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, } from 'semantic-ui-react';
import { AxiosplusAuth } from '../urls/plusheaders'
import { eduationURL, experienceURL, dexperienceURL,
        deduationURL } from '../urls/urls'

class Portfolio extends React.Component {
    state = {
        education: [],
        experience: [],
    }

    componentDidMount() {
        AxiosplusAuth
            .get(eduationURL,)
            .then(res => {
                this.setState({education: res.data})})
        AxiosplusAuth
            .get(experienceURL,)
            .then(res => {
                this.setState({experience: res.data})})
    };

    handleDeleteEXP = id => {
        AxiosplusAuth
            .delete(dexperienceURL(id), deduationURL(id))
            .then(res => console.log(res))
    };

    handleDeleteEDU = id => {
        AxiosplusAuth
            .delete(deduationURL(id))
            .then(res => console.log(res))
    }

    render() {
        const { experience, education } = this.state;
        return (
            <div>
                <div className="work-experience group">
                    <Header as='h2' className="text-center" content='Work Experience' />
                    {experience.map(exp => 
                    <div className="item" key={exp.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <Header as='h3' content={exp.title} />
                                <Header as='h4' className="organization" content={exp.organisation} />
                            </div>
                            <div className="col-6"><span className="period">09/2005 - 05/2010</span></div>
                        </div>
                        <p className="text-muted">{exp.description}</p>
                        <Button color='red' size='tiny' onClick={() => this.handleDeleteEXP(exp.id)} content='delete'/>
                    </div> 
                    )}
                    <div className='row justify-content-center'>
                        <Button size='tiny' as={Link} to='/add/experience' content='Add'/>
                    </div>
                </div>
                <div className="education group">
                    <Header as='h2' className="text-center" content='Education' />
                    {education.map(edu => 
                    <div className="item" key={edu.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <Header as='h3' content={edu.title} />
                                <Header as='h4' className="organization" content={edu.school} />
                            </div>
                            <div className="col-md-6"><span className="period">09/2010 - 06/2015</span></div>
                        </div>
                        <p className="text-muted">{edu.description}</p>
                        <Button color='red' size='tiny' onClick={() => this.handleDeleteEDU(edu.id)} content='delete'/>
                    </div>
                    )}
                    <div className='row justify-content-center'>
                        <Button
                        size='tiny'
                        as={Link}
                        to='/add/education' 
                        content='Add'/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Portfolio;