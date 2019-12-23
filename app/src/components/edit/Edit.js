import React, { Component } from 'react';
import api from "../../services/api";
import MaskedInput from 'react-text-mask';
import './edit.css';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
        this.onChangeRG = this.onChangeRG.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            person_cpf: '',
            person_rg: '',
            person_birthday: '',
            person_phone: '',
            person_userName: '',
            person_email: '',
            person_password: ''
        }
    }

    componentDidMount() {
        api.get('/person/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    person_name: response.data.person_name,
                    person_cpf: response.data.person_cpf,
                    person_rg: response.data.person_rg,
                    person_birthday: response.data.person_birthday,
                    person_phone: response.data.person_phone,
                    person_userName: response.data.person_userName,
                    person_email: response.data.person_email,
                    person_password: response.data.person_password
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            person_name: e.target.value
        });
    }
    onChangeCPF(e) {
        this.setState({
            person_cpf: e.target.value
        });
    }
    onChangeRG(e) {
        this.setState({
            person_rg: e.target.value
        });
    }
    onChangeBirthday(e) {
        this.setState({
            person_birthday: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            person_phone: e.target.value
        });
    }
    onChangeUserName(e) {
        this.setState({
            person_userName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            person_email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            person_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            person_cpf: this.state.person_cpf,
            person_rg: this.state.person_rg,
            person_birthday: this.state.person_birthday,
            person_phone: this.state.person_phone,
            person_userName: this.state.person_userName,
            person_email: this.state.person_email,
            person_password: this.state.person_password
        };
        api.post('/person/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/app/');
    }

    render() {
        return (
            <div className="container pad-top">
                <h3>Edição de Candidatos</h3>
                <div id="list-style">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome Completo</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Nome Completo"
                                value={this.state.person_name}
                                onChange={this.onChangeName}
                            />
                            <label htmlFor="name">CPF</label>
                            <MaskedInput 
                                mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                                type="text" 
                                id="cpf" 
                                placeholder="012.345.678-90"
                                value={this.state.person_cpf}
                                onChange={this.onChangeCPF}
                            />
                            <label htmlFor="name">RG</label>
                            <MaskedInput 
                                mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,]}
                                type="text" 
                                id="rg" 
                                placeholder="123.456.789" 
                                value={this.state.person_rg}
                                onChange={this.onChangeRG}
                            />
                            <label htmlFor="name">Data de Nascimento</label>
                            <MaskedInput 
                                mask={[/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/,]}
                                type="text" 
                                id="birthday" 
                                placeholder="01/02/03" 
                                value={this.state.person_birthday}
                                onChange={this.onChangeBirthday}
                            />
                            <label htmlFor="name">Telefone</label>
                            <MaskedInput 
                                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                type="text" 
                                id="phone" 
                                placeholder="(01) 2345-6789" 
                                value={this.state.person_phone}
                                onChange={this.onChangePhone}
                            />
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                id="userName"
                                placeholder="Username"
                                value={this.state.person_userName}
                                onChange={this.onChangeUserName}
                            />
                            <label htmlFor="name">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="email@email.com"
                                value={this.state.person_email}
                                onChange={this.onChangeEmail}
                            />
                            <label htmlFor="name">Senha</label>
                            <input
                                type="text"
                                id="password"
                                placeholder="Senha"
                                value={this.state.person_password}
                                onChange={this.onChangePassword}
                            />
                            <label />
                            <input id="inp-btn" type="submit" value="Salvar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}