import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
// import * as ReactRouterDom from 'react-router-dom';
import {
  Container, Row, Col,
  Nav, Navbar, NavLink, NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

/**
 * type of Header
 */
type LinkHeaderPropsType = {
}

/**
 * Functional Component: link header
 */
const LinkHeader = (props: LinkHeaderPropsType) => {
  return (
    <div>
      <Link
        to="/"
      >Home</Link>
      <Link
        to="/page_a"
      >Page A</Link>
      <Link
        to="/page_b"
      >Page B</Link>
      <Link
        to="/page_c"
      >Page C</Link>
      <hr />
    </div>
  )
}

/**
 * type of Header
 */
type RootPagePropsType = {
}

/**
 * Functional Component: root page
 */
const RootPage = (props: RootPagePropsType) => {
  return (
    <div>
      <h1>Main Page.</h1>
    </div>
  )
}

/**
 * Main Component
 */
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LinkHeader />
        <Switch>
          <Route exact path='/' component={RootPage}></Route>
          <Route path='/page_a' component={PageA}></Route>
          <Route path='/page_b' component={PageB}></Route>
          <Route path='/page_c' component={PageC}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
