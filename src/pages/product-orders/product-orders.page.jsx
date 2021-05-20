import React from 'react'

import {
    ProductOrdersContainer,
    ProductsContainer,
    EmptyContainer,
    ImageContainer,
    OptionsContainer,
    ContentContainer,
    DeligateButton,
    UpdateButton,
    ProductOverviewContainer
} from './product-orders.styles'

const ProductOrderPage = () => {
    return (
        <ProductOrdersContainer>
            <ProductsContainer>
                <EmptyContainer>
                    {"+"}
                </EmptyContainer>

                <ProductOverviewContainer>
                    <ImageContainer>
                        IMG
                    </ImageContainer>
                    <ContentContainer>
                        <h2>Product name</h2>
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </ContentContainer>
                    <OptionsContainer>
                        <DeligateButton>Spracovat</DeligateButton>
                        <UpdateButton>Upravit</UpdateButton>
                    </OptionsContainer>
                </ProductOverviewContainer>
             
                <ProductOverviewContainer>
                    <ImageContainer>
                        IMG
                    </ImageContainer>
                    <ContentContainer>
                        <h2>Product name</h2>
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </ContentContainer>
                    <OptionsContainer>
                        <DeligateButton>Spracovat</DeligateButton>
                        <UpdateButton>Upravit</UpdateButton>
                    </OptionsContainer>
                </ProductOverviewContainer>
             
                <ProductOverviewContainer>
                    <ImageContainer>
                        IMG
                    </ImageContainer>
                    <ContentContainer>
                        <h2>Product name</h2>
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </ContentContainer>
                    <OptionsContainer>
                        <DeligateButton>Spracovat</DeligateButton>
                        <UpdateButton>Upravit</UpdateButton>
                    </OptionsContainer>
                </ProductOverviewContainer>
             
                <ProductOverviewContainer>
                    <ImageContainer>
                        IMG
                    </ImageContainer>
                    <ContentContainer>
                        <h2>Product name</h2>
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </ContentContainer>
                    <OptionsContainer>
                        <DeligateButton>Spracovat</DeligateButton>
                        <UpdateButton>Upravit</UpdateButton>
                    </OptionsContainer>
                </ProductOverviewContainer>
             
            </ProductsContainer>
        </ProductOrdersContainer>
    )
}

export default ProductOrderPage
