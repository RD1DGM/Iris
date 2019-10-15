import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Delete from '../http_requests/DeleteRequest';
import useFetch from '../http_requests/GetRequest';

const ArticlePage = ({ match }) => {
  const state = useFetch();
  const id = match.params.id;

  const singleArticle = state.articles ? (
    state.articles.find(article => article.articlesId === id)
  ) : (
    <p> Loading. . .</p>
  );

  return (
    <Grid container justify={'center'}>
      <Container
        maxWidth="md"
        style={{ background: 'rgb(222, 222, 222)', padding: 25, margin: 40, wordWrap: 'break-word' }}
      >
        {window.web3.eth.accounts[0] === singleArticle.userAddress ? (
          <Button color="secondary" variant="contained" onClick={e => Delete(e, id)}>
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
