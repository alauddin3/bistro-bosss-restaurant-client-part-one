import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;

    return (
        <div className='p-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image}  alt={name} /></figure>
                <p className='text-white bg-yellow-700 absolute right-0 mr-2 p-2 rounded-sm font-semibold'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4 text-yellow-600">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;