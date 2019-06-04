import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Todo = props => (
    <tr>
        <td>{props.todo.book_title}</td>
        <td>{props.todo.book_author}</td>
        <td>
            <Link to={"/read/"+props.todo._id}><Button variant="info">Читать</Button></Link>
        </td>
    </tr>
)

export default class ListOfBooks extends Component{

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.searchClick = this.searchClick.bind(this);

        this.state = {
            book_title: '',
            todos: []
        };
    }

    onChange(e){
        this.setState({
            book_title: e.target.value
        });
    }

    searchClick() {
        if(this.state.book_title) {
        axios.get('books/search/'+this.state.book_title)
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
        }
        else {
            axios.get('books')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

    componentDidMount() {
        axios.get('books')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    // componentDidUpdate(){
    //     axios.get('books')
    //         .then(response => {
    //             this.setState({todos: response.data});
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         })
    // }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <tbody>
                <Todo todo={currentTodo} key={i}/>
                </tbody>;
        });
    }

    render(){
        return(
            <div>
                <div className="search">
                    <div className="search-label">Поиск</div>
                    <input className="search-input" type="text" onChange={this.onChange}></input>
                </div>
                <Button variant="info" onClick={this.searchClick}>Искать</Button>
                <div className="books-users-label">Книги пользователей библиотеки</div>
                <table className="table table-striped" style={{marginTop: 10, width: 600}}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Название</th>
                            <th>Автор</th>
                            <th>Ссылка</th>
                        </tr>
                    </thead>
                    { this.todoList() }
                </table>
            </div>
        )
    }
}