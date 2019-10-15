import React from 'react';
import { ContextCreator } from '../context/ContextCreator';
import axios from 'axios';

export default function usePost() {
  const { state, dispatch } = React.useContext(ContextCreator);
  const Post = async e => {
    try {
      let res;
      let data;
      let { body, userAddress, articleTitle, articleType, articleImageUpload, verified } = state;
      e.preventDefault();

      body === ''
        ? alert(" Can't leave text field blank.")
        : verified === false
        ? alert('Must verify first.')
        : await axios.post(process.env.REACT_APP_POST_URL, {
            body,
            userAddress,
            articleTitle,
            articleType,
            articleImageUpload
          });
      res = await axios.get(process.env.REACT_APP_GET_URL);
      data = res.data;
      if (body !== '' && verified === true) {
        // window.location.href = process.env.REACT_APP_MAIN_URL;
        window.location.href = 'http://localhost:3000/articles';
        dispatch({
          type: 'SET_ARTICLES',
          articles: data
        });
        dispatch({
          type: 'SET_BODY',
          body: ''
        });
        dispatch({
          type: 'SET_ARTICLE_TITLE',
          articleTitle: ''
        });
        dispatch({
          type: 'SET_ARTICLE_TYPE',
          articleType: ''
        });
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };
  return Post;
}
