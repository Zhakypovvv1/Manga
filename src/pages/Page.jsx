import React, { useContext, useEffect } from 'react';

import { CustomContext } from '../Context';



const Page = () => {

const {product, setProducts, getAllProducts} = useContext(CustomContext)
    useEffect(() => {
        getAllProducts()
    },[])


   
    return (
        <section className='Page'>
            <div className="container">
                <div className="main-page">
                    {
                        product.map((item) => (
                            <h2>{item.title}</h2>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Page;