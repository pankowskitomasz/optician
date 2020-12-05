import React,{Component} from "react";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Comingsoon from "./components/comingsoon";
import Error from "./components/error";
import PrivacyPolicy from "./components/privacy";

class App extends Component{
    constructor(){
        super();
        this.state={
            backLink: {name:"back to Home",href:"/"},
            privacyLink: {name:"Privacy Policy",href:"/privacy"}
        };
    }
    render(){
        return(        
            <BrowserRouter>
                <Navigation/>                 
                <Switch>
                    <Route exact path="/">
                        <Comingsoon/>
                    </Route>
                    <Route path="/privacy">
                        <PrivacyPolicy backLink={this.state.backLink}/>
                    </Route>
                    <Route path="/error">
                        <Error backLink={this.state.backLink}/>
                    </Route>
                    <Route path="*">
                        <Redirect to="/error"/>
                    </Route>
                </Switch>   
                <Footer privacyLink={this.state.privacyLink}/>        
            </BrowserRouter>
        );
    }
}

export default App;