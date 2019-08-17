import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './Pages/ArticlesList';
import ArticlePage from './Pages/ArticlePage';
import ArticleForm from './Pages/ArticleForm';
import Loading from './Components/Loading';
import axios from 'axios';
import { ContextCreator } from './Context/ContextCreator';

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
        <Switch>
          <ContextCreator.Provider value={address}>
            <Route path="/" component={ArticleList} exact />
            <Route path="/article/:id" component={ArticlePage} />
          </ContextCreator.Provider>
          <Route path="/articleform" component={ArticleForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
