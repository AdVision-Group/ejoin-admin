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

export const GET_POST_DATA = gql`
    query GetPost ($id: ID){
        post(id: $id) {
            id
            title
            date
            slug
            pageViews
            content
            draft
            tags
            description
            images {
                access_mode
                asset_id
                batchId
                bytes
                created_at
                etag
                format
                height
                id
                original_filename
                path
                placeholder
                public_id
                tags
                resource_type
                secure_url
                signature
                thumbnail_url
                type
                url
                version
                version_id
                width
            }
            image {
                access_mode
                asset_id
                batchId
                bytes
                created_at
                etag
                format
                height
                id
                original_filename
                path
                placeholder
                public_id
                tags
                resource_type
                secure_url
                signature
                thumbnail_url
                type
                url
                version
                version_id
                width
            }
        }
    }

`