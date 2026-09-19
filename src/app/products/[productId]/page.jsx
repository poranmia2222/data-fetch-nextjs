import React from 'react';
import Img from 'next/image'

const ProductDetailsPage = async ({ params }) => {

    const { productId } = await params;

    const data = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${productId}`).then(res => res.json())

    const {image_link, } = data.data
    return (
        <div>
            <p>{data.name}</p>
            <Img src={image_link} width={600} height={400} alt="" />
        </div>
    );
}

export default ProductDetailsPage;