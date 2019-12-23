import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './table-row.css';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        api.get('/person/delete/' + this.props.obj._id)
            .then(console.log('Deleted'), alert("Cadastro deletado"))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>
                <td>
                    {this.props.obj.person_email}
                </td>
                <td>
                    {this.props.obj.person_phone}
                </td>
                <td>
                    <Link to={"/app/edit/" + this.props.obj._id}>
                        <button className="not-btn fas fa-pencil-alt" />
                    </Link>
                </td>
                <td>
                    <button onClick={this.delete} className="not-btn delete-btn fas fa-trash-alt" />
                </td>
            </tr>
        );
    }
}

export default TableRow;