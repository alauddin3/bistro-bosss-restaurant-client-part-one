import React from 'react';
import FoodCard from '../../Shared/foodCard/FoodCard';

const OrderTab = ({ item, isLoading }) => {
    return (
        <div className='grid md:grid-cols-3 gap-8'>

            {
                isLoading?<span className="loading loading-dots loading-lg mx-0"></span>: item.map(item => <FoodCard item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;