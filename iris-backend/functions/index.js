require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./utils/config');
const firebase = require('firebase');

firebase.initializeApp(config);

app.use(cors());

const { getAllArticles, postArticle, deleteArticle } = require('./handlers/articles');

// article routes
app.get('/articles', getAllArticles);
app.post('/article', postArticle);

app.delete('/article/:articlesId', deleteArticle);

exports.api = functions.https.onRequest(app);
