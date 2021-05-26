import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
// import {useFetch} from '../../hooks/usefetch'

import {useQuery} from '@apollo/client'
import {
    GET_POST_BY_TAG
} from '../../graphql/queries/product.queries'

import {useNewsContext} from '../../context/news/news.context'

import PostsContainer from '../../components/posts-container/posts-container.compontent'

// import News2 from '../../images/news/new2.png'
// import News3 from '../../images/news/new3.png'


const ProductPage = () => {
    const match = useRouteMatch()
    const {loading, error, data} = useQuery(GET_POST_BY_TAG)

    console.log(loading)
    console.log(error)
    console.log(data)


    return (
        <div>
            <PostsContainer 
                isLight={true} 
                posts={data?.posts || []} 
                createRoute={`${match.path}/new-post`} 
                loading={loading}    
            />
        </div>
    )
}

export default ProductPage

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