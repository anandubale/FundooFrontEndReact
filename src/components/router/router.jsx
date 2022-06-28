import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashBoard from "../../pages/Dashboard/dashboard";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

function Router(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route  exact path = "/" component={SignIn}/>
                    <Route  exact path = "/signup" component={SignUp}/>
                    <Route  exact path = "/dashboard" component={DashBoard}/>
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Router