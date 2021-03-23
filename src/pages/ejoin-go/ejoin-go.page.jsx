import React, { lazy, Suspense } from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'

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



const EjoinGoPage = () => {
    const match = useRouteMatch()

    console.log(match)

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
                        <ProtectedRoute exact path={`${match.path}/news`} component={EjoinGoNewPage} />
                        <ProtectedRoute exact path={`${match.path}/realisations`} component={EjoinGoRealisationsPage} />
                    </Switch>

                </Suspense>
            </SectionContainer>
        </MainContainer>
    )
}

export default EjoinGoPage
