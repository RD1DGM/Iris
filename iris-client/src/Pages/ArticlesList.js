import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Loading from '../Components/Loading';
import Grid from '@material-ui/core/Grid';
import { ContextCreator } from '../Context/ContextCreator';
import { TipEth } from '../Components/TipEthButton';
import { TipOmen } from '../Components/TipOmenButton';


const ArticlesList = () => {
  const articles = useContext(ContextCreator);

  const useStyles = makeStyles({
    card: {
      maxWidth: 450,
      backgroundColor: 'rgba(236,239,241,1)'
    },
    media: {
      minHeight: 175
    }
  });

  const classes = useStyles();

  const articlePost = articles ? (
    articles.map((article, key) => (
      <Grid container justify={'center'} style={{margin: 30}} key={key}>
        <Card className={classes.card}>
          <Link to={`/article/${article.articlesId}`}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  article.articleType === 'News'
                    ? require('../images/FirstCard.png')
                    : article.articleType === 'Technology'
                    ? require('../images/SecondCard.png')
                    : article.articleType === 'Politics'
                    ? require('../images/ThirdCard.png')
                    : require('../images/FourthCard.png')
                }
                title="Card Cover"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {article.articleTitle}
                </Typography>
                <Typography gutterBottom variant="caption" component="h2">
                  by: {article.userAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.body.substring(0, 135)} . . . .
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p" style={{ paddingTop: 10 }}>
                  {article.createdAt}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <TipEth />
            <TipOmen />
          </CardActions>
        </Card>
      </Grid>
    ))
  ) : (
    <Loading />
  );

  return (
    <>
      <div>{articlePost}</div>
    </>
  );
};

export default ArticlesList;
