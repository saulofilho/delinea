import React, { Component } from 'react';
import api from "../../services/api";
import TableRow from '../table-row/TableRow';
import './list.css';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { person: [] };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const res = await api.get('/person');

        //console.log("API res:", res);

        this.setState({ person: res.data });
    }

    tabRow() {
        return this.state.person.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="container pad-top">
                <h3>Listagem de Candidatos</h3>
                <div id="list-style">
                    <table className="table striped-table">
                        <thead>
                            <tr>
                                <th>Nome Completo</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th colSpan="2">Funcionalidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}