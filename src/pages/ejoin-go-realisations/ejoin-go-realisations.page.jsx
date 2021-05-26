import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import PostsContainer from '../../components/posts-container/posts-container.compontent'

import {useQuery} from '@apollo/client'
import {
    GET_POST_BY_TAG
} from '../../graphql/queries/product.queries'

// import News1 from '../../images/realizations/realization1.png'
// import News2 from '../../images/realizations/realization2.png'
// import News3 from '../../images/realizations/realization3.png'

const EjoinGoRealisationsPage = () => {
    const match = useRouteMatch()
    const {loading, error, data} = useQuery(GET_POST_BY_TAG, {
        variables: {
            tag: "GO_REALIZATION"
        }
    })

    console.log(loading)
    console.log(error)
    console.log(data)

    return (
        <div>
            <PostsContainer 
                posts={data?.posts || []} 
                createRoute={`${match.path}/new-realisation`} 
                loading={loading}    
            />

        </div>
    )
}

export default EjoinGoRealisationsPage
