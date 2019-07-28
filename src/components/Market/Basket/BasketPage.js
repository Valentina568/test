import React, {Component} from 'react';
import {
    clearBasketProduct,
    decrementBasketProductCounter,
    deleteBasketProduct,
    incrementBasketProductCounter
} from "../../../ducks/market";
import {connect} from "react-redux";
import BasketModal from "./BasketModal";
import './basket-page.css'

class BasketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteAll: false
        }
    }

    totalPrice = () => {
        let {basketProduct} = this.props;
        let price = 0;
        for (let i = 0; i < basketProduct.length; i++) {
            price = price + (basketProduct[i].price * basketProduct[i].productCounter)
        }
        return price;
    };

    buttonClickDeleteAll = () => {
        this.props.dispatch(clearBasketProduct());
        this.setState({deleteAll: false})
    };

    deleteAllHide = () => {
        this.setState({deleteAll: false})
    };

    render() {
        return (
            <div className='basket-product-background'>
                <span className='my-basket'>Моя корзина</span>
                <br/>
                {this.props.basketProduct.length !== 0 ?
                    <div>
                        <div>
                            <div className="basket-product">
                                {this.props.basketProduct
                                    .map(product => <div key={product.id} className='basket-product-body'>
                                        <div className='basket-product-body-img'>{product.img}</div>
                                        <div className={'basket-product-body-template'}>
                                            <div className='basket-product-label'>{product.label}</div>
                                            <div>
                                                <button className='basket-page-minus'
                                                    onClick={() => this.props.dispatch(decrementBasketProductCounter(product.id))}>-
                                                </button>
                                                {product.productCounter}
                                                <button className='basket-page-plus'
                                                    onClick={() => this.props.dispatch(incrementBasketProductCounter(product.id))}>+
                                                </button>
                                                <button className='delete-the-item'
                                                    onClick={() => this.props.dispatch(deleteBasketProduct(product.id))}>
                                                   Удалить товар
                                                </button>
                                            </div>
                                            <span>Всего</span>
                                            <div>{product.price * product.productCounter + '  ' + product.currency}</div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        <div className='basket-product-right-content'>
                            <span className='total'>Итого</span>
                            <div className='total-price'>{this.totalPrice()}</div>
                            <button className='pay' onClick={() => this.props.history.push('/MarketPage/basket/Payment')}>Оплатить
                            </button>
                            <div >
                                <button className='basket-product-right-content-delete-all' onClick={() => this.setState({deleteAll: true})}>
                                    Очистить корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    : <p className='empty-cart'>"Корзина пуста"</p>
                }
                {
                    this.state.deleteAll &&
                    <BasketModal buttonClick={this.buttonClickDeleteAll} onHide={this.deleteAllHide}/>
                }
                <button className='back-to-shopping' onClick={() => this.props.history.push('/marketPage')}>Вернуться к покупкам</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        basketProduct: state.market.basketProduct,
    }
};

export default connect(mapStateToProps)(BasketPage);