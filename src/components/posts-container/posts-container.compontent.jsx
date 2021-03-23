import React from 'react'
import { Link } from 'react-router-dom'

import ArticleOverview from '../article-overview/article-overview.component'
import CustomButton from '../custom-button/custom-button.component'

import {
    Container,
    EmptyContainer,

} from './posts-container.styles'

const PostsContainer = ({ posts, createRoute }) => {
    return (
        <React.Fragment>
            <Container>
                <Link to={createRoute}>
                    <EmptyContainer
                        whileHover={{
                            scale: 1.05,
                            color: "#BFD600"
                        }}
                        whileTap={{
                            scale: .95
                        }}
                    >
                        <p>+</p>
                    </EmptyContainer>
                </Link>
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
            </Container>

            <CustomButton center pill>Načítať viac</CustomButton>
        </React.Fragment>
    )
}

export default PostsContainer
