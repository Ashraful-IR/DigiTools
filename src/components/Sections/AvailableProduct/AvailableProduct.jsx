import React, { use } from 'react';
import Card from '../../ui/Card/Card';

const AvailableProduct = ({ products, setSelectedProducts, selectedProducts }) => {
    const productDetails = use(products);
    return (
        <div className="rounded-xl p-2 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {productDetails.map((product) => (
                    <div key={product.id}>
                      <Card products={product} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} />
                    </div>
                  ))}
                </div>
    );
};

export default AvailableProduct;