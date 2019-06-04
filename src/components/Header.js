import React, { Component } from 'react'
import '../css/app.css'
import logo from '../images/books.png'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        const loginRegLink = (
            <div className="header-menu">
                    <Link to="/login" className="login-button">Войти</Link>
                    <Link to="/register" className="registr-button">Зарегистрироваться</Link>
            </div>
        )

        const userLink = (
            <div className="header-menu">
                <Link to="/profile" className="login-button">Профиль</Link>
                <a href="" onClick={this.logOut.bind(this)} className="registr-button">Выйти</a>
            </div>
        )

        return (
            <div className="header">
                <Link to="/"><img className="books-image" src={logo} alt={"logo"}/> </Link>
                <Link to="/" className="lib">Social e-library</Link>
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        )
    }
}

export default withRouter(Header)