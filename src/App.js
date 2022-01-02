import React, { Fragment } from "react";
import "./App.css";
import Feed from "./Pages/Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth";
import { IsUserRedirect, ProtectedRoute } from "./Helpers/Routes";
import useAuthListener from "./hooks/userAuth";

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect user={user} loggedInPath="/" path="/auth">
          <Auth />
        </IsUserRedirect>
        <ProtectedRoute user={user} path="/">
          <Fragment>
            <div className="app">
              <Sidebar />
              <Route path="/" component={Feed} exact />
              <Route path="/explore" />
              <Route path="/notifications">Notifications</Route>
              <Route path="/messages">Messages</Route>
              <Route path="/bookmarks">Bookmarks</Route>
              <Route path="/lists">Lists</Route>
              <Route path="/profile" component={Profile} />
              <Widgets />
            </div>
          </Fragment>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
