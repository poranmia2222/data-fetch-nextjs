import React from 'react';
import Img from 'next/image'
import Link from 'next/link';

export const metadata = {
    title: 'My Products Details',
    description: 'My personal blog website',
};

const ProductDetails = ({ product }) => {
    const { id, dish_name } = product;

    return (
        <div>
            <p>{dish_name} ok</p>
            <Img src="https://images.unsplash.com/photo-1789464354568-204db6f809f8?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={500}
                height={500} />
            <Link href={`/products/${id}`}><button className='btn'>visit</button></Link>
        </div>
    );
};

export default ProductDetails;