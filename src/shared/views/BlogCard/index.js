import React, { Component } from 'react';
import { css } from 'emotion';

const cardWrapper = backgroundColor => css`
  width: 250px;
  padding: 10px 25px;
  margin-right: 10px;
  background-color: ${backgroundColor};
  color: #FFF;
`;

const colors = ['#E91E63', '#00BCD4', '#CDDC39', '#4CAF50', '#673AB7'];

export default class BlogCard extends Component {
  onBlogClick = () => {
    const { _id } = this.props.blog;
    window.location.href = `/blogs/${_id}`;
  }

  render() {
    const { blog, index } = this.props;
    const backgroundColor = colors[index % 5];
    return (
      <div className={cardWrapper(backgroundColor)} onClick={this.onBlogClick}>
        <p>{blog.title}</p>
      </div>
    )
  }
}