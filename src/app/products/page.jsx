import React from 'react';
import ProductDetails from '../component/ProductDetails';

export const metadata = {
  title: 'My Products',
  description: 'My personal blog website',
};

const getProducts = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods", {cache: "no-store"})

    if(!res.ok){
        throw new Error ("data doesn't loaded.")
    }
    return res.json()
}

const ProductsPage = async() => {
    const data = await getProducts()
    const products = data.data
    return (
        <div>
            {
                products.map(product => <ProductDetails key={product.id} product={product}></ProductDetails>)
            }
        </div>
    );
};

export default ProductsPage;