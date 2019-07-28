import React, {Component} from 'react';
import './payment.css'

class Payment extends Component {
    render() {
        return (
            <div className='background-payment'>
            <div className='payment-border'>
                <div className='payment-form'>
                <h3>Оплата</h3>
                <span>Имя</span>
                <br/>
                <input className='payment-input'/>
                <br/>
                <span>Фамилия</span><br/>
                <input className='payment-input'/><br/>
                <span>Отчество</span><br/>
                <input className='payment-input'/><br/>
                <span>Адрес электронной почты</span><br/>
                <input className='payment-input'/><br/>
                <span>Номер карты</span><br/>
                <input className='payment-input'/><br/>
                <button className='payment-button'>Оплатить</button>
                </div>
                <button className='return-to-the-cart' onClick={() => this.props.history.push('/MarketPage/basket')}>Вернуться в корзину</button>
            </div>
            </div>
        );
    }
}

export default Payment;