import React, {Component} from 'react';
import {connect} from "react-redux";
import {addUser} from "../../ducks/ducks";
import { FaTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            repeatPassword: '',
            editableId: '',
        }
    }

    registration = () => {
        let {registrationGlobalState, addUser} = this.props;
        const {login, password} = this.state;
        let newUserId = registrationGlobalState[registrationGlobalState.length - 1].id + 1;
        let newUser = {id: newUserId, login: login, password: password};
        registrationGlobalState.push(newUser)
        addUser(registrationGlobalState);
        this.setState({login: '', password: '', repeatPassword: ''})
    };

    checkPassword = () => {
        if (this.state.password === this.state.repeatPassword) {
            this.registration()
        } else {
            alert('Ваши пароли не совпадают')
        }
    };

    deleteUser = (userId) => {
        let {registrationGlobalState, addUser} = this.props;
        let index = registrationGlobalState.findIndex(e => e.id === userId);
        registrationGlobalState.splice(index, 1);
        addUser(registrationGlobalState)
    };

    confirmUser = (userId) => {
        let {registrationGlobalState, addUser} = this.props;
        let index = registrationGlobalState.findIndex(e => e.id === userId);
        registrationGlobalState[index] = {id: userId, login: this.state.login, password: this.state.password};
        addUser(registrationGlobalState);
        this.setState({editableId: '', login: '', password: ''})
    };

    editUser = (user) => {
        this.setState({editableId: user.id, login: user.login, password: user.password})
    };

    render() {
        console.log(1, this.state.editableId)
        return (
            <div>
                <h1> Регистрация </h1>
                <p>
                    <label>Логин польователя</label>
                    <input value={this.state.login} onChange={e => this.setState({login: e.target.value})} placeholder="myname1"/>
                </p>
                <p>
                    <label>Пароль пользователя </label>
                    <input  value={this.state.password} onChange={e => this.setState({password: e.target.value})} type="password" placeholder="123456"/>
                </p>
                <p>
                    <label>Подтвердите пароль пользователя </label>
                    <input value={this.state.repeatPassword} onChange={e => this.setState({repeatPassword: e.target.value})} type="password" placeholder="123456"/>
                </p>
                <p>
                    <button onClick={() => this.checkPassword()}>Регистрация</button>
                </p>
                <table>
                    <tr>
                        <th>Пользователи</th>
                        <th>Пароли</th>
                        <th>Действия</th>
                    </tr>
                    <tbody>
                    {
                        this.props.registrationGlobalState.map(user =>
                            +this.state.editableId === user.id ?
                                <tr key={user.id}>
                                    <td><input value={this.state.login} onChange={e => this.setState({login: e.target.value})} placeholder="myname1"/></td>
                                    <td><input  value={this.state.password} onChange={e => this.setState({password: e.target.value})} placeholder="123456"/></td>
                                    <td><button onClick={() => this.confirmUser(user.id)}><FaCheck/></button></td>
                                    <td><button onClick={() => this.setState({editableId: '', login: '', password: '' })}><FaTimes/></button></td>
                                </tr>
                                :
                            <tr key={user.id}>
                                <td>{user.login}</td>
                                <td>{user.password}</td>
                                <td><button onClick={() => this.editUser(user)}><FaEdit/></button></td>
                                <td><button onClick={() => this.deleteUser(user.id)}><FaTrashAlt/></button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registrationGlobalState: state.ducks.registration.flat(),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (registration) => dispatch(addUser(registration))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);