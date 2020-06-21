import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DriverTableRow from './DriverTableRow';

class DriverList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          drivers: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:4000/drivers/')
          .then(res => {
            this.setState({
              drivers: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      DataTable() {
        return this.state.drivers.map((res, i) => {
          return <DriverTableRow obj={res} key={i} />;
        });
      }
    
    
      render() {
        return (
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Driver ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
      }
    }
    

export default DriverList;
