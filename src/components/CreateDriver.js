import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateDriver extends Component {
    render() {
        return (
            <div class="form-wrapper">
                <Form>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Driver ID</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                        <Button variant="info" size="lg" block="block" type="submit">
                            Register Driver
                        </Button>
                </Form>
                
            </div>
        )
    }
}

export default CreateDriver;