import React, { useContext, useEffect } from 'react';
import { ContextCreator } from '../context/ContextCreator';
import usePost from '../http_requests/PostRequest';
import config from '../utils/config';
import firebase from 'firebase';
import '../styles/global.css';

firebase.initializeApp(config);

const ArticleForm = () => {
  const Post = usePost();
  const { state, dispatch } = useContext(ContextCreator);

  useEffect(() => {
    dispatch({
      type: 'SET_USER_ADDRESS',
      userAddress: window.web3.eth.accounts[0]
    });
  }, []);

  const handleImageChange = e => {
    const file = e.target.files[0];
    console.log(file);
    dispatch({
      type: 'SET_IMAGES',
      images: file
    });
    dispatch({
      type: 'SET_IMAGE_NAME',
      imageName: file.name
    });
  };

  const handleUploadImage = async () => {
    let upload = await firebase
      .storage()
      .ref(state.images.name)
      .put(state.images);
    console.log('upload: ', upload);
    return upload;
  };

  const getImageUrl = async e => {
    try {
      e.preventDefault();
      await handleUploadImage();
      await firebase
        .storage()
        .ref(state.images.name)
        .getDownloadURL()
        .then(
          url =>
            dispatch({
              type: 'SET_ARTICLE_IMAGE_UPLOAD',
              articleImageUpload: url
            }) + console.log(url)
        );
      dispatch({
        type: 'SET_VERIFIED',
        verified: true
      });
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
          value={state.body}
          onChange={e =>
            dispatch({
              type: 'SET_BODY',
              body: e.currentTarget.value
            })
          }
          cols="80"
          rows="20"
        />
        <div>
          <input type="file" name="upload" id="file" onChange={e => handleImageChange(e)} />
          <label htmlFor="file">Upload Image</label>
          {state.imageName}
          <button onClick={e => getImageUrl(e)}>Verify File</button>
        </div>
        <div>
          <input
            placeholder="Input Title..."
            type="text"
            name="articleTitle"
            value={state.articleTitle}
            onChange={e =>
              dispatch({
                type: 'SET_ARTICLE_TITLE',
                articleTitle: e.currentTarget.value
              })
            }
          />
        </div>
        <div>
          <input
            placeholder="Input Category..."
            type="text"
            name="articleType"
            value={state.articleType}
            onChange={e =>
              dispatch({
                type: 'SET_ARTICLE_TYPE',
                articleType: e.currentTarget.value
              })
            }
          />
        </div>
        <button type="submit" onClick={e => Post(e)}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ArticleForm;
