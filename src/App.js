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
import PostDetail from "./Components/Post/PostDetail/PostDetail";

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
              <Route path="/" exact>
                <Feed currentUser={user} />
              </Route>
              <Route path="/comments">
                <PostDetail currentUser={user} />
              </Route>
              <Route path="/explore" />
              <Route path="/notifications">Notifications</Route>
              <Route path="/messages">Messages</Route>
              <Route path="/bookmarks">Bookmarks</Route>
              <Route path="/lists">Lists</Route>
              <Route path="/profile">
                <Profile currentUser={user} />
              </Route>
              <Widgets />
            </div>
          </Fragment>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
