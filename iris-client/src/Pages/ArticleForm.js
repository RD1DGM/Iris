import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ContextCreator } from '../Context/ContextCreator';
import config from '../utils/config';
import firebase from 'firebase/';
import '../styles/global.css';

firebase.initializeApp(config);

const ArticleForm = () => {
  const [body, setBody] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleType, setArticleType] = useState('');
  const [articleImageUpload, setArticleImageUpload] = useState(null);
  const [images, setImages] = useState('');
  const [imageName, setImageName] = useState('');
  const [verified, setVerified] = useState(false);

  const [, setArticles] = useContext(ContextCreator);

  useEffect(() => {
    setUserAddress(window.web3.eth.accounts[0]);
  }, []);

  const POST = async e => {
    try {
      e.preventDefault();
      if (body === '') {
        alert('Can not leave the text field blank.');
        return;
      } else if (verified === false) {
        alert('Must verify the file first.');
        return;
      } else {
        let res = await axios.post(process.env.REACT_APP_GET_URL, {
          body,
          userAddress,
          articleTitle,
          articleType,
          articleImageUpload
        });
        let getRes = await axios.get(process.env.REACT_APP_POST_URL);
        let data = getRes.data;
        console.log(data);
        console.log('article:', articleImageUpload);
        setArticles(data);
        setBody('');
        setArticleTitle('');
        setArticleType('');
        window.location.href = process.env.REACT_APP_MAIN_URL;
        return res;
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const handleImageChange = e => {
    const image = e.target.files[0];
    console.log(image);
    setImages(image);
    setImageName(image.name);
  };

  const handleUploadImage = async () => {
    let upload = await firebase
      .storage()
      .ref(images.name)
      .put(images);
    console.log('upload: ', upload);
    return upload;
  };

  const getImageUrl = async e => {
    try {
      e.preventDefault();
      await handleUploadImage();
      let url = await firebase
        .storage()
        .ref(images.name)
        .getDownloadURL()
        .then(earl => setArticleImageUpload(earl) + console.log(earl));
      setVerified(true);
      return url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form>
        <textarea
          placeholder="Type here..."
          name="body"
          value={body}
          onChange={e => setBody(e.currentTarget.value)}
          cols="80"
          rows="20"
        />
        <div>
          <input type="file" name="upload" id="file" onChange={e => handleImageChange(e)} />
          <label htmlFor="file">Upload Image</label>
          {imageName}
          <button onClick={e => getImageUrl(e)}>Verify File</button>
        </div>
        <div>
          <input
            placeholder="Input Title..."
            type="text"
            name="articleTitle"
            value={articleTitle}
            onChange={e => setArticleTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            placeholder="Input Category..."
            type="text"
            name="articleType"
            value={articleType}
            onChange={e => setArticleType(e.currentTarget.value)}
          />
        </div>
        <button type="submit" onClick={e => POST(e)}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ArticleForm;
