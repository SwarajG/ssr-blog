import React, { Component } from 'react';
import { css } from 'emotion';
import actions from '../../utils/actions';

const blogWrapper = css`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const input = css`
  text-align: center;
`;

const inputTitle = css`
  border: none transparent;
  outline: none;
  padding: 5px;
  font-size: 32px;
  letter-spacing: 0.9px;
  margin-bottom: 20px;
`;

const inputContent = css`
  border: none transparent;
  outline: none;
  padding: 5px;
  font-size: 18px;
  line-height: 18px;
`;

export default class Blog extends Component {
  constructor(props) {
    super(props);
    const isBrowser = process.env.IS_BROWSER;
    let store = props.store;
    let currentBlog = {};
    if (isBrowser) {
      const preloadedState = window.__PRELOADED_STATE__;
      delete window.__PRELOADED_STATE__;
      currentBlog = preloadedState || {};
    } else {
      store = props.staticContext.store;
      currentBlog = props.staticContext.data || {};
    }
    this.store = store;
    this.state = {
      editable: false
    };
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch({
      blog: currentBlog,
      type: actions.ADD_CURRENT_BLOG
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this;
    const blog = store.getState().currentBlog;
    const { title, content } = blog;
    const { TITLE_UPDATE_LOCAL, CONTENT_UPDATE_LOCAL } = actions;
    return (
      <div className={blogWrapper}>
        <input value={title} className={`${input} ${inputTitle}`} onChange={(e) => {
          store.dispatch({
            title: e.target.value,
            type: TITLE_UPDATE_LOCAL
          })
        }} />
        <input value={content} className={`${input} ${inputContent}`} onChange={(e) => {
          store.dispatch({
            content: e.target.value,
            type: CONTENT_UPDATE_LOCAL
          })
        }} />
      </div>
    )
  }
}