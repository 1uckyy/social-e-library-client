import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

export default class AboutLibrary extends Component{
    render(){
        return(
            <div className="root">
                <Header/>
                <div style={{flexGrow:1, overflow:"auto"}}>
                        <Container>
                            <h1 style={{marginTop: 40}}>Социальная библиотека (Social e-library)</h1>
                            <p>
                            Данная библиотека предназначена прежде всего для творческих людей, которые хотят выразить себя через литературные произведения и поделиться этим с другими людьми.
                            </p>
                            <h4>Технологии</h4>
                            <p>При разработке веб-сайта использовался так называемый MERN stack:</p>
                            <ul>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                            </ul>
                            <p>Также для вёрстки частично использовался Bootstrap.</p>
                        </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}