export const initialState = {
  open: false,
  tip: 0,
  ethAddress: '',
  articles: '',
  body: '',
  userAddress: '',
  articleTitle: '',
  articleType: '',
  articleImageUpload: null,
  images: '',
  imageName: '',
  verified: false
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_OPEN':
      return { ...state, open: action.open };
    case 'SET_TIP':
      return { ...state, tip: action.tip };
    case 'SET_ETHADDRESS':
      return { ...state, ethAddress: action.ethAddress };
    case 'SET_ARTICLES':
      return { ...state, articles: action.articles };
    case 'SET_BODY':
      return { ...state, body: action.body };
    case 'SET_USER_ADDRESS':
      return { ...state, userAddress: action.userAddress };
    case 'SET_ARTICLE_TITLE':
      return { ...state, articleTitle: action.articleTitle };
    case 'SET_ARTICLE_TYPE':
      return { ...state, articleType: action.articleType };
    case 'SET_ARTICLE_IMAGE_UPLOAD':
      return { ...state, articleImageUpload: action.articleImageUpload };
    case 'SET_IMAGES':
      return { ...state, images: action.images };
    case 'SET_IMAGE_NAME':
      return { ...state, imageName: action.imageName };
    case 'SET_VERIFIED':
      return { ...state, verified: action.verified };
    default:
      return state;
  }
}
