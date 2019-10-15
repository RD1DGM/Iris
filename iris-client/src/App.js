import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import ArticleList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import ArticleForm from './pages/ArticleForm';

import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/articles" component={ArticleList} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/articleform" component={ArticleForm} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
