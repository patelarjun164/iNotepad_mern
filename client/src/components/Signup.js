import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword:""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const  {name,email,password}=credentials;
        const response = await fetch("https://inotepad-backend.vercel.app/api/auth/createuser", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            // Save the auth token and redirect
            // localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Account Created Successfully!", "success");
        }
        else{
            props.showAlert("Invalid Details", "danger");
        }

        
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className='container'>
            <h1 className='my-5 d-flex justify-content-center' >Create Your Own&nbsp;<u> iNotePad </u> &nbsp;Account Here </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
                </div>
                <div className="d-flex justify-content-center my-5">
                <button type="submit" className="btn-lg btn-primary ">Sign Up</button>
                </div>
            </form>        
        </div>
    )
}

export default Signup