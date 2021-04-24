import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import {
    ArticleContainer,
    ArticleHeader,
    HeaderContainer,
    ImageContainer,
    ArticleBody,
    ShowMoreButton
} from './article-overview.styles'

const ArticleOverview = ({ id, title, description, content, image, path, deletePost, ...otherProps }) => {
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <ArticleContainer
                key={id}

                initial={{
                    // opacity: 0,
                    // y: -200,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    z: 0,
                }}


                transition={{
                    // delay: `0.${idx}`,
                    ease: "easeInOut",
                    duration: .4
                }}

                {...otherProps}

            >
                <ArticleHeader>
                    <ImageContainer
                        initial={{
                            opacity: 0,
                            // filter: "blur(.5rem)",
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0)",
                        }}
                        exit={{
                            opacity: 0,
                            // filter: "blur(.5rem)",
                        }}
                        transition={{
                            ease: "easeInOut",
                            // delay: `0.${idx}`,
                            // duration: .4
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </ImageContainer>
                    <HeaderContainer>
                        <h3>{title}</h3>
                    </HeaderContainer>
                </ArticleHeader>
                <ArticleBody>
                    <p>{description}</p>
                    <button onClick={() => deletePost(id)}>
                        Odstrániť
                    </button>
                    <Link href={path}>
                        <ShowMoreButton>Zisti viac {"->"}</ShowMoreButton>
                    </Link>
                </ArticleBody>
            </ArticleContainer>
        </AnimatePresence>

    )
}

export default ArticleOverview
