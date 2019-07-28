import React, {Component} from 'react';
import './socialNetwork.css';
import SocialNetworkTemplate from "../SocialNetworkTemplate/";

class SocialNetwork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageName: 'TitlePage',
        }
    }


    onclick = (e) => {
        this.setState({pageName: e.target.value})
    }

    render() {
        return (
            <div className='background-social-network'>
                <div className='social-network-sidebar'>
                    <button value="TitlePage" onClick={e => this.onclick(e)} className='title-button'>0</button>
                    <button value="ChatPage" onClick={e => this.onclick(e)} className='chat-button'>1</button>
                    <button value="VideoPage" onClick={e => this.onclick(e)} className='video-button'>2</button>
                    <button value="PhotoPage" onClick={e => this.onclick(e)} className='photo-button'>3</button>
                    <button value='MusicPage' onClick={e => this.onclick(e)} className='music-button'>4</button>
                    <button value="SettingsPage" onClick={e => this.onclick(e)} className='setting-button'>5</button>
                    <button value="GamesPage" onClick={e => this.onclick(e)} className='game-button'>6</button>
                </div>
                <SocialNetworkTemplate pageName={this.state.pageName}/>
                <div className='social-network-exit-button'>
                    <button>Выйти</button>
                </div>
            </div>
        );
    }
}

export default SocialNetwork;