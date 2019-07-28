//action-types
import {marketProduct} from "../props/lets";
import * as _ from "lodash";
import cloneDeep from "lodash/cloneDeep";

const ADD_MARKET_PRODUCT = 'ADD_MARKET_PRODUCT';
const MARKET_SHOW_NEXT_PAGE = 'MARKET_SHOW_NEXT_PAGE';
const MARKET_INCREMENT_PRODUCT_COUNTER = 'MARKET_INCREMENT_PRODUCT_COUNTER';
const MARKET_DECREMENT_PRODUCT_COUNTER = 'MARKET_DECREMENT_PRODUCT_COUNTER';
const MARKET_ADD_PRODUCT_TO_BASKET = 'MARKET_ADD_PRODUCT_TO_BASKET';
const BASKET_INCREMENT_PRODUCT_COUNTER = 'BASKET_INCREMENT_PRODUCT_COUNTER';
const BASKET_DECREMENT_PRODUCT_COUNTER = 'BASKET_DECREMENT_PRODUCT_COUNTER';
const BASKET_DELETE_PRODUCT = 'BASKET_DELETE_PRODUCT';

let initialState = {
    defaultMarketProduct: marketProduct,
    basketProduct: [],
    activePage: 1,
    marketProduct: marketProduct,
    itemsCountPerPage: 9,
    totalElements: marketProduct.length,
};

//reducer
export default function market(state = initialState, action) {
    switch (action.type) {
        case ADD_MARKET_PRODUCT:
            return {...state, basketProduct: action.basketProduct};
        case MARKET_SHOW_NEXT_PAGE:
            return {...state, activePage: action.page, marketProduct: action.marketProduct};
        case MARKET_INCREMENT_PRODUCT_COUNTER:
            return {...state, marketProduct: action.marketProduct};
        case MARKET_DECREMENT_PRODUCT_COUNTER:
            return {...state, marketProduct: action.marketProduct};
        case MARKET_ADD_PRODUCT_TO_BASKET:
            return {...state, marketProduct: action.marketProduct, basketProduct: action.basketProduct};
        case BASKET_INCREMENT_PRODUCT_COUNTER:
            return {...state, basketProduct: action.basketProduct};
        case BASKET_DECREMENT_PRODUCT_COUNTER:
            return {...state, basketProduct: action.basketProduct};
        case BASKET_DELETE_PRODUCT:
            return {...state, basketProduct: action.basketProduct};
        default:
            return state;
    }
}

//actionCreate (AC) (action)
export function updateProduct(basketProduct) {
    return dispatch => dispatch({type: ADD_MARKET_PRODUCT, basketProduct})
}

export function showNextPage(page) {
    return (dispatch, getState) => {
        let marketProduct = _.cloneDeep(getState().market.defaultMarketProduct);
        let itemsCountPerPage = _.cloneDeep(getState().market.itemsCountPerPage);
        marketProduct = marketProduct.splice(itemsCountPerPage * (page - 1), itemsCountPerPage * page);
        dispatch({type: MARKET_SHOW_NEXT_PAGE, page, marketProduct})
    }
}

export function incrementProductCounter(productId) {
    return (dispatch, getState) => {
        let marketProduct = _.cloneDeep(getState().market.marketProduct);
        let currentProductIndex = marketProduct.findIndex(product => product.id === productId);
        marketProduct[currentProductIndex].productCounter = marketProduct[currentProductIndex].productCounter + 1;
        return dispatch({type: MARKET_INCREMENT_PRODUCT_COUNTER, marketProduct})
    }
}

export function decrementProductCounter(productId) {
    return (dispatch, getState) => {
        let marketProduct = _.cloneDeep(getState().market.marketProduct);
        let currentProductIndex = marketProduct.findIndex(product => product.id === productId);
        if (marketProduct[currentProductIndex].productCounter !== 0) {
            marketProduct[currentProductIndex].productCounter = marketProduct[currentProductIndex].productCounter - 1;
        }
        dispatch({type: MARKET_DECREMENT_PRODUCT_COUNTER, marketProduct})
    }
}

export function addProductToBasket(productId) {
    return (dispatch, getState) => {
        let marketProduct = _.cloneDeep(getState().market.marketProduct);
        let basketProduct = _.cloneDeep(getState().market.basketProduct);
        let currentProductIndex = marketProduct.findIndex(product => product.id === productId);
        const product = _.cloneDeep(marketProduct[currentProductIndex]);
        let currentBasketProductIndex = basketProduct.findIndex(e => e.id === productId);
        if (currentBasketProductIndex === -1) {
            basketProduct.push(product);
        } else {
            basketProduct[currentBasketProductIndex].productCounter = basketProduct[currentBasketProductIndex].productCounter + product.productCounter;
        }
        marketProduct[currentProductIndex].productCounter = 0;
        dispatch({type: MARKET_ADD_PRODUCT_TO_BASKET, marketProduct, basketProduct})
    }
}

export function incrementBasketProductCounter(productId) {
    return (dispatch, getState) => {
        let basketProduct = cloneDeep(getState().market.basketProduct);
        let currentProductIndex = basketProduct.findIndex(product => product.id === productId);
        basketProduct[currentProductIndex].productCounter = basketProduct[currentProductIndex].productCounter + 1;
        return dispatch({type: BASKET_INCREMENT_PRODUCT_COUNTER, basketProduct})
    }
}

export function decrementBasketProductCounter(productId) {
    return (dispatch, getState) => {
        let basketProduct = cloneDeep(getState().market.basketProduct);
        let currentProductIndex = basketProduct.findIndex(product => product.id === productId);
        if (basketProduct[currentProductIndex].productCounter !== 0) {
            basketProduct[currentProductIndex].productCounter = basketProduct[currentProductIndex].productCounter - 1;
            return dispatch({type: BASKET_DECREMENT_PRODUCT_COUNTER, basketProduct})
        }
    }
}

export function deleteBasketProduct(productId) {
    return (dispatch, getState) => {
        let basketProduct = cloneDeep(getState().market.basketProduct);
        let currentProductIndex = basketProduct.findIndex(product => product.id === productId);
        basketProduct.splice(currentProductIndex, 1);
        return dispatch({type: BASKET_DECREMENT_PRODUCT_COUNTER, basketProduct})
    }
}

export function clearBasketProduct() {
    return dispatch => {
        let basketProduct = [];
        dispatch({type: BASKET_DECREMENT_PRODUCT_COUNTER, basketProduct})
    }
}