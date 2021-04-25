import React from 'react'
import {Image} from "../components/gatsby-images/image"

const Product = ({pageContext}) => {
    const product = pageContext
    return (
        <div className="banner" style={{zIndex: 1}}>
            <div className="inner-banner">
                <div className="container fluid">
                    <h1 className="main-headline">
                        {product.title}
                    </h1>
                    <div className="image">
                        <Image src={product.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
