import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class DriverTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteDriver = this.deleteDriver.bind(this);
    }

    deleteDriver() {
        axios.delete('http://localhost:4000/drivers/delete-driver/' + this.props.obj._id)
            .then((res) => {
                console.log('Driver successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.driverNum}</td>
                <td>
                    <Link className="edit-link" to={"/edit-driver/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button 
                        size="sm" 
                        variant="danger"
                        onClick={this.deleteDriver}
                        >Delete</Button>
                </td>
            </tr>
        );
    }
}


export default DriverTableRow;
