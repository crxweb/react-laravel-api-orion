import React, { useRef, useEffect, useState } from "react";
import { Route, Switch, Link, NavLink, Redirect, useLocation, useParams } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import logo from './logo.svg';
import './App.css';
import Default from './components/Default';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';
import ArticleDetail from './components/ArticleDetail';
import ArticleUpdate from './components/ArticleUpdate';
import ArticleDelete from './components/ArticleDelete';
import LoginPassport from './components/LoginPassport';
import LogoutPassport from './components/LogoutPassport';
import PostList from './components/PostList';

import { isLogin } from './utils';

const { REACT_APP_ENV_APPNAME } = process.env;


function App() {

  let isLoggedIn = isLogin();
  
  const location = useLocation();
  useEffect(() => {
    console.group('--- location ---');
    console.log(location);
    console.groupEnd();
  }, [location])
  

  return (
    <div className="App">
      <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/article-list">
          Liste des articles
        </NavLink>

        {isLoggedIn > 0 &&
          <NavLink activeClassName="active" to="/post-list">
            Liste des posts
          </NavLink>
        }

        {isLoggedIn ?
          <Link to={"/logout-passport"}>Se déconnecter</Link>
          : <Link to={"/login-passport"}>Se connecter</Link>
        }
      </div>
      <Switch>
        <Route path="/" exact component={Default} />
        <Route path="/article-list" exact component={ArticleList} />
        <Route path="/article-create" exact component={ArticleCreate} />
        <Route path="/article-detail/:id" exact component={ArticleDetail} />
        <Route path="/article-update/:id" exact component={ArticleUpdate} />
        <Route path="/article-delete/:id" exact component={ArticleDelete} />
        <PublicRoute restricted={false} path="/logout-passport" exact component={LogoutPassport} />
        <PublicRoute restricted={true} path="/login-passport" exact component={LoginPassport} />
        <PrivateRoute path="/post-list" exact component={PostList} />
      </Switch>
    </div>
  );
}

export default App;
