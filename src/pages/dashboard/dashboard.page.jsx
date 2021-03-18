import React from 'react'

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
        </DashboardContainer>
    )
}

export default DashboardPage
