import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Header from './Header';
import Footer from './Footer';

export default class EditBook extends Component{

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_id: '',
            book_title: '',
            book_author: '',
            book_text: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    book_id: this.props.match.params.id,
                    book_title: response.data.book_title,
                    book_author: response.data.book_author,
                    book_text: response.data.book_text
                })
            })
            .catch(function(error){
                console.log(error)
            })

            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                book_author: decoded.email,
            })
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

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            book_title: this.state.book_title,
            book_author: this.state.book_author,
            book_text: this.state.book_text
        };
        axios.post('http://localhost:4000/books/update/'+this.state.book_id, obj)
            .then(res => console.log(res.data));

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
                            <h1 className="h3 mb-3 font-weight-normal">Изменение книги</h1>
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
                                {/* <input type="text"
                                    className="form-control"
                                    value={this.state.book_text}
                                    onChange={this.onChangeTodoResponsible}
                                    /> */}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Обновить книгу" className="btn btn-primary"/>
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