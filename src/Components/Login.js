import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  }); 

  const handleLogin = (e) =>  {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      navigate("/");
    }else{
      alert("Input field Invalid");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label for="email" className="form-label">Email</label>
                    <input
                      name="email"
                      value={input.email}
                      onChange={ (e) => 
                        setInput({
                          ...input,[e.target.name] : e.target.value
                        })
                      }
                    type="email" 
                    className="form-control" 
                    id="email" />
                  </div>
                  <div className="mb-4">
                    <label for="password" className="form-label">Password</label>
                    <input 
                      name="password"
                      value={input.password}
                      onChange={ (e) => 
                        setInput({
                          ...input,[e.target.name] : e.target.value
                        })
                      }
                      type="password" 
                      className="form-control" 
                      id="password" />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn text-light main-bg">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
