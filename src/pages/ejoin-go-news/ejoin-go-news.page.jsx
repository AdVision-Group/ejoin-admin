import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import {useQuery} from '@apollo/client'
import {
    GET_POST_BY_TAG
} from '../../graphql/queries/blog.queries'


import PostsContainer from '../../components/posts-container/posts-container.compontent'


const EjoinGoNewPage = () => {
    const match = useRouteMatch()
    const {loading, error, data} = useQuery(GET_POST_BY_TAG, {
        variables: {
            tag: "GO_BLOG"
        }
    })

    return (
        <div>
            <PostsContainer 
                posts={data?.posts || []} 
                createRoute={`${match.path}/new-post`} 
                loading={loading}    
                blogTag="GO_BLOG"
            />

        </div>
    )
}

export default EjoinGoNewPage

    // const [posts] = useState([
    //     {
    //         image: {
    //             src: News1,
    //             alt: "Ejoin blog image",
    //             width: 846,
    //             height: 542,
    //         },
    //         title: "Nové nabijacie stanice nájdete už aj v Sygic",
    //         slug: `${match.path}/nove-nabijacie-stanice-najdete-uz-aj-v-sygic`,
    //         content: "Už v máji 2020 predstavila navigácia Sygic svoj EV mode, ktorý si môžete aktivovať priamo v aplikácii.Je určený....."
    //     },
    //     {
    //         image: {
    //             src: News2,
    //             alt: "Ejoin blog image",
    //             width: 846,
    //             height: 542,
    //         },
    //         title: "ejoin osádza nové verejné DC stanice. Ako s nimi pracovať?",
    //         slug: `${match.path}/ejoin-osadza-nove-verejne-dc-stanice-ako-s-nimi-pracovat`,
    //         content: "Popri slovenských cestách sa začali objavovať naše nové DC stanice. Funkcionalitou sa veľmi líšia od našich AC staníc..."
    //     },
    //     {
    //         image: {
    //             src: News3,
    //             alt: "Ejoin blog image",
    //             width: 846,
    //             height: 542,
    //         },
    //         title: "Osadili sme štyri nové DC stanice v Bratislave!",
    //         slug: `${match.path}/osadili-sme-styri-nove-dc-stanice-v-bratislave`,
    //         content: "Koncom roka 2020 sme začali osádzať naše nové DC stanice. V Bratislave, ako našom hlavnom meste, sme zatiaľ...."
    //     },
    // ])