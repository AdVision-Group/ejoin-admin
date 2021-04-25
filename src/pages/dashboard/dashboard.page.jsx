import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import {ReactComponent as EjoinLogo} from '../../images/logo/ejoin-logo.svg';

import OperatorBg from '../../images/dashboard/operator_bg.png'
import OperatorLogo from '../../images/logo/ejoin-go-logo.png'
import ProductBg from '../../images/dashboard/product_bg.png'
import ProductLogo from '../../images/dashboard/product_logo.png'

import {
    DashboardContainer,
    HeaderContainer,
    OperatorContainer,
    ProductContainer,
    ContentContainer,
    LogoContainer,
    Title,
    OperatorLogoContainer,
    OperatorBackgroundImage,
    ProductBackgroundImage,
    ProductLogoContainer
} from './dashboard.styles'

const DashboardPage = () => {
    const { path } = useRouteMatch()


    return (
        <DashboardContainer>
            <HeaderContainer>
                <LogoContainer>
                    <EjoinLogo/>
                </LogoContainer>
                <Title>Admin</Title>
            </HeaderContainer>
            <Link to={`${path}/ejoin-go`}>
                <OperatorContainer>
                    <ContentContainer
                        whileHover={{ scale: 1.2 }}
                    >
                        <OperatorBackgroundImage
                            src={OperatorBg}
                            alt="operator bg image"
                        />
                        <OperatorLogoContainer
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
                        <ProductBackgroundImage
                            src={ProductBg}
                            alt="product bg image"
                        />
                        <ProductLogoContainer
                            src={ProductLogo}
                            alt="operator"
                        />
                        <h2>Produkt</h2>
                    </ContentContainer>
                </ProductContainer>
            </Link>
        </DashboardContainer>
    )
}

export default DashboardPage
