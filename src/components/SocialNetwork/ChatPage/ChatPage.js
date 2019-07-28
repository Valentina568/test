import React, {Component} from 'react';
import './chatPage.css'
import * as _ from "lodash";
import {connect} from "react-redux";

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text: []
        }
    }

    funkc = () => {
        let newText = _.cloneDeep(this.state.text);
        newText.push(this.state.value);
        this.setState({text: newText, value: ''})
    };


    render() {
        return (
            <div className='chat-page-top-body'>
                <div className='text'>
                    {this.state.text.map((e, index) => <div key={index}>
                        {this.props.userName + ': ' + e}
                    </div>)}
                </div>
                <div>
                    <textarea className='textarea-area' placeholder='Введите сообщение' value={this.state.value}
                              onChange={e => this.setState({value: e.target.value})}/>
                </div>
                <div>
                    <button onClick={() => this.funkc()}>Отправить</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.ducks.userName,
    }
};

export default connect(mapStateToProps)(ChatPage);