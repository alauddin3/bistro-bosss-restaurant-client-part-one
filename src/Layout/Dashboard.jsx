import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import useCartData from '../hooks/useCartData';
import { AuthContext } from '../Authentication/Provider/AuthProvider/AuthProvider';
import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt,FaUsers  } from "react-icons/fa";
import { MdOutlineRestaurantMenu, MdLogout, MdDashboard } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

import { ImSpoonKnife } from "react-icons/im";


const Dashboard = () => {
    const { userLogOut } = useContext(AuthContext);
    /* TODO check from DB is admin or not */
    const isAdmin = true;


    const handleUserLogOut = () => {
        userLogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    const [cart] = useCartData()
    return (
        <div>
            <Helmet>
                <title>Dashborad || Bistroboss Resturant </title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to={'/dashboard/home'}><MdDashboard />Admin Home</NavLink></li>
                                    <li><NavLink to={'/dashboard/add-item'}><ImSpoonKnife />Add Item</NavLink></li>
                                    <li><NavLink to={'/dashboard/manage-item'}><TbCategoryPlus />Manage Items</NavLink></li>
                                    <li><NavLink to={'/dashboard/manage-booking'}><FaCalendarAlt />Manage Bookings</NavLink></li>
                                    <li><NavLink to={'/dashboard/manage-user'}><FaUsers/>Manage Users</NavLink></li>
                                </> :
                                <>
                                    <li><NavLink to={'/dashboard/home'}><MdDashboard />Dashboard</NavLink></li>
                                    <li><NavLink to={'/dashboard/reservations'}><FaCalendarAlt />Reservations</NavLink></li>
                                    <li><NavLink to={'/dashboard/payment'}><FaWallet />Payment History</NavLink></li>
                                    <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart /> My Cart <span className='badge badge-secendary'>{cart?.length || 0}</span></NavLink></li>
                                </>
                        }


                        <div className="divider"></div>

                        <li><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                        <li><NavLink to={'/menu'}><MdOutlineRestaurantMenu />Our Menu</NavLink></li>
                        <li><NavLink to={'/order-food/salad'}><FaWallet />Our Food</NavLink></li>

                        <div className="divider"></div>
                        <li><button onClick={handleUserLogOut} className='btn'><MdLogout /> Logout</button></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;