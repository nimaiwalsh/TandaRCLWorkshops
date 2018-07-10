import React from 'react'
import styles from '../styles.module.css'

export const Post = (props) => (
  <article className={styles.post}>
    <h3>{props.title}</h3>
    <div>Post ID: {props.postId}</div>
    <div>{props.body}</div>
  </article>
) 

export default Post