import React, { useContext } from 'react';
import { ContextCreator } from '../Context/ContextCreator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import axios from 'axios';

const ArticlePage = ({ match }) => {
  const id = match.params.id;

  const [articles] = useContext(ContextCreator);

  const singleArticle = articles ? articles.find(article => article.articlesId === id) : <p> Loading. . .</p>;

  const DELETE = async e => {
    try {
      e.preventDefault();
      let delRes = axios.delete(`https://us-central1-iris-f137c.cloudfunctions.net/api/article/${id}`, {
        data: { userAddress: `${window.web3.eth.accounts[0]}` }
      });
      console.log(delRes);
      await axios.get(process.env.REACT_APP_POST_URL);
      // window.location.href = process.env.REACT_APP_MAIN_URL
      window.location.href = 'http://localhost:3000/articles';
      return delRes;
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <Grid container justify={'center'}>
      <Container
        maxWidth="md"
        style={{ background: 'rgb(222, 222, 222)', padding: 25, margin: 40, wordWrap: 'break-word' }}
      >
        {window.web3.eth.accounts[0] === singleArticle.userAddress ? (
          <Button color="secondary" variant="contained" onClick={e => DELETE(e)}>
            Delete Post
          </Button>
        ) : null}
        <h1>{singleArticle.articleTitle}</h1>
        <h4>by: {singleArticle.userAddress}</h4>
        <p>{singleArticle.body}</p>
        <h6>{singleArticle.createdAt}</h6>
      </Container>
    </Grid>
  );
};

export default ArticlePage;
