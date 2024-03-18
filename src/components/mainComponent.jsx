import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registrations";
// import LandingPage from "./landing_page/landing-page";




class MainComponent extends Component{
    state={}

    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
 

    
    render(){
        
        return(
            

            <div>
                <Switch>
                

                  
                </Switch>

                

                
            </div>
        );
    }

}
export default MainComponent;
