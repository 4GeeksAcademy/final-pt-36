import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useform";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context)


    const [inputValues, handleInputChange] = useForm({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");

    const { email, password } = inputValues;
    const navigate = useNavigate()

    const loginUserRequest = async () => {
        actions.login({ email, password, navigate })
    }

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"))
        if (user) { navigate("/dashboard") }
    }, [])
    return (
        <section className="vh-100" style={{ backgroundImage: "url('https://res.cloudinary.com/dz6bglmyq/image/upload/v1688068965/banner3_xq4wvf.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-8">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://i.pinimg.com/564x/9b/37/a0/9b37a07747177913fc2bcdef89ca787c.jpg"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src="https://www.calacademy.org/sites/all/themes/calacademy_zen/images/logo-green-460px.png" alt="Logo" width="50" height="50" class="d-inline-block align-top" />
                                                <span className="h2 fw-bold mb-0">Field Expedition</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" value={email} onChange={handleInputChange} />
                                                <label className="form-label" >Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" value={password} onChange={handleInputChange} />
                                                <label className="form-label" >Password</label>
                                            </div>
                                            {error !== "" && <div>{error}</div>}
                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginUserRequest}>Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>

                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                                                <Link style={{ color: "#393f81" }} to="/signup">
                                                    Register here
                                                </Link>
                                            </p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )


}