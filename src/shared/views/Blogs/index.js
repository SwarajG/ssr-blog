import React, { Component } from 'react';
import { css } from 'emotion';
import BlogCard from '../BlogCard';
import actions from '../../utils/actions';

const blogWrapper = css`
  display: flex;
`;

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    const isBrowser = process.env.IS_BROWSER;
    let store = props.store;
    let blogsList = [];
    if (isBrowser) {
      const preloadedState = window.__PRELOADED_STATE__;
      delete window.__PRELOADED_STATE__;
      blogsList = preloadedState || [];
    } else {
      store = props.staticContext.store;
      blogsList = props.staticContext.data || [];
    }
    this.store = store;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch({
      type: actions.ADD_BLOG_LIST,
      blogsList
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderBlog = (blog, index) => <BlogCard blog={blog} index={index} />

  render() {
    const blogs = this.store.getState().blogs;
    return (
      <div className={blogWrapper}>
        {blogs.map(this.renderBlog)}
      </div>
    )
  }
}