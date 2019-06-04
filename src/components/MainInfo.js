import React, {Component} from 'react';
import jwt_decode from 'jwt-decode'

class MainInfo extends Component {

    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        if(localStorage.usertoken){
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
            })
        }
    }

    render () {
        const loginRegLink = (
            <div>
                <div className="search-label">Добро пожаловать! </div>
                <div>Войдите или зарегистрируйтесь,<br/>чтобы добавить свои книги!</div>
            </div>
        )

        const userLink = (
            <div>
                <div className="search-label">
                    Привет, {this.state.first_name}!
                </div>
                <div>
                    На главной странице находятся книги,<br/>добавленные пользователями.<br/>Любую из них ты можешь прочитать.<br/>Чтобы добавить свою книгу перейди в профиль.
                </div>
            </div>
        )

        return (
            <div>
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        )
    }
}

export default MainInfo