import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { userGoolgeLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.userFrom?.pathname || '/';

    const handleGoogleSignIn = () => {
        userGoolgeLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            })
    }

    return (
        <>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost w-full text-center"> <FaGoogle />Login With Google</button>
        </>
    );
};

export default SocialLogin;