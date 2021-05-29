import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'

import {useLoadingModal} from '../../hooks/useLoadingModal'

import ArticleOverview from '../article-overview/article-overview.component'
import {useMutation} from '@apollo/client'
import {DELETE_POST} from '../../utils/mutations'
import {GET_POST_BY_TAG} from '../../graphql/queries/blog.queries'

import Spinner from '../../components/spinner/spinner.component'
import ConfirmModal from '../../components/modals/confirm-modal/confirm-modal.component'
import LoadingModal from '../../components/modals/loading-modal/loading-modal.component'


import {
    Container,
    EmptyContainer,

} from './posts-container.styles'

const PostsContainer = ({ posts, createRoute, isLight, loading, blogTag }) => {
    const history = useHistory()

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)

    const {
        isLoading,
        message,
        status,
        toggleLoading,
        setStatus,
        setMessage,
        resetModal
    } = useLoadingModal()

    const [deletePost, {loading: deletePostLoading}] = useMutation(DELETE_POST,{
        onCompleted: (data) => {
            console.log("Post DELETED")
            console.log(data)
            setStatus("SUCCESS")
            setMessage("Príspevok bol úspešne odstránení")
            setTimeout(() => {
                resetModal()
            }, 1000);
        },
        onError: (data) => {
            console.log("Post DELETED")
            console.log(data)
            setStatus("ERROR")
            setMessage("Niečo sa pokazilo...")
            setTimeout(() => {
                resetModal()
            }, 1000);
        }
    })

    const handleDeletePost = (id) => {
        toggleLoading(true)

        deletePost({
            variables: {id},
            refetchQueries: [
                {
                    query: GET_POST_BY_TAG,
                    variables: {
                        tag: blogTag
                    }
                }
            ]
        })
    }

    const handleDeleteClick = (id) => {
        console.log("CLICK")
        console.log(id)
        setShowConfirmModal(true)
        setSelectedPost(id)
    }

    return (
        <React.Fragment>
            {showConfirmModal && (
                <ConfirmModal
                    close={() => setShowConfirmModal(false)}
                    onCancel={() => setShowConfirmModal(false)}
                    onConfirm={() => {
                        console.log("DELETE POST")
                        setShowConfirmModal(false)
                        handleDeletePost(selectedPost)
                    }}
                />
            )}
            {loading && <Spinner />}
            {isLoading && (
                <LoadingModal
                    loading={deletePostLoading}
                    status={status}
                    message={message}
                />
            )}
            <Container>
                {posts && posts.map(({ id, title, description, content, slug, image }, idx) => (
                    <ArticleOverview
                        light={isLight}
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        content={content}
                        handleClick={() => history.push(`${history.location.pathname}/${id}`)}
                        deletePost={() => handleDeleteClick(id)}
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
