import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import EjoinLogo from '../../images/logo/ejoin-logo.png'
import OperatorLogo from '../../images/logo/ejoin-go-logo.png'
import ProductLogo from '../../images/logo/product-logo.png'

import {
    DashboardContainer,
    HeaderContainer,
    OperatorContainer,
    ProductContainer,
    ContentContainer
} from './dashboard.styles'

const DashboardPage = () => {
    const { path } = useRouteMatch()


    return (
        <DashboardContainer>
            <HeaderContainer>
                <div>
                    <img
                        src={EjoinLogo}
                        alt="ejoin logo"
                    />
                </div>
                <h1>Admin</h1>
            </HeaderContainer>
            <Link to={`${path}/ejoin-go`}>
                <OperatorContainer>
                    <ContentContainer
                        whileHover={{ scale: 1.2 }}
                    >
                        <img
                            src={OperatorLogo}
                            alt="operator"
                        />
                    </ContentContainer>
                </OperatorContainer>
            </Link>
            <Link to={`${path}/product`}>
                <ProductContainer>
                    <ContentContainer
                        whileHover={{ scale: 1.2 }}
                    >
                        <h2>Produkt</h2>
                        <img
                            src={ProductLogo}
                            alt='product'
                        />
                    </ContentContainer>
                </ProductContainer>
            </Link>
        </DashboardContainer>
    )
}

export default DashboardPage
