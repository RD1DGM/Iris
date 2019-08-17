import React, { useContext } from 'react';
import { ContextCreator } from '../Context/ContextCreator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const ArticlePage = ({ match }) => {
  const id = match.params.id;

  const articles = useContext(ContextCreator);

  const singleArticle = articles ? articles.find(article => article.articlesId === id) : <p> Loading. . .</p>;

  console.log(singleArticle);
  return (
    <Grid container justify={'center'}>
      <Container maxWidth="md" style={{ background: 'rgba(250,250,250,1)', padding: 25, margin: 40 }}>
        <h1>{singleArticle.articleTitle}</h1>
        <h4>by: {singleArticle.userAddress}</h4>
        <p>{singleArticle.body}</p>
        <h6>{singleArticle.createdAt}</h6>
      </Container>
    </Grid>
  );
};

export default ArticlePage;
