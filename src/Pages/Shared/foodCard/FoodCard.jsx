import React, { useContext } from 'react';
import { AuthContext } from '../../../Authentication/Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCartData from '../../../hooks/useCartData';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCartData();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item);
        
        /* if user login then send cart to backend */
        if (user && user.email) {
            const cartItem = { foodItemId: _id, name, image, price, email: user.email };
            fetch('http://localhost:5020/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch() // Update the cart data
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Item added on cart successfully"
                        })

                    }
                    else {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "warning",
                            title: "Product Can not added...."
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: "Order Food?",
                text: "Please login sit....",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { userFrom: location } });
                }
            });
        }
    }

    return (
        <div className='p-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <p className='text-white bg-yellow-700 absolute right-0 mr-2 p-2 rounded-sm font-semibold'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4 text-yellow-600">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;