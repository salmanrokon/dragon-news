import React from 'react';
import NavBar from '../../shared/NabBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const{signIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    console.log('location in the login page',location);

    const handleSign=(e) => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log( email, password);

        //create user

        signIn(email, password)
        .then(result=>{
            console.log(result.user)

            //navigate after Login
            navigate(location?.state ? location.state: '/')


        })
        .catch(error=>{
            console.log(error)
        })

    };
    return (
        <div>
            <NavBar></NavBar>
                   <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleSign} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                </div>
        </div>
    );
};

export default Login;