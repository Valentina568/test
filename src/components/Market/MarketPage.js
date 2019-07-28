import React, {Component} from 'react';
import {connect} from 'react-redux';
import './marketPage.css';
import Pagination from 'rc-pagination/es/Pagination';
import 'rc-pagination/assets/index.css';
import {
    addProductToBasket,
    decrementProductCounter,
    incrementProductCounter,
    showNextPage,
    updateProduct
} from "../../ducks/market";
import {FaShoppingBasket} from 'react-icons/fa'

class MarketPage extends Component {

    render() {
        return (
            <div className="market">
                <p className="market-title">
                        <b>интернет-магаз у Валентины</b>
                </p>
                <div>
                    <button className='buttonInBasket' onClick={() => this.props.history.push('/MarketPage/basket')}>
                        <FaShoppingBasket/>
                        <div>{this.props.basketProduct.length}</div>
                    </button>
                </div>
                <div className='market-body'>
                    {this.props.marketProduct
                        .slice(0, 9)
                        .map(product => <div key={product.id} className="product">
                                <div>
                                    <div>{product.img}</div>
                                </div>
                                <div className="product-body">
                                    <div className={'product-label'}>{product.label}</div>
                                    <div className={'discription'}>{product.discription}</div>
                                    <div className={'price'}>{product.price + '  ' + product.currency}</div>
                                    <div className={'buttons'}>
                                        <button className={'buttonBasketMinus'}
                                                onClick={() => this.props.decrementProductCounter(product.id)}>-
                                        </button>
                                        {product.productCounter}
                                        <button className={'buttonBasketPlus'}
                                                onClick={() => this.props.incrementProductCounter(product.id)}>+
                                        </button>
                                    </div>
                                    <button className={'buttonBasket'}
                                            onClick={this.props.addProductToBasket.bind(this, product.id)}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
                <div className="pagination-position">
                    <Pagination onChange={this.props.showNextPage}
                                current={this.props.activePage}
                                total={this.props.totalElements}
                                pageSize={this.props.itemsCountPerPage}/>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        basketProduct: state.market.basketProduct,
        marketProduct: state.market.marketProduct,
        activePage: state.market.activePage,
        itemsCountPerPage: state.market.itemsCountPerPage,
        totalElements: state.market.totalElements,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (product) => dispatch(updateProduct(product)),
        showNextPage: (page) => dispatch(showNextPage(page)),
        incrementProductCounter: (productId) => dispatch(incrementProductCounter(productId)),
        decrementProductCounter: (productId) => dispatch(decrementProductCounter(productId)),
        addProductToBasket: (productId) => dispatch(addProductToBasket(productId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);