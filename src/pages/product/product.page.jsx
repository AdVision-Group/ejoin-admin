import React, { lazy, Suspense, useState } from 'react'
import { Switch, useRouteMatch, Redirect } from 'react-router-dom'

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
} from './product.styles'

const ProductBlogPage = lazy(() => import('../product-blog/product-blog.page'))



const ProductPage = () => {
    const match = useRouteMatch()
    const [showAside, setShowAside] = useState(false)

    const navItems = [
        {
            Icon: NewIcon,
            slug: `${match.path}/zakazky`,
            name: "Zákazky"
        },
        {
            Icon: RealisationIcon,
            slug: `${match.path}/blog`,
            name: "Blog"
        },
    ]

    return (
        <MainContainer>
            <AsideContainer
                isOpen={showAside}
            >
                <AsideNavbar navItems={navItems} light={true} />
                <HamButton isLight={true} isOpen={showAside} onClick={() => setShowAside(!showAside)}>
                    <Ham isLight={true} isOpen={showAside}>
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
                        <ProtectedRoute exact path={`${match.path}/`} component={() => <Redirect to={`${match.path}/blog`}/>} />
                        <ProtectedRoute exact path={`${match.path}/blog`} component={ProductBlogPage} />
                        {/* <ProtectedRoute exact path={`${match.path}/news/new-post`} component={EjoinGoNewPost} />

                        <ProtectedRoute exact path={`${match.path}/realisations`} component={EjoinGoRealisationsPage} />
                        <ProtectedRoute exact path={`${match.path}/realisations/new-realisation`} component={EjoinGoNewRealisation} /> */}
                    </Switch>

                </Suspense>
            </SectionContainer>
        </MainContainer>
    )
}

export default ProductPage  
