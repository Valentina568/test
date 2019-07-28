import React from 'react';
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {avatars} from '../../props/avatarLets'
import * as _ from "lodash";


export default class addAvatarRegistrationModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatars: []
        }
    }

    componentDidMount() {
        this.setState({avatars})
    }

    clickRadio = (id) => {
        let avatars = _.cloneDeep(this.state.avatars);
        let beforeCheckIndex = avatars.findIndex(e => e.checked === true);
        if (beforeCheckIndex > -1) {
            avatars[beforeCheckIndex].checked = false;
        }
        let index = avatars.findIndex(e => e.id === id);
        avatars[index].checked = true;
        this.setState({avatars})
    };

    addAvatar = () => {
        this.props.addAvatar(this.state.avatars.find(e => e.checked === true));
        this.props.closeAvatars()
    };

    render() {
        return (
            <Modal.Dialog className='avatars-modal'>
                <Modal.Header>
                    <Modal.Title>Выберите аватарку</Modal.Title>
                </Modal.Header>
                <Modal.Body className='registration-modal-body'>
                    {this.state.avatars.map(avatar => <div key={avatar.id}>
                        <p key={avatar.id}>{avatar.img}</p>
                        <input onChange={() => this.clickRadio(avatar.id)} type='radio' checked={avatar.checked || false}/>
                    </div>)}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.addAvatar}>OK</Button>
                    <Button variant="secondary" onClick={this.props.closeAvatars}>Отмена</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

