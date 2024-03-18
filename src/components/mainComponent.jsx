import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import  "./styles/adminStyle.css";
import AdminHome from "./Admin/home";



class MainComponent extends Component{
    state={}

    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
 

    
    render(){
        
        return(
            

            <div>
                <Switch>

                <Route path="/admin" component={AdminHome}/>
                    <Redirect from="/" to="/admin"/>
                  
                </Switch>

                

                
            </div>
        );
    }

}
export default MainComponent;
