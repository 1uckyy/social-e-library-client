import React, {Component} from 'react';
import axios from 'axios';

export default class ReadBook extends Component{
    componentDidMount() {
        axios.delete('http://localhost:4000/books/delete/'+this.props.match.params.id)
                .then(console.log('Deleted'))
                .catch(err => console.log(err))

        this.props.history.push(`/profile`);
    }

    render() {
        return(
            <div className="form-group">
                <input type="submit" value="Подтверить" className="btn btn-primary"/>
            </div>
        )
    }
}