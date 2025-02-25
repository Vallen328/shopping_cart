import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "", 
        password: "",
    });

    //To store value in Local Storage


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }
  return (
    <>
      <div className="row mt-3">
        <h1 className = "col-6 offset-3">SignUp</h1>
        <div className = "col-6 offset-3">
        <form onSubmit = {handleSubmit}>
            <div className = "mb-3">
                <label className = "form-label" htmlFor="form3Example1cg"> Username </label>
                <input name = "name" value = {input.name} onChange={(e) => setInput({...input,[e.target.name] : e.target.value})} type = "text" className = "form-control" id = "form3Example1cg" required />
            </div>
            <div className = "mb-3">
                <label className = "form-label" htmlFor="form3Example3cg"> Email </label>
                <input name = "email" value = {input.email} onChange={(e) => setInput({...input,[e.target.name] : e.target.value})} type = "email" id = "form3Example3cg" className = "form-control" />
            </div>
            <div className = "mb-3">
                <label htmlFor="form3Example4cg" className = "form-label"> Password </label>
                <input name = "password" value = {input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value})} type = "password" className = "form-control" id = "form3Example4cg" required />
            </div>
            <button className = "btn btn-success"> Register </button>
            <p className="text-center text-muted mt-5 mb-0"> Have already an account? </p>
            <Link to = "/login" className="fw-bold text-body">
            <u>
                Login Here
            </u>
            </Link>
        </form>
    </div>
</div>
    </>
  )
}

export default Register
