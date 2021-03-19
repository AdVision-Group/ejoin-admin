import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import EjoinLogo from '../../images/logo/ejoin-logo.png'
import ArticleOverview from '../../components/article-overview/article-overview.component'
import CustomButton from '../../components/custom-button/custom-button.component'


import News1 from '../../images/news/new1.png'
import News2 from '../../images/news/new2.png'
import News3 from '../../images/news/new3.png'

import {
    MainContainer,
    AsideContainer,
    PostsContainer,
    SectionContainer,
    EmptyContainer
} from './ejoin-go.styles'

const EjoinGoPage = () => {
    const [posts, setPosts] = useState([
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
        <MainContainer>
            <AsideContainer>
                <div>
                    <img
                        src={EjoinLogo}
                        alt="ejoin logo"
                    />
                </div>
                <div>
                    <p><span>Prihlásený:</span> Meno Priezvisko</p>
                </div>

                <ul>
                    <li>
                        <Link to='/'>Novinky</Link>
                    </li>
                    <li>
                        <Link to='/realizacie'>Realizácie</Link>
                    </li>
                </ul>
            </AsideContainer>
            <SectionContainer>
                <PostsContainer>
                    <EmptyContainer
                        whileHover={{
                            scale: 1.05
                        }}
                        whileTap={{
                            scale: .95
                        }}
                    >
                        <p>+</p>
                    </EmptyContainer>
                    {posts.map(({ title, content, image, slug }, idx) => (
                        <ArticleOverview
                            key={idx}
                            title={title}
                            content={content}
                            image={image}
                            path={`/novinky/${slug}`}
                            isLast={posts.length === idx}
                            exit={{
                                // opacity: 0,
                                x: "-115%",
                            }}
                        />
                    ))}
                </PostsContainer>

                <CustomButton center pill>Načítať viac</CustomButton>
            </SectionContainer>
        </MainContainer>
    )
}

export default EjoinGoPage
