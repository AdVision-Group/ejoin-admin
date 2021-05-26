import {gql} from '@apollo/client'

export const GET_POST_BY_TAG = gql`
    query getPosts($tag: Tags){
        posts (tag: $tag){
            id
            title
            date
            slug
            description
            pageViews
            content
            draft
            image {
                secure_url
            }
        }
    }
` 
