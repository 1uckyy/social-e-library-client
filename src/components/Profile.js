import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import HeaderLogin from './Header.login'
import Footer from './Footer'
import ListOfUserBooks from './ListUserBooks'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render () {
        return (
            <div className="root">
                <HeaderLogin/>
                <div style={{flexGrow:1, overflow:'auto', marginTop: 20}}>
                    <div>
                        <div className="col-sm-8 mx-auto">
                            <h1 className="text-center">Информация о профиле</h1>
                        </div>
                        <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Имя:</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Фамилия:</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <ListOfUserBooks/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Profile