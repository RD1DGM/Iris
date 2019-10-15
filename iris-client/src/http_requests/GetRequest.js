import React from 'react';
import { ContextCreator } from '../context/ContextCreator';
import axios from 'axios';

export default function useFetch() {
  // const [state, dispatch] = React.useContext(ContextCreator);
  const { state, dispatch } = React.useContext(ContextCreator);

  const fetch = async () => {
    try {
      let res = await axios.get(process.env.REACT_APP_GET_URL);
      let data = res.data;
      dispatch({
        type: 'SET_ARTICLES',
        articles: data
      });
      console.log('res data: ', data);
    } catch (err) {
      throw err;
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return state;
}
