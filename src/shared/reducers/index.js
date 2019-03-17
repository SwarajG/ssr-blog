import actionsList from '../utils/actions';

function blogReducer(state = {}, action) {
  switch (action.type) {
    case actionsList.ADD_BLOG:  {
      return action.blog;
    }
    default:
      return state;
  }
}

const blogsLocalReducer = (state = [], action) => {
  switch (action.type) {
    case actionsList.ADD_BLOG:
      return [
        ...state,
        blogReducer(undefined, action)
      ]
    case actionsList.ADD_BLOG_LIST:
      return [
        ...state,
        ...action.blogsList
      ]
    default:
      return state;
  }
}

const currentBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case actionsList.CONTENT_UPDATE_LOCAL:
      return {
        ...state,
        content: action.content
      };
    case actionsList.TITLE_UPDATE_LOCAL:
      return {
        ...state,
        title: action.title
      };
    case actionsList.ADD_CURRENT_BLOG:
      return {
        ...state,
        ...action.blog
      };
    default:
      return state;
  }
}

export const blogs = blogsLocalReducer;
export const currentBlog = currentBlogReducer;