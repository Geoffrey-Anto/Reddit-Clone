import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      topic
      id
      created_at
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      id
      created_at
      image
      subreddit_id
      title
      username
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      id
      created_at
      image
      subreddit_id
      title
      username
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
    }
  }
`

export const GET_ALL_POSTS_BY_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      body
      id
      created_at
      image
      subreddit_id
      title
      username
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
    }
  }
`
export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const GET_SUBREDDIT_WITH_LIMIT = gql`
  query MyQuery($limit: Int!){
    getSubredditListLimit(limit: $limit){
      created_at
      id
      topic
    }
  }
`