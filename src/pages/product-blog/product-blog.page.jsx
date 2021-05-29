import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import {useQuery} from '@apollo/client'
import {
    GET_POST_BY_TAG
} from '../../graphql/queries/blog.queries'


import PostsContainer from '../../components/posts-container/posts-container.compontent'


const ProductPage = () => {
    const match = useRouteMatch()
    const {loading, error, data} = useQuery(GET_POST_BY_TAG, {
        variables: {
            tag: "PRODUCT_BLOG"
        }
    })


    return (
        <div>

            <PostsContainer 
                isLight={true} 
                posts={data?.posts || []} 
                createRoute={`${match.path}/novy-prispevok`} 
                blogTag="PRODUCT_BLOG"
                loading={loading}    
            />
        </div>
    )
}

export default ProductPage
