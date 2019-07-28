import React, {Component} from 'react';
import './title.css';

class Title extends Component {

    render() {
        return (
            <div className='title'>
                <div >
                    <div className='button-market' onClick={() => this.props.history.push('/MarketPage')}>
                        <span>Интернет-магазин</span>
                    </div>
                        <div className='socialNetwork-button' onClick={() => this.props.history.push('/SocialNetwork')}>
                            <span>Социальная сеть</span>
                        </div>
                </div>
            </div>

        );
    }
}

export default Title;