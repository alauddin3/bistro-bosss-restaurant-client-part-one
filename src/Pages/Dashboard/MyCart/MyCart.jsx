import { Helmet } from "react-helmet-async";
import useCartData from "../../../hooks/useCartData";

import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart, refetch] = useCartData();
    

    
    // arrry reducer function

    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are your want to delete?",
            icon: "warning",
            text: item.name,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(item._id);
                fetch(`http://localhost:5020/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
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
                                title: "Item Deleted...."
                            })
                        }
                    })
            }
        });

    }

    return (
        <div className="w-full pt-4 pb-4 pl-8 pr-8">
            <Helmet>
                <title>Dashborad || My Cart </title>
            </Helmet>
            <div className="bg-[#D1A054] font-semibold uppercase flex justify-between items-center p-2 rounded-md mt-4">
                <h3 className="text-md">Total Item: {cart.length}</h3>
                <h3 className="text-md">Total Price: {total.toFixed(2)}</h3>
                <button className="btn btn-error btn-sm">Pay Now</button>
            </div>
            <div className="overflow-x-auto mt-2">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] font-semibold text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt={item.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td className="text-end">$ {item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;