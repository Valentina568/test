import React, {Component} from 'react';
import './class.css'
import sun from '../pictures/sun.jpg'

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ylya: false,
            login: '',
            nazvanie: ''
        }
    }

    func = () => {

    }

    render() {
        return (
            <div>
                <div>Login</div>
                <input value={this.state.login} onChange={e => this.setState({login: e.target.value})}/>
                <br/>
                <div>ВВедите название для солнышка</div>
                <input value={this.state.nazvanie} onChange={e => this.setState({nazvanie: e.target.value})}/>
                <button onClick={() => this.setState({ylya: !this.state.ylya})}>Сделаем Юлю правдой и увидим логин</button>
                {this.state.ylya && this.state.nazvanie}
                {this.func()}
                      <img src={sun}/>
            </div>
        );
    }
}

export default Class;