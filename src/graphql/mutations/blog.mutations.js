import {gql} from '@apollo/client'

export const CREATE_BLOG_POST = gql`
    mutation CreatePost (
        $tags: [Tags]
        $title: String!
        $image: ImageInput
        $images: [ImageInput]
        $description: String
        $content: String
        $draft: Boolean
    ){
        createPost(
            tags: $tags 
            title: $title
            image: $image
            images: $images
            description: $description
            content: $content 
            draft: $draft 
        ) {
            id
            title
            date
            description
            slug
            pageViews
            content
            draft
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

export const UPDATE_BLOG_POST = gql`
    mutation UpdatePost (
        $id: ID!
        $tags: [Tags]
        $title: String
        $image: ImageInput
        $images: [ImageInput]
        $description: String
        $content: String
        $draft: Boolean
    ){
        updatePost(
            id: $id
            tags: $tags 
            title: $title
            image: $image
            images: $images
            description: $description
            content: $content 
            draft: $draft 
        ) {
            id
            title
            date
            description
            slug
            pageViews
            content
            draft
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