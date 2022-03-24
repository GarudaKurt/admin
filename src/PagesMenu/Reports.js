import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa'
import './Reports.css'
import { Table, Card, Button, Form, Container } from 'react-bootstrap'



const Reports = () => {

  const Persons = [
    {
      ID: 1,
      Firstname: 'Aldren',
      Lastname: 'Letada',
      MI: 'L.',                           
      SQ1: '',
      SQ2: 'Yes',
      SQ3: 'No',
      SQ4: 'No',
      SQ5: 'No',
      SQ6: 'No',
      Designation: 'Students',
      Temp: '36.4',
      Date: '03/14/2022',
      QR: ''
    },
    {
      ID: 2,
      Firstname: 'Garuda Kurt',
      Lastname: 'Soydere',
      MI: 'K.',
      SQ1: 'No',
      SQ2: 'No',
      SQ3: 'No',
      SQ4: 'No',
      SQ5: 'No',
      SQ6: 'No',
      Designation: 'Employee',
      Temp: '36.7',
      Date: '03/14/2022',
      QR: ''
    },
    {
      ID: 3,
      Firstname: 'Itachi',
      Lastname: 'Uchiha',
      MI: 'N.',
      SQ1: 'No',
      SQ2: 'No',
      SQ3: 'No',
      SQ4: 'No',
      SQ5: 'No',
      SQ6: 'No',
      Designation: 'Students',
      Temp: '37.5',
      Date: '03/14/2022',
      QR: ''
    },
    {
      ID: 4,
      Firstname: 'Sasuke',
      Lastname: 'Uchiha',
      MI: 'L.',
      SQ1: 'No',
      SQ2: 'No',
      SQ3: 'No',
      SQ4: 'No',
      SQ5: 'No',
      SQ6: 'No',
      Designation: 'Students',
      Temp: '37.3',
      Date: '03/16/2022',
      QR: ''
    },
    {
      ID: 5,
      Firstname: 'Naruto',
      Lastname: 'Uzomaki',
      MI: 'L.',
      SQ1: 'No',
      SQ2: 'No',
      SQ3: 'No',
      SQ4: 'No',
      SQ5: 'No',
      SQ6: 'No',
      Designation: 'Students',
      Temp: '37.3',
      Date: '03/16/2022',
      QR: ''
    },
  ]

  return (

    <div className='container px-4'>
      <Form>
        <div className='row-12'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <Form.Group>
                  <div className='row'>
                    <div className='col-md-4'>
                      <FaIcons.FaChartBar style={{ fontSize:'20px' }}/><span style={{ fontSize:'20px' }}>Reports</span>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 input-data'>
                      <Form.Control type="input" style={{ height: '2rem' }} className='mb-2 toSearch' placeholder="Enter data to search" />
                    </div>
                  </div>
                </Form.Group>
                
                <Form.Group>
                  <Table striped bordered hover responsive className='text-nowrap'>
                    <tbody>
                      <tr>
                        <td>ID</td>
                        <td>Firstname</td>
                        <td>Lastname</td>
                        <td>M.I.</td>
                        <td>SQ-1</td>
                        <td>SQ-2</td>
                        <td>SQ-3</td>
                        <td>SQ-4</td>
                        <td>SQ-5</td>
                        <td>SQ-6</td>
                        <td>Designation</td>
                        <td>Temperature</td>
                        <td>Date</td>
                        <td>QR</td>
                      </tr>
                      {
                        Persons.map((item, i) =>
                          <tr key={i}>
                            <td>{item.ID}</td>
                            <td>{item.Firstname}</td>
                            <td>{item.Lastname}</td>
                            <td>{item.MI}</td>
                            <td>{item.SQ1}</td>
                            <td>{item.SQ2}</td>
                            <td>{item.SQ3}</td>
                            <td>{item.SQ4}</td>
                            <td>{item.SQ5}</td>
                            <td>{item.SQ6}</td>
                            <td>{item.Designation}</td>
                            <td>{item.Temp}</td>
                            <td>{item.Date}</td>
                            <td>{item.QR}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </Form.Group>
                <Form.Group>
                  <div className='footer'>                 
                    <label className='dates'>From:                    
                      <Form.Control type="date" className='date1'/>                   
                    </label>
                    <label className='dates2'>To:                    
                      <Form.Control type="date" className='date2'/>    
                      <button type='button' className='btn btn-secondary btn-sm'>Display</button>                
                    </label>
                    <label className='displayResult'>
                      Total : <h6 className='value'>3</h6>
                    </label>
                  </div>             
                </Form.Group>
              </div>
            </div>

          </div>
        </div>
      </Form>
    </div>
  )
}

export default Reports
