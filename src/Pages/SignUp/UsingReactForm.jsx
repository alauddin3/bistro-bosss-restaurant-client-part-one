import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const UsingReactForm = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        
        console.log(data, data.email, data.name);
    }

    return (
        <div className='w-full'>
            <div className="hero bg-base-200 p-32">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-1 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("name", { required: true, })}
                                    aria-invalid={errors.name ? "true" : "false"} name='name' placeholder="name" className="input input-bordered" />

                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">Name is required</p>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: "Email Address is required" })}
                                 placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {required:"Enter PAssww", pattern: /^[A-Za-z]+$/i })} placeholder="password" className="input input-bordered" />
                                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                            </div>


                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <Link to={'/sign-up'}><button className="btn btn-secondary">Using Form</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsingReactForm;