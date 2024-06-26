import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/Provider/AuthProvider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCartData from '../../../hooks/useCartData';


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const [cart] = useCartData();

    const handleUserLogOut = () => {
        userLogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order-food/salad'}>Order Food</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/sign-up'}>Sign Up</Link></li>
        <li><Link to={'/secret-route'}>Secret</Link></li>
        <li><Link to={'/dashboard/mycart'}>
            <button className="btn">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        <li>
            {
                user ? <><button onClick={handleUserLogOut} className="btn btn-ghost">Logout</button></> : <></>
            }
        </li>

    </>
    return (
        <>
            <div className="navbar fixed z-50 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;