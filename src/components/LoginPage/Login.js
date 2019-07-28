import React, {Component} from 'react';
import {connect} from "react-redux";
import './login.css';
import {addUserNick} from "../../ducks/ducks";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

    buttonClick = () => {
        const {login, password} = this.state;
        let {registration} = this.props;
        let trueLogin = registration.findIndex(e => e.login === login);
        if (trueLogin > -1) {
            if (registration[trueLogin].password === password) {
                let avatar = registration[trueLogin].avatar;
                this.props.addUserNick({login, avatar});
                this.props.history.push('/Title')
            }
        } else {
            alert('Вы ввели не правильный логин или пароль')
        }
    };

    render() {
        const {login, password} = this.state;
        return (
            <div className='background'>
                <div className='login-form'>
                    <p className='p'>Логин</p>
                    <input value={login} onChange={e => this.setState({login: e.target.value})} className='input'/>
                    <p className='p'>Пароль</p>
                    <input type='password' value={password} onChange={e => this.setState({password: e.target.value})}
                           className='input'/>
                    <br/>
                    <button onClick={() => this.buttonClick()} className='enter-button'>Войти</button>
                    <br/>
                    <button onClick={() => this.props.history.push('/registration')} className='reg-button'>Регистрация
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.ducks.registration,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUserNick: (user) => dispatch(addUserNick(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);