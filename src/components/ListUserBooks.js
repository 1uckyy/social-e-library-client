import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Button from 'react-bootstrap/Button';

const Todo = props => (
    <tr>
        <td>{props.todo.book_title}</td>
        <td>{props.todo.book_author}</td>
        <td>
            <Link to={"/read/"+props.todo._id}><Button variant="info">Читать</Button></Link>
        </td>
        <td>
            <Link to={"/edit/"+props.todo._id}><Button variant="info">Изменить</Button></Link>
        </td>
        <td>
        <Link to={"/delete/"+props.todo._id}><Button variant="info">Удалить</Button></Link>
        </td>
    </tr>
)

export default class ListOfBooks extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            email: '',
            todos: []
        };
    }

    componentDidMount() {
        axios.get('books')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error){
                console.log(error);
            })

            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                id: decoded._id,
                email: decoded.email,
            })
    }

    todoList() {
        return this.state.todos.map( (currentTodo, i) => {
            if(currentTodo.book_author==this.state.email){
            return <tbody>
                <Todo todo={currentTodo} key={i}/>
                </tbody>;
            }
        });
    }

    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3 style={{marginLeft: 20}}>Ваши книги</h3>
                <table className="table table-striped" style={{marginTop: 10}}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Название</th>
                            <th>Автор</th>
                            <th>Читать</th>
                            <th>Изменить</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    { this.todoList() }
                </table>
                <div style={{marginTop: 10, marginLeft: 20, marginBottom: 15}}>
                    <Link to={"/add/"+this.state.id}><Button variant="primary">Добавить книгу</Button></Link>
                </div>
            </div>
        )
    }
}