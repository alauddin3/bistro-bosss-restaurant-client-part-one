import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import Swal from 'sweetalert2'
import { AuthContext } from '../../Authentication/Provider/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { userSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.userFrom?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const captchaRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if (errorMessage) {
                    Swal.fire({
                        icon: "error",
                        text: `${errorMessage}`,
                    });
                }
            });

    }
    const handleCaptchaOnClick = () => {
        const user_captcha = captchaRef.current.value

        if (user_captcha.length == 0) {
            Swal.fire({
                icon: "error",
                text: "Type the captcha avobe!!",
            });
            setDisabled(true);
        }

        else if (validateCaptcha(user_captcha) === true) {
            setDisabled(false);
        }
        else {
            Swal.fire({
                icon: "error",
                text: "Invalid Captcha!",
            });
            setDisabled(true);
            loadCaptchaEnginge(6);

        }
    }
    return (
        <div className='w-full'>
            <div className="hero bg-base-200 p-32">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-8">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                    <div><LoadCanvasTemplate /></div>
                                </label>
                                <input type="text" name='captcha' ref={captchaRef} id="user_captcha_input" placeholder='Type the text avobe!!' className="input input-bordered" required onBlur={handleCaptchaOnClick} />
                            </div>

                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" disabled={disabled} />
                            </div>
                        </form>
                        <div className='mb-8 pl-8'><p><small><Link to={'/sign-up'}><button className="btn btn-secondary">New Registration</button></Link></small></p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;