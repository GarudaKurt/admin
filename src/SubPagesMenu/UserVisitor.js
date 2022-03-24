import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Table, Card, Button, Form, Container,Dropdown} from 'react-bootstrap'
import './UserVisitor.css'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => { 

  {/*to call other user types table */}
  let navigate = useNavigate()  
  function handleChange(value) {
    navigate(`/${value}`);
    value = "";
  }


  {/*Basic declartion array for table */}
  const Persons = [
    {
      ID: 1,
      Email: 'garudakurt@gmail.com',
      Firstname: 'Garuda Kurt',
      Lastname: 'Soyedere',
      MI: 'L.',                             
      Age: '23',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Visitors',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer',  
      VaccineProfs: '',      
      Course:'',
      Year:'',
      Grade:'',
      Section:'',
      Purpose:'',
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
      Designation: 'Visitors',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer',    
      VaccineProff:'',
      Course:'',
      Year:'',
      Grade:'',
      Section:'',
      Purpose:'',
    },
    {
      ID: 3,
      Email: 'itachiuchiha@gmail.com',
      Firstname: 'Itachi',
      Lastname: 'Uchiha',
      MI: 'N.',                           
      Age: '27',
      ContactNo: '09082438802',
      Gender: 'Male',
      Designation: 'Visitors',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer',   
      VaccineProff:'', 
      Course:'',
      Year:'',
      Grade:'',
      Section:'',
      Purpose:'',
    },
    {
      ID: 4,
      Email: 'sakuraharuno@gmail.com',
      Firstname: 'Sakura',
      Lastname: 'Haruno',
      MI: 'K.',                           
      Age: '24',
      ContactNo: '09082438802',
      Gender: 'Female',
      Designation: 'Visitors',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Sinovac',    
      VaccineProff:'',
      Course:'',
      Year:'',
      Grade:'',
      Section:'',
      Purpose:'',
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
      Designation: 'Visitors',    
      Address: 'Ubca 1 Quiot Cebu City',
      Vaccine: 'Pfizer',    
      VaccineProff:'',
      Course:'',
      Year:'',
      Grade:'',
      Section:'',
      Purpose:'',
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
                      <FaIcons.FaUsers style={{ fontSize:'20px' }} /><span style={{ fontSize:'20px' }}>User Visitors</span>
                    </div>

                    {/*To search data in table */}
                    <div className='col-md-4'></div>
                    <div className='col-md-4 input-data'>
                      <Form.Control type="input" style={{ height: '2rem',marginBottom:'5px' }} className=' toSearch' placeholder="Enter data to search" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group>

                <div className=''>
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
                        <td>Grade</td>
                        <td>Section</td>
                        <td>Purpose</td>
                      
                      </tr>
                      
                      {/*Get data from array Persons */}
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
                            <td>{item.Grade}</td>
                            <td>{item.Section}</td>
                            <td>{item.Purpose}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </div>

                </Form.Group>
                {/*Navigate other user types */}
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
