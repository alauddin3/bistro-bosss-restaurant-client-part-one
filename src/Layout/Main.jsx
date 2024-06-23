import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NabBar/Navbar";


const Main = () => {
    const location = useLocation();
    const isHeaderFooter = location.pathname.includes('login');


    return (
        <div>
            {
                !isHeaderFooter && <Navbar></Navbar>
            }

            <Outlet></Outlet>
            {
                !isHeaderFooter && <Footer></Footer>
            }

        </div>
    );
};

export default Main;