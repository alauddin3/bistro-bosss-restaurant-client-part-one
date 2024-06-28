import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5020/users')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },

    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are sure to dete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5020/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
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
                                title: "User Deleted...."
                            })
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are sure to make?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5020/users/admin/${id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.matchedCount) {
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
                <title>Dashborad || Manage Users </title>
            </Helmet>
            <div className="bg-[#D1A054] font-semibold uppercase flex justify-between users-center p-2 rounded-md mt-4">
                <h3 className="text-md">Total User: {users.length}</h3>
            </div>
            <div className="overflow-x-auto mt-2">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] font-semibold text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    {user.name}

                                </td>
                                <td>
                                    {user.email}

                                </td>
                                <td>

                                    {user.role === 'admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-sm bg-green-500 text-white"><FaUsersCog /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUser;