import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

export default class Help extends Component{
    render(){
        return(
            <div className="root">
                <Header/>
                <div style={{flexGrow:1, overflow:"auto"}}>
                        <Container>
                            <h1 style={{marginTop: 40}}>Помощь</h1>
                            <h4>Главная страница</h4>
                            <ul>
                                <li>для поиска книги в поисковую строку нужно ввести ТОЧНОЕ и ПОЛНОЕ её название, а затем нажать кнопку "искать"</li>
                                <li>если после поиска нужно вновь вывести все книги, то можно либо оставить поисковую строку пустой и нажать "искать", либо перезагрузить страницу</li>
                                <li>чтобы начать читать книгу нажмите кнопку "Читать" напротив нужной вам книги</li>
                            </ul>
                            <h4>Авторизация и регистрация</h4>
                            <ul>
                                <li>для входа нажмите "Войти" и введите свои почту и пароль, после нажмите "Вход"</li>
                                <li>для регистрации нажмите "Зарегистрироваться" и заполните поля, после нажмите "Зарегистрироваться"</li>
                            </ul>
                            <h4>Профиль</h4>
                            <ul>
                                <li>для добавления, изменения, прочтения или удаления книги нажмите кнопку с соответствующим названием</li>
                            </ul>
                        </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}