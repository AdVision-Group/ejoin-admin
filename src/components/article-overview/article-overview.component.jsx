import React from 'react'
import { AnimatePresence } from 'framer-motion'

import {
    ArticleContainer,
    ArticleHeader,
    HeaderContainer,
    ImageContainer,
    ArticleBody,
    OptionsContainer,
    DeleteButton,
    OpenButton
} from './article-overview.styles'

const ArticleOverview = ({ light, id, title, description, content, image, path, deletePost, ...otherProps }) => {
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <ArticleContainer
                isLight={light}

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
                <ArticleHeader 
                    isLight={light}
                >
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
                    <HeaderContainer
                        isLight={light}
                    >
                        <h3>{title}</h3>
                    </HeaderContainer>
                </ArticleHeader>
                <ArticleBody>
                    <p>{description}</p>
                    <OptionsContainer>
                        <OpenButton pill>
                            Zobraziť
                        </OpenButton>
                        <DeleteButton pill onClick={() => deletePost(id)}>
                            Odstrániť
                        </DeleteButton>
                    </OptionsContainer>
                </ArticleBody>
            </ArticleContainer>
        </AnimatePresence>

    )
}

export default ArticleOverview
