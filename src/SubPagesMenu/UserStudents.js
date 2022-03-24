import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Table, Card, Button, Form, Container,Dropdown} from 'react-bootstrap'
import './UserStudents.css'
import { Link,useNavigate } from 'react-router-dom'





const Users = () => { 

  {/*to call other user types table or to linked */}
  let navigate = useNavigate() 
  function handleChange(value) {
    navigate(`/${value}`);
    value = "";
  }

  {/*Basic array declartion */}
  const Persons = [
    {
      ID: 1,
      Email: 'garudakurt@gmail.com',
      Firstname: 'Garuda Kurt',
      Lastname: 'Soydere',
      MI: 'K.',                           
      Age: '26',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Students',    
      Address: 'Mambaling Cebu City',
      Vaccine: 'Sinovac',   
      VaccineProf: '',      
      Course:'BSCE',
      Year:'4',
    },
    {
      ID: 2,
      Email: 'letadaaldren@gmail.com',
      Firstname: 'Aldren',
      Lastname: 'Letada',
      MI: 'L.',                           
      Age: '23',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Students',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer', 
      VaccineProf: '',        
      Course:'BSCPE',
      Year:'4',
    },
    {
      ID: 3,
      Email: 'jessymendiola@gmail.com',
      Firstname: 'Jessebel',
      Lastname: 'Mendiola',
      MI: 'M.',                           
      Age: '21',
      ContactNo: '09082438802',
      Gender: 'Female',
      Designation: 'Students',    
      Address: 'Sanciangko St. Cebu City',
      Vaccine: 'Pfizer',     
      VaccineProf: '',    
      Course:'BSBA',
      Year:'2',
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
                      <FaIcons.FaUsers style={{ fontSize:'20px' }} /><span style={{ fontSize:'20px' }}>User Students</span>
                    </div>
                    <div className='col-md-4'></div>
                     {/*To search data in table */}
                    <div className='col-md-4 input-data'>
                      <Form.Control type="input" style={{ height: '2rem',marginBottom:'5px' }} className='toSearch' placeholder="Enter data to search" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Table striped bordered hover responsive className='text-nowrap'>
                    <tbody >
                      <tr>
                        <td>ID</td>
                        <td>Email</td>
                        <td>Firstname</td>
                        <td>Lastname</td>
                        <td>M.I.</td>
                        <td>Age</td>
                        <td>Contact No.</td>
                        <td>Gender</td>
                        <td>Designation</td>
                        <td>Address</td>
                        <td>Vaccine</td>
                        <td>Vaccine Prof</td>               
                        <td>Course</td>
                        <td>Year</td>                       
                      </tr>
                      {
                        Persons.map((item, i) =>
                          <tr key={i}>
                            <td>{item.ID}</td>
                            <td>{item.Email}</td>
                            <td>{item.Firstname}</td>
                            <td>{item.Lastname}</td>
                            <td>{item.MI}</td>
                            <td>{item.Age}</td>
                            <td>{item.ContactNo}</td>
                            <td>{item.Gender}</td>
                            <td>{item.Designation}</td>
                            <td>{item.Address}</td>
                            <td>{item.Vaccine}</td>
                            <td>{item.VaccineProff}</td>                           
                            <td>{item.Course}</td>
                            <td>{item.Year}</td>                           
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </Form.Group>
                <Form.Group>                
                  <label style={{ margin:'10px 5px' }}>
                         Select Type:
                         <select onChange={event => handleChange(event.target.value)} style={{ marginLeft:'10px' }}>
                           <option value='users'>Users</option>
                           <option value='uservisitor'>Visitors</option>
                           <option value='useremployee'>Employee</option>
                           <option value='userstudents'>Stundent</option>
                        </select>                    
                   </label>                                                                
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Users
