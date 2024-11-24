import React from 'react'
import '../Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFolder, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="nav-menu">
            <li><Link className='link' to='/'><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link className='link' to='/About'><FontAwesomeIcon icon={faUser}/></Link></li>
            <li><Link className='link' to='/Project'><FontAwesomeIcon icon={faAward} /></Link></li>
            <li><Link className='link' to='/Skill'><FontAwesomeIcon icon={faFolder} /></Link></li>
            <li><Link className='link' to='/Contact_Us'><FontAwesomeIcon icon={faEnvelope} /></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar