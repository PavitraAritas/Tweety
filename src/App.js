import React from 'react';
import './App.css';
import Feed from './Pages/Feed/Feed';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Auth from './Pages/Auth/Auth'
function App() {
  return (
    <Auth/>
    // <BrowserRouter>
    // <div className="app">
    //   <Sidebar />
    //   <Switch>
    //        <Route path="/" component={Feed} exact/>
    //        <Route path="/explore"/>
    //        <Route path="/notifications">Notifications</Route>
    //        <Route path="/messages">Messages</Route>
    //        <Route path="/bookmarks">Bookmarks</Route>
    //        <Route path="/lists">Lists</Route>
    //        <Route path="/profile" component={Profile}/>
    //   </Switch>
    //   <Widgets />
    // </div>
    // </BrowserRouter>
  );
}

export default App;
