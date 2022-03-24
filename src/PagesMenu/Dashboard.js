import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './Dashboard.css'
import { Card, Container, span } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className='container py-5 ' >
      <div className='row justify-content-center'>
        <div className='col-md-4 col-sm-4'>
          <div className='card'>
            <div className='card-header' style={{ backgroundColor:'#ffff', fontSize:'1.5rem'}}>
            <FaIcons.FaBell></FaIcons.FaBell>
            <label style={{ margin:'0 3px' }}> Notifications</label>           
            </div>
            <div className='card-body' style={{ height: '10rem' }}>          
              <h4 >?</h4>        
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-4'>
          <div className='card'>
          <div className='card-header' style={{ backgroundColor:'#ffff', fontSize:'1.5rem'}}>
            <FaIcons.FaChartBar></FaIcons.FaChartBar>
              <label style={{ margin:'0 3px' }}> Reports</label>                        
            </div>
            <div className='card-body' style={{ height: '10rem' }}>
            <h3 className='reports'>?</h3>         
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-4'>
          <div className='card'>
          <div className='card-header' style={{ backgroundColor:'#ffff', fontSize:'1.5rem'}}>
          <FaIcons.FaUsers />
             <label style={{ margin:'0 5px' }}> User Account</label>            
            </div>
            <div className='card-body' style={{ height: '10rem' }}>
              
              <h5 className='users'>?</h5>
              {/*
                <button type="button" className="btn btn-lg btn-primary btn-das  btn-block">
                Users <span class="badge badge-light">1000</span>
                <span><FaIcons.FaUsers /></span>
              </button>
              */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
