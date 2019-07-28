import React, {Component} from 'react';
import {connect} from "react-redux";
import {addUser} from "../../ducks/ducks";
import './registration.css';
import * as _ from "lodash";
import RegistrationModal from './RegistrationModal'

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            repeatPassword: '',
            avatar: '',
            openModalAvatar: false,
        }
    }

    registration = () => {
        let {addUser} = this.props;
        const {login, password, avatar} = this.state;
        let newUserWithoutId = {login: login, password: password, avatar: avatar};
        addUser(newUserWithoutId);
        this.props.history.push('/login')
    };

    checkPassword = () => {
        if (this.state.password === this.state.repeatPassword) {
            this.registration()
        } else {
            alert('Ваши пароли не совпадают')
        }
    };
    addAvatar = (avatar) => {

        this.setState({avatar})
    };
    closeAvatars = () => {
        this.setState({openModalAvatar: false})
    };

    openModalAvatar = () => {
        this.setState({openModalAvatar: true})
    };

    render() {
        return (
            <div className='backgroundRegistration'>
                <div className='registrationForm'>
                    <h2 className='h'> Регистрация </h2>
                    <p>
                        <label className='p2'>Логин</label> <br/>
                        <input value={this.state.login} onChange={e => this.setState({login: e.target.value})}
                               placeholder="myname1" className='inputRegistration'/>
                    </p>
                    <p>
                        <label className='p2'> Пароль </label> <br/>
                        <input value={this.state.password} onChange={e => this.setState({password: e.target.value})}
                               type="password" placeholder="123456" className='inputRegistration'/>
                    </p>
                    <p>
                        <label className='p3'>Подтвердите пароль </label> <br/>
                        <input value={this.state.repeatPassword}
                               onChange={e => this.setState({repeatPassword: e.target.value})} type="password"
                               placeholder="123456" className='inputRegistration'/>
                    </p>
                    <button onClick={this.openModalAvatar} className='select-an-avatar'>Выбрать аватар</button>
                    {this.state.avatar &&  this.state.avatar.img}
                    <p>
                        <button onClick={this.checkPassword} className='reg-button2'>Зарегистрироваться</button>
                    </p>
                </div>
                {this.state.openModalAvatar &&
                <RegistrationModal addAvatar={this.addAvatar} closeAvatars={this.closeAvatars}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registrationGlobalState: state.ducks.registration,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (registration) => dispatch(addUser(registration))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);