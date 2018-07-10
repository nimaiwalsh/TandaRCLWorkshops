import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from '../styles.module.css';
import Post from './Post';

class Home extends Component {
  componentDidMount() {
    axios
      .get('http://social.workshops.tanda.co/posts', {
        headers: {
          Authorization: `bearer ${this.props.token}`
        }
      })
      .then(response => {
        this.props.dispatch({
          type: 'posts',
          payload: response.data
        });
      });
  }

  handleLogOut = () => {
    this.props.dispatch({
      type: 'logout'
    })
  }

  render() {
    const { userName, posts } = this.props;
    return (
      <div className={styles.home}>
        <header>
          <div>Hello, <strong> {userName} </strong></div>
          <div className={styles.logoutBtn} onClick={this.handleLogOut}>Logout</div>
        </header>
        <section>
          {posts ? (
            <React.Fragment>
              <h3>You have {posts.postCount} awesome posts</h3>
              {posts.post.map(post => (
                <Post
                  key={post.id}
                  postId={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </React.Fragment>
          ) : (
            <div>no posts</div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.userName,
    token: state.token,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
