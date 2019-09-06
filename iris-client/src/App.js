import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './Pages/ArticlesList';
import ArticlePage from './Pages/ArticlePage';
import ArticleForm from './Pages/ArticleForm';
import axios from 'axios';
// import { StateProvider } from './Context/ContextCreator';
import { ContextCreator } from './Context/ContextCreator';
import NotFound from './Pages/NotFound';
import LandingPage from './Pages/LandingPage';

function App() {
  const [articles, setArticles] = useState();

  const fetch = async () => {
    try {
      let res = await axios.get(process.env.REACT_APP_POST_URL);
      let data = res.data;
      console.log('res data: ', data);
      setArticles(data);
      return res;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Router>
        <ContextCreator.Provider value={[articles, setArticles]}>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/articles" component={ArticleList} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/articleform" component={ArticleForm} />
            <Route component={NotFound} />
          </Switch>
        </ContextCreator.Provider>
      </Router>
    </div>
  );
}

export default App;
