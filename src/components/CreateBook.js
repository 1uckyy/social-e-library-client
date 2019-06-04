import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Header from './Header';
import Footer from './Footer';

export default class CreateBook extends Component{

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_title: '',
            book_author: '',
            book_text: ''
        }
    }

    onChangeTodoDescription(e){
        this.setState({
            book_title: e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            book_text: e.target.value
        });
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            book_author: decoded.email,
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newTodo = {
            book_title: this.state.book_title,
            book_author: this.state.book_author,
            book_text: this.state.book_text
        }

        axios.post('http://localhost:4000/books/add', newTodo)
        .then(res => console.log(res.data));
        
        this.setState({
            book_title: '',
            book_author: '',
            book_text: ''
        });

        this.props.history.push(`/profile`);
    }

    render(){
        return(
            <div className="root">
                <Header/>
                <div className="container" style={{flexGrow:1, overflow:"auto"}}>
                <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                    <form onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Добавление новой книги</h1>
                        <div className="form-group">
                            <label>Название: </label>
                            <input type="text"
                            className="form-control"
                            value={this.state.book_title}
                            onChange={this.onChangeTodoDescription}
                            />
                        </div>
                        <div className="form-group">
                            <label>Автор: </label>
                            <input disabled type="text"
                            className="form-control"
                            value={this.state.book_author}
                            />
                        </div>
                        <div className="form-group">
                            <label>Текст: </label>
                            <textarea class="form-control" value={this.state.book_text} onChange={this.onChangeTodoResponsible} aria-label="With textarea"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Добавить" className="btn btn-primary"/>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}