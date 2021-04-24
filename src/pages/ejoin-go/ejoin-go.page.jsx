import React, { lazy, Suspense } from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'

import NewsProvider from '../../context/news/news.context'

import AsideNavbar from '../../components/aside-navbar/aside-navbar.component'
import ProtectedRoute from '../../components/protected-route/protected-route.component'
import LoadingFallback from '../../components/loading-fallback/loading-fallback.component'

import { ReactComponent as NewIcon } from '../../images/icons/new-icon.svg'
import { ReactComponent as RealisationIcon } from '../../images/icons/realisation-icon.svg'

import {
    MainContainer,
    SectionContainer,
} from './ejoin-go.styles'

const EjoinGoNewPage = lazy(() => import('../ejoin-go-news/ejoin-go-news.page'))
const EjoinGoRealisationsPage = lazy(() => import('../ejoin-go-realisations/ejoin-go-realisations.page'))
const EjoinGoNewPost = lazy(() => import('../ejoin-go-new-post/ejoin-go-new-post.page'))
const EjoinGoNewRealisation = lazy(() => import('../ejoin-go-new-realisation/ejoin-go-new-realisation.page'))



const EjoinGoPage = () => {
    const match = useRouteMatch()

    const navItems = [
        {
            Icon: NewIcon,
            slug: `${match.path}/news`,
            name: "Novinky"
        },
        {
            Icon: RealisationIcon,
            slug: `${match.path}/realisations`,
            name: "Realizácie"
        },
    ]

    return (
        <MainContainer>
            <AsideNavbar navItems={navItems} />
            <SectionContainer>
                <Suspense fallback={<LoadingFallback />}>
                    <Switch>
                        <NewsProvider>
                            <ProtectedRoute exact path={`${match.path}/news`} component={EjoinGoNewPage} />
                            <ProtectedRoute exact path={`${match.path}/news/new-post`} component={EjoinGoNewPost} />
                        </NewsProvider>
                        <ProtectedRoute exact path={`${match.path}/realisations`} component={EjoinGoRealisationsPage} />
                        <ProtectedRoute exact path={`${match.path}/realisations/new-realisation`} component={EjoinGoNewRealisation} />
                    </Switch>

                </Suspense>
            </SectionContainer>
        </MainContainer>
    )
}

export default EjoinGoPage
