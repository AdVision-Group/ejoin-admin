import React, { useState } from 'react'

import PostsContainer from '../../components/posts-container/posts-container.compontent'

import News1 from '../../images/news/new1.png'
import News2 from '../../images/news/new2.png'
import News3 from '../../images/news/new3.png'


const EjoinGoNewPage = () => {
    const [posts] = useState([
        {
            image: {
                src: News1,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "Nové nabijacie stanice nájdete už aj v Sygic",
            slug: 'nove-nabijacie-stanice-najdete-uz-aj-v-sygic',
            content: "Už v máji 2020 predstavila navigácia Sygic svoj EV mode, ktorý si môžete aktivovať priamo v aplikácii.Je určený....."
        },
        {
            image: {
                src: News2,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "ejoin osádza nové verejné DC stanice. Ako s nimi pracovať?",
            slug: 'ejoin-osadza-nove-verejne-dc-stanice-ako-s-nimi-pracovat',
            content: "Popri slovenských cestách sa začali objavovať naše nové DC stanice. Funkcionalitou sa veľmi líšia od našich AC staníc..."
        },
        {
            image: {
                src: News3,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "Osadili sme štyri nové DC stanice v Bratislave!",
            slug: 'osadili-sme-styri-nove-dc-stanice-v-bratislave',
            content: "Koncom roka 2020 sme začali osádzať naše nové DC stanice. V Bratislave, ako našom hlavnom meste, sme zatiaľ...."
        },
    ])


    return (
        <div>
            <PostsContainer posts={posts} />

        </div>
    )
}

export default EjoinGoNewPage
