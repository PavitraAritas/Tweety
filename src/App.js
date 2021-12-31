import React from 'react';
import './App.css';
import Feed from './Pages/Feed/Feed';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      {/*SideBar*/}
      <Sidebar />
      <Switch>
           <Route path="/" component={Feed} exact/>
           <Route path="/explore"/>
           <Route path="/notifications">Notifications</Route>
           <Route path="/messages">Messages</Route>
           <Route path="/bookmarks">Bookmarks</Route>
           <Route path="/lists">Lists</Route>
           <Route path="/profile">Profile</Route>
      </Switch>
      {/*Feed*/}
      {/* <Feed /> */}
      {/*Widgets*/}
      <Widgets />
    </div>
    </BrowserRouter>
  );
}

export default App;
