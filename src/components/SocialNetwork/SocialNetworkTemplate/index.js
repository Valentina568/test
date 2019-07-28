import React, {Component} from 'react';
import TitlePage from "../TitlePage/TitlePage";
import ChatPage from "../ChatPage/ChatPage";
import VideoPage from "../VideoPage/VideoPage";
import PhotoPage from "../PhotoPage/PhotoPage";
import MusicPage from "../MusicPage/MusicPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import GamesPage from "../GamesPage/GamesPage";

class SocialNetworkTemplate extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='social-network-template'>
                {this.props.pageName === 'TitlePage' && <TitlePage/>}
                {this.props.pageName === 'ChatPage' && <ChatPage/>}
                {this.props.pageName === 'VideoPage' && <VideoPage/>}
                {this.props.pageName === 'PhotoPage' && <PhotoPage/>}
                {this.props.pageName === 'MusicPage' && <MusicPage/>}
                {this.props.pageName === 'SettingsPage' && <SettingsPage/>}
                {this.props.pageName === 'GamesPage' && <GamesPage/>}
            </div>
        );
    }
}

export default SocialNetworkTemplate;