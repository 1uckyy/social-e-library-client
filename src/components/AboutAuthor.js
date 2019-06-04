import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

export default class AboutAuthor extends Component{
    render(){
        return(
            <div className="root">
                <Header/>
                <div style={{flexGrow:1, overflow:"auto"}}>
                        <Container>
                            <h1 style={{marginTop: 40}}>Об авторе</h1>
                            <p>
                            Проект разработал студент ЯрГУ им. П.Г.Демидова группы ИТ-31БО Новак Владислав Андреевич.
                            </p>
                            <h4>Ссылки</h4>
                            <ul>
                                <li><a href="https://github.com/1uckyy/social-e-library">Проект на Github</a></li>
                            </ul>
                            <h4>Обратная связь</h4>
                            <ul>
                                <li>Почта: novak.vlad97@mail.ru</li>
                                <li><a href="https://vk.com/1uckyy">VK</a></li>
                            </ul>
                        </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}