import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class ReadBook extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            book_title: '',
            book_author: '',
            book_text: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    book_title: response.data.book_title,
                    book_author: response.data.book_author,
                    book_text: response.data.book_text
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render(){
        return(
            <div className="root">
                <Header/>
                <div style={{flexGrow:1, overflow:"auto"}}>
                    <Jumbotron fluid>
                        <Container>
                            <h1>{this.state.book_title}</h1>
                            <h4>{this.state.book_author}</h4>
                            <p>
                            {this.state.book_text}
                            </p>
                        </Container>
                    </Jumbotron>
                </div>
                <Footer/>
            </div>
        )
    }
}