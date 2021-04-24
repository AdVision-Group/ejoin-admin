import React from 'react'
import { Link } from 'react-router-dom'

import ArticleOverview from '../article-overview/article-overview.component'
// import CustomButton from '../custom-button/custom-button.component'
import {useMutation} from '@apollo/client'
import {DELETE_POST} from '../../utils/mutations'
import {GET_POSTS} from '../../utils/queries'


import News1 from '../../images/news/new1.png'


import {
    Container,
    EmptyContainer,

} from './posts-container.styles'

const PostsContainer = ({ posts, createRoute }) => {
    const [deletePost, { data}] = useMutation(DELETE_POST)

    const handleDeletePost = (id) => {
        deletePost({
            variables: {id},
            refetchQueries: [
                {
                    query: GET_POSTS
                }
            ]
        })
    }

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
                {posts && posts.map(({ id, name, description, html, slug, }, idx) => (
                    <ArticleOverview
                        key={id}
                        id={id}
                        title={name}
                        description={description}
                        content={html}
                        deletePost={handleDeletePost}
                        image={{
                            src: News1,
                            alt: "Ejoin blog image",
                            width: 846,
                            height: 542,
                        }}
                        path={`/novinky/${slug}`}
                        isLast={posts.length === idx}
                        exit={{
                            // opacity: 0,
                            x: "-115%",
                        }}
                    />
                ))}
            </Container>

            {/* <CustomButton center pill>Načítať viac</CustomButton> */}
        </React.Fragment>
    )
}

export default PostsContainer
