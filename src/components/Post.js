import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost, createCom } from "../actions/postActions";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const com = {
      comId: this.props.post.comments.length + 1,
      body: this.state.body
    };
    console.log(com);

    this.props.createCom(com);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    console.log(this.props.post);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.com) {
      this.props.post.comments.push(nextProps.com);
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>not found</div>;
    }
    const comments = post.comments.map(com => (
      <div className="post-comment" key={com.id}>
        <h3>Comment №{com.id}</h3>
        <p>{com.body}</p>
      </div>
    ));
    const postEl = (
      <div className="post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="post-comments">{comments}</div>
      </div>
    );
    console.log(post);
    return (
      <div>
        <h1>Post</h1>
        {postEl}
        <div className="postsForm">
          <h1>Add Comment</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Body: </label>
              <br />
              <textarea
                className="form-control"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
            </div>
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <Link to="/posts">Back</Link>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object,
  com: PropTypes.object
};

const mapStateToProps = state => ({
  post: state.posts.itemID,
  com: state.posts.com
});

export default connect(
  mapStateToProps,
  { getPost, createCom }
)(Post);
