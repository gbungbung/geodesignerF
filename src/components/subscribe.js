import React from 'react'
import { Form,
        Input,
        } from 'semantic-ui-react'

class Subscribe extends React.Component {
    render() {
        return (
            <Form>
                <div className="input-group">
                    <Input type="text" />
                    <span className="input-group-append" ><button className="btn btn-outline-secondary">Subscribe!</button></span>
                </div>
            </Form>
        )
    }
}

export default Subscribe;