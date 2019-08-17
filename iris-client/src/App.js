import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './Pages/ArticlesList';
import ArticlePage from './Pages/ArticlePage';
import ArticleForm from './Pages/ArticleForm';
import axios from 'axios';
import { ContextCreator } from './Context/ContextCreator';
import NotFound from './Pages/NotFound';

function App() {
  const [address, setAddress] = useState();

  const fetch = async () => {
    try {
      let res = await axios.get('https://us-central1-iris-f137c.cloudfunctions.net/api/articles');
      let data = res.data;
      console.log(data);
      setAddress(data);
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
        <ContextCreator.Provider value={address}>
          <Switch>
            <Route path="/" component={ArticleList} exact />
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
