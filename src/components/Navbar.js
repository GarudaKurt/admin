import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SidebarData'

const Navbar = () => {

    {/*Menu Selector */}
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
        {/*Navbar bar */}
            <div className='navbar'>
                <Link to='/' className='nav-menu-icon' onClick={showSidebar}>
                    <FaIcons.FaBars className='navbar-bar'/>
                </Link>
            </div>
            <div
                className={sidebar ? 'sidebar-container active' : 'sidebar-container'}
            >
                <ul className='sidebar-items'   >
                    <li className='sidebar-toggle'>
                        <Link to='/' className='nav-menu-icon' onClick={showSidebar}>
                            <FaIcons.FaWindowClose />
                        </Link>                      
                    </li>
                    <h4 className='dash'>Dashboard</h4>    

                    {/*Loop SibarData LIST*/}             
                    {SidebarData.map(sidebaritem => {
                        return (
                            <li key={sidebaritem.id} className={sidebaritem.cNmae} onClick={showSidebar} >
                                <Link to={sidebaritem.path} >
                                    {sidebaritem.icon}
                                    <span>{sidebaritem.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Navbar
