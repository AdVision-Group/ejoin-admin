import {gql} from '@apollo/client'

export const GET_POSTS = gql`
    query {
        posts {
            id
            type
            name
            date
            description
            slug
            draft
            html
        }
    }
` 
