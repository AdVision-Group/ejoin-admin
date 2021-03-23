import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import PostsContainer from '../../components/posts-container/posts-container.compontent'

import News1 from '../../images/realizations/realization1.png'
import News2 from '../../images/realizations/realization2.png'
import News3 from '../../images/realizations/realization3.png'

const EjoinGoRealisationsPage = () => {
    const match = useRouteMatch()

    const [posts] = useState([
        {
            image: {
                src: News1,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "Stanice pre obce",
            slug: `${match.path}/stanice-pre-obce`,
            content: "Vďaka Ministerstvu hospodárstva Slovenskej republiky sme v roku 2020 vybudovali AC nabíjacie stanice až v 35 obciach na Slovensku...."
        },
        {
            image: {
                src: News2,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "Stanice pre obchodné centrá",
            slug: `${match.path}/stanice-pre-obchodne-centra`,
            content: "Popri nákupoch v obchodných centrách sa môže Váš elektromobil v pohodlí nabíjať na našej AC alebo DC stanici...."
        },
        {
            image: {
                src: News3,
                alt: "Ejoin blog image",
                width: 846,
                height: 542,
            },
            title: "Stanice pre čerpacie stanice",
            slug: `${match.path}/stanice-pre-cerpacie-stanice`,
            content: "Nie len benzín, ale už aj elektrické autá „natankujete“ na čerpacích staniciach! Popri cestovnej pauze nechajte svoje auto oddýchnuť a dobiť baterky sebe aj svojmu autu."
        },
    ])

    return (
        <div>
            <PostsContainer posts={posts} createRoute={`${match.path}/new-realisation`} />

        </div>
    )
}

export default EjoinGoRealisationsPage
