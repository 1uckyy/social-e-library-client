import React from 'react'
import '../css/app.css'
import logo from '../images/books.png'
import { Link } from 'react-router-dom'


function HeaderLogin(){
    return(
        <div className="header">
                <Link to="/"><img className="books-image" src={logo} alt={"logo"}/> </Link>
                <Link to="/" className="lib">Social e-library</Link>
                <div className="header-menu"></div>
        </div>
    )
}

export default HeaderLogin