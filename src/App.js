import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import Title from "./components/FirstPage/Title";
import {history} from './utils/url'
import Login from "./components/LoginPage/Login";
import Registration from "./components/RegistrationPage/Registration";
import Admin from "./components/Admin/Admin";
import MarketPage from "./components/Market/MarketPage";
import BasketPage from "./components/Market/Basket/BasketPage"
import Payment from "./components/Market/Payment";
import Game from "./components/Game/App";
import SocialNetwork from "./components/SocialNetwork/SocialNetworkTemplate/SocialNetwork";
import Test from "./components/Test";

export default class App extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route path={'/Title'} component={Title}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/registration'} component={Registration}/>
                <Route path={'/admin'} component={Admin}/>
                <Route exact path={'/MarketPage'} component={MarketPage}/>
                <Route exact path={'/MarketPage/basket'} component={BasketPage}/>
                <Route path={'/MarketPage/basket/Payment'} component={Payment}/>
                <Route path={'/Test'} component={Test}/>
                <Route path={'/Game'} component={Game}/>
                <Route path={'/SocialNetwork'} component={SocialNetwork}/>
                <Redirect to={'/login'}/>

            </Switch>
        </Router>
    }

}
