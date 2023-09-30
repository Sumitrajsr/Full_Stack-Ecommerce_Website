// import NavBar from "../features/navbar/Navbar";
import { Navbar } from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import React from 'react'

const ProductDetailPage = () => {
  return (
    <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
    </div>
  )
}

export default ProductDetailPage