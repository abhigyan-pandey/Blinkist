import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import MyLibraryPage from './pages/MyLibrary';
  import ExplorePage from './pages/Explore';
  
const routes = ()=> {
    return (
            <div>
                 <Router>
                <Switch>
                    <Route exact path="/" component={MyLibraryPage} ></Route>
                    <Route path="/explore" component={ExplorePage} ></Route>
                </Switch>
                </Router>
            </div>
    );
};

export default routes;
