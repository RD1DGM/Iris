import axios from 'axios';

export default async function Delete(e, id) {
  try {
    e.preventDefault();
    let delRes = axios.delete(
      // `https://us-central1-iris-f137c.cloudfunctions.net/api/article/${id}`
      process.env.REACT_APP_POST_URL + '/' + `${id}`,
      {
        data: { userAddress: `${window.web3.eth.accounts[0]}` }
      }
    );
    console.log(delRes);
    await axios.get(process.env.REACT_APP_GET_URL);
    // window.location.href = process.env.REACT_APP_MAIN_URL
    window.location.href = 'http://localhost:3000/articles';
    return delRes;
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
