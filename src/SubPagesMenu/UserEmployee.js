import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Table, Card, Button, Form, Container,Dropdown} from 'react-bootstrap'
import './UserEmployee.css'
import { Link, useNavigate } from 'react-router-dom'





const Users = () => { 

  let navigate = useNavigate()
  
  function handleChange(value) {
    navigate(`/${value}`);
    value = "";
  }

  
 

  const Persons = [
    {
      ID: 1,
      Email: 'kirvydianon@gmail.com',
      Firstname: 'Kirvu',
      Lastname: 'Dianon',
      MI: 'H.',                           
      Age: '22',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Employee',    
      Address: 'Labangon St. Cebu City',
      Vaccine: 'Pfizer',    
      VaccineProff:'',
      TeachingStaff: '',
      NonTeachingStaff: 'EDP',
      Agency:'',
      Assign:''
    },
    {
      ID: 2,
      Email: 'raymarksasutil@gmail.com',
      Firstname: 'Raymark',
      Lastname: 'Sasutil',
      MI: 'H.',                           
      Age: '29',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Employee',    
      Address: 'Sanciangko St. Cebu City',
      Vaccine: 'Sinovac',    
      VaccineProff:'',
      TeachingStaff: '',
      NonTeachingStaff: 'Supervisor',
      Agency:'',
      Assign:''
    },
    {
      ID: 3,
      Email: 'ItachiUchiha@gmail.com',
      Firstname: 'Itachi',
      Lastname: 'Uchiha',
      MI: 'H.',                           
      Age: '24',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Employee',    
      Address: 'Sanciangko St. Cebu City',
      Vaccine: 'Sinovac',    
      VaccineProff:'',
      TeachingStaff: 'Education',
      NonTeachingStaff: '',
      Agency:'',
      Assign:''
    },
    {
      ID: 4,
      Email: 'jessymendiola@gmail.com',
      Firstname: 'Jessebel',
      Lastname: 'Mendiola',
      MI: 'H.',                           
      Age: '36',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Employee',    
      Address: 'Mambaling Cebu City',
      Vaccine: 'Pfizer',    
      VaccineProff:'',
      TeachingStaff: '',
      NonTeachingStaff: 'Librarian',
      Agency:'',
      Assign:''
    },
    {
      ID: 5,
      Email: 'kakashihatake@gmail.com',
      Firstname: 'Kakashi',
      Lastname: 'Hatake',
      MI: 'H.',                           
      Age: '36',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Employee',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer',    
      VaccineProff:'',
      TeachingStaff: '',
      NonTeachingStaff: '',
      Agency:'Dimentional',
      Assign:'Electrician'
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
                      <FaIcons.FaUsers style={{ fontSize:'20px' }} /><span style={{ fontSize:'20px' }}>User Employee</span>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 input-data'>
                      <Form.Control type="input" style={{ height: '2rem',marginBottom:'5px' }} className=' toSearch' placeholder="Enter data to search" />
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
                        <td>Teaching Staff</td>
                        <td>Non-Teaching Staff</td>
                        <td>Agency</td>
                        <td>Assign</td>
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
                            <td>{item.TeachingStaff}</td>
                            <td>{item.NonTeachingStaff}</td>
                            <td>{item.Agency}</td>
                            <td>{item.Assign}</td>
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
