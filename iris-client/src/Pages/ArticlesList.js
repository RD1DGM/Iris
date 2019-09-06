import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Loading from '../Components/Loading';
import { ContextCreator } from '../Context/ContextCreator';
import { TipEth } from '../Components/TipEthButton';
import { TipOmen } from '../Components/TipOmenButton';
import Navbar from '../Components/Navbar';
import StartPost from '../Components/StartPost';

const ArticlesList = () => {
  const [articles] = useContext(ContextCreator);

  // const useStyles = makeStyles({
  //   card: {
  //     maxWidth: 500,
  //     backgroundColor: 'rgba(236,239,241,1)'
  //   },
  //   media: {
  //     minHeight: 175
  //   }
  // });

  // const classes = useStyles();

  const articlePost = articles ? (
    articles.map((article, key) => (
      // <Grid container justify={'center'} style={{ margin: 30 }} key={key}>
      <div key={key}>
        <Card className="card">
          <Link to={`/article/${article.articlesId}`}>
            <CardActionArea>
              {/* <div> {article.articleType} </div> */}
              <div
                style={{
                  backgroundImage: `url(${article.articleImageUpload})`,
                  backgroundPosition: '50% 50%',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  height: '250px',
                  width: '100%'
                }}
              >
                {' '}
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {article.articleTitle}
                </Typography>
                <Typography gutterBottom variant="caption" component="h2">
                  by: {article.userAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ wordWrap: 'break-word' }}>
                  {article.body.substring(0, 80)}.....
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
      </div>
    ))
  ) : (
    <Loading />
  );

  return (
    <>
      <Navbar />
      <div className="article_list_page">
        <div className="article_header"></div>
        <div className="article_posts">{articlePost}</div>
        <div className="article_login">
          <div className="article_login_box">
            <p className="article_login_text"> Ready to post?</p>
            <div className="article_login_button">
              <StartPost />
            </div>
          </div>
        </div>
        <div className="article_trending">
          <div className="article_trending_text">Trending:</div>
          <div>
            <button className="article_trending_button">Bitcoin</button>
          </div>
          <div>
            <button className="article_trending_button">Ethereum</button>
          </div>
          <div>
            <button className="article_trending_button">EOS</button>
          </div>
          <div>
            <button className="article_trending_button">Litecoin</button>
          </div>
          <div>
            <button className="article_trending_button">Photography</button>
          </div>
          <div>
            <button className="article_trending_button">Technology</button>
          </div>
          <div>
            <button className="article_trending_button">Vitalik Buterin</button>
          </div>
          <div>
            <button className="article_trending_button">Consensys</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesList;
