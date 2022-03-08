import {Component} from "react";
import {Switch,Route} from 'react-router-dom'
import Home from "../../pages/home/home";
import Hosting from "../../pages/hosting/hosting";

function Main(){
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route  path='/vps' component={Hosting}></Route>
        </Switch>
    )
}
export default Main