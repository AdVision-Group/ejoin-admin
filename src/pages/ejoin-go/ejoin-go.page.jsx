import React, { lazy, Suspense, useState } from 'react'
import { Switch, useRouteMatch, Redirect } from 'react-router-dom'

import NewsProvider from '../../context/news/news.context'

import AsideNavbar from '../../components/aside-navbar/aside-navbar.component'
import ProtectedRoute from '../../components/protected-route/protected-route.component'
import LoadingFallback from '../../components/loading-fallback/loading-fallback.component'

import { ReactComponent as NewIcon } from '../../images/icons/new-icon.svg'
import { ReactComponent as RealisationIcon } from '../../images/icons/realisation-icon.svg'

import {
    MainContainer,
    SectionContainer,
    AsideContainer,
    HamButton,
    Ham
} from './ejoin-go.styles'

const EjoinGoNewPage = lazy(() => import('../ejoin-go-news/ejoin-go-news.page'))
const EjoinGoRealisationsPage = lazy(() => import('../ejoin-go-realisations/ejoin-go-realisations.page'))
const EjoinGoNewPost = lazy(() => import('../ejoin-go-new-post/ejoin-go-new-post.page'))
const EjoinGoNewRealisation = lazy(() => import('../ejoin-go-new-realisation/ejoin-go-new-realisation.page'))



const EjoinGoPage = () => {
    const match = useRouteMatch()
    const [showAside, setShowAside] = useState(false)

    const navItems = [
        {
            Icon: NewIcon,
            slug: `${match.path}/novinky`,
            name: "Novinky"
        },
        {
            Icon: RealisationIcon,
            slug: `${match.path}/realizacie`,
            name: "Realizácie"
        },
    ]

    return (
        <MainContainer>
            <AsideContainer
                isOpen={showAside}
            >
                <AsideNavbar navItems={navItems} />
                <HamButton isOpen={showAside} onClick={() => setShowAside(!showAside)}>
                    <Ham>
                        <div/>
                        <div/>
                        <div/>
                    </Ham>
                    <label>menu</label>
                </HamButton>
            </AsideContainer>
            <SectionContainer>
                <Suspense fallback={<LoadingFallback />}>
                    <Switch>
                        <NewsProvider>
                            <ProtectedRoute exact path={`${match.path}/`} component={() => <Redirect to={`${match.path}/news`}/>} />
                            <ProtectedRoute exact path={`${match.path}/novinky`} component={EjoinGoNewPage} />
                            <ProtectedRoute exact path={`${match.path}/novinky/:slug`} component={EjoinGoNewPost} />
                            <ProtectedRoute exact path={`${match.path}/realizacie`} component={EjoinGoRealisationsPage} />
                            <ProtectedRoute exact path={`${match.path}/realizacie/:slug`} component={EjoinGoNewRealisation} />
                        </NewsProvider>
                    </Switch>

                </Suspense>
            </SectionContainer>
        </MainContainer>
    )
}

export default EjoinGoPage
