import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, delPost } from "../actions/postActions";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props);
  }

  onDel(post) {
    this.props.delPost(post.id);
    if (post.id) {
      for (var i = 0; i < this.props.posts.length; i++) {
        if (this.props.posts[i].id === post.id) {
          this.props.posts.splice(i, 1);
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const postItems = this.props.posts.map(post => (
      <div className="post" key={post.id}>
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
        <button
          ref={post.id}
          onClick={this.onDel.bind(this, post)}
          type="button"
          className="btn btn-danger"
        >
          Del
        </button>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  delRes: state.posts.delRes
});

export default connect(
  mapStateToProps,
  { fetchPosts, delPost }
)(Posts);
