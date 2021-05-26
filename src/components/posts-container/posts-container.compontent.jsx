import React from 'react'
import { Link } from 'react-router-dom'

import ArticleOverview from '../article-overview/article-overview.component'
// import CustomButton from '../custom-button/custom-button.component'
import {useMutation} from '@apollo/client'
// import {DELETE_POST} from '../../utils/mutations'
// import {GET_POSTS} from '../../utils/queries'

import Spinner from '../../components/spinner/spinner.component'

import News1 from '../../images/news/new1.png'


import {
    Container,
    EmptyContainer,

} from './posts-container.styles'

const PostsContainer = ({ posts, createRoute, isLight, loading }) => {
    // const [deletePost, { data}] = useMutation(DELETE_POST)

    const handleDeletePost = (id) => {
    //     deletePost({
    //         variables: {id},
    //         refetchQueries: [
    //             {
    //                 query: GET_POSTS
    //             }
    //         ]
    //     })
    }

    return (
        <React.Fragment>
                {loading && <Spinner />}
            <Container>
                {posts && posts.map(({ id, title, description, content, slug, image }, idx) => (
                    <ArticleOverview
                        light={isLight}
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        content={content}
                        deletePost={handleDeletePost}
                        image={{
                            src: image.secure_url,
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
                <Link to={createRoute}>
                    <EmptyContainer
                        whileHover={{
                            scale: 1.05,
                            color: "#BFD600"
                        }}
                        whileTap={{
                            scale: .95
                        }}
                        isLight={isLight}
                    >
                        <p>+</p>
                    </EmptyContainer>
                </Link>
            </Container>

            {/* <CustomButton center pill>Načítať viac</CustomButton> */}
        </React.Fragment>
    )
}

export default PostsContainer
