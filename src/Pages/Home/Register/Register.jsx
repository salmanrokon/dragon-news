import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import NavBar from "../../shared/NabBar/NavBar";



const Register = () => {

    const {createUser}=useContext(AuthContext)
    
    const handleRegister=(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        
        const name=form.get('name');
        const photo=form.get('photo');
        const email=form.get('email');
        const password=form.get('password');
        console.log(name, photo, email, password);

        //create user

        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })

    };
    
    return (

        <div>
            <NavBar></NavBar>
                   <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered" name="photo" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                </div>
        </div>
    );
};

export default Register;