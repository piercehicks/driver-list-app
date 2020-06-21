import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateDriver extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeDriverName = this.onChangeDriverName.bind(this);
        this.onChangeDriverEmail = this.onChangeDriverEmail.bind(this);
        this.onChangeDriverNum = this.onChangeDriverNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            driverNum: ''
          }
        }
      
        onChangeDriverName(e) {
          this.setState({name: e.target.value})
        }
      
        onChangeDriverEmail(e) {
          this.setState({email: e.target.value})
        }
      
        onChangeDriverNum(e) {
          this.setState({driverNum: e.target.value})
        }
      
        onSubmit(e) {
          e.preventDefault()
      
          console.log(`Driver successfully created!`);
          console.log(`Name: ${this.state.name}`);
          console.log(`Email: ${this.state.email}`);
          console.log(`DriverNum: ${this.state.driverNum}`);
      
          this.setState({name: '', email: '', driverNum: ''})
        }
      
    
    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.name}
                            onChange={this.onChangeDriverName}
                            />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeDriverEmail}
                            />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Driver ID</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.driverNum}
                            onChange={this.onChangeDriverNum}
                            />
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