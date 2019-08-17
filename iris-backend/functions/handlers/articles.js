const { admin, db } = require('../utils/admin');
const config = require('../utils/config');

exports.getAllArticles = (req, res) => {
  db.collection('articles')
    .orderBy('createdAt', 'desc')
    .get()
    .then(data => {
      console.log(data);
      let articles = [];
      data.forEach(doc => {
        console.log(doc.data());
        articles.push({
          articlesId: doc.id,
          articleTitle: doc.data().articleTitle,
          articleType: doc.data().articleType,
          body: doc.data().body,
          userAddress: doc.data().userAddress,
          createdAt: doc.data().createdAt,
          imageSrc: doc.data().imageSrc
        });
      });
      return res.json(articles);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.getArticles = (req, res) => {
  db.collection('articles')
    .doc(`/articles/${req.params.articlesId}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.json(doc.data());
      } else {
        return res.status(404).json({ error: 'nothing was found' });
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

const noPic = 'no-img.png';
const firstPic = 'FirstCard.png'

exports.postArticle = (req, res) => {
  if (req.body.body.trim() === '') {
    return res.status(400).json({ body: 'Body must not be empty' });
  }
  const newArticle = {
    imageSrc: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${firstPic}?alt=media`,
    articleTitle: req.body.articleTitle,
    articleType: req.body.articleType,
    body: req.body.body,
    userAddress: req.body.userAddress,
    createdAt: new Date().toISOString()
  };

  db.collection('articles')
    .add(newArticle)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ erorr: 'something went wrong' });
      console.error(err);
    });
};

exports.deleteArticle = (req, res) => {
  const document = db.doc(`/articles/${req.params.articlesId}`);
  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Article not found' });
      }
      if (doc.data().userAddress !== req.body.userAddress) {
        return res.status(403).json({ error: 'You are not authorized!' });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: 'Article deleteted successfully' });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
