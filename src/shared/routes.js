import App from './App';
import Blogs from './views/Blogs';
import Blog from './views/Blog';
import { fetchBlogs, fetchBlog } from './utils/requestUtil';

const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/blogs',
    exact: true,
    component: Blogs,
    fetchInitData: () => fetchBlogs()
  },
  {
    path: '/blogs/:id',
    component: Blog,
    fetchInitData: (path = '') => fetchBlog(path.split('/').pop())
  }
];

export default routes;