import React, { Component } from 'react'
import { login } from './UserFunctions'
import HeaderLogin from './Header.login'
import Footer from './Footer'

class MainLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(localStorage.usertoken) {
                this.props.history.push(`/profile`)
            } else {
                alert('Неверные данные!');
            }
            })
        }

    render () {
        return (
            <div className="root">
                <HeaderLogin/>
                <div className="container" style={{flexGrow:1}}>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Вход</h1>
                                <div className="form-group">
                                    <label htmlFor="email">Адрес Email</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Введите Email"
                                        value={this.state.email}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Введите пароль"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Войти
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainLogin