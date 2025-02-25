import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
            name: "",
            password: "",
        });

        const handleLogin = (e) => {
            e.preventDefault();
            const loggedUser = JSON.parse(localStorage.getItem("user"));
            if(input.name === loggedUser.name && input.password === loggedUser.password){
                localStorage.setItem("LoggedIn", true);
                navigate("/");
            }else{
                alert("Wrong username or password");
            }
        }
    
  return (
    <>
    <div className="row mt-3">
        <h1 className = "col-6 offset-3"> Login </h1>
        <div className = "col-6 offset-3">
        <form onSubmit={handleLogin}>
            <div className = "mb-3">
                <label htmlFor="form3Example1cg" className = "form-label"> Username </label>
                <input name = "name" value = {input.name} onChange={(e) => setInput({...input,[e.target.name] : e.target.value})} type = "text" className = "form-control" id ="form3Example1cg" required />
            </div>
            <div className = "mb-3">
                <label htmlFor="form3Example4cg" className = "form-label"> Password </label>
                <input name = "password" value = {input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value})} type = "password" className = "form-control" id ="form3Example4cg" required />
            </div>
            <button className = "btn btn-success"> Login </button>
            <p className="text-center text-muted mt-5 mb-0"> Dont Have an account? </p>
            <Link to = "/register" className="fw-bold text-body">
            <u>
                Register Here
            </u>
            </Link> 
        </form>
    </div>
</div>
    </>
  )
}

export default Login
