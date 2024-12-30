import React, { useState,useEffect } from "react";

export default ()=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [role,setRole] = useState('')
    const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://192.168.1.31:3030/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name:name, age:age, role:role }),
    });

    const result = await response.JSON();console.log(result)

  };
    return <>
        <div className="container vh-100 d-flex align-items-center">
        <div className="row w-100">
              
          <div className="col-6 offset-3 pt-5 bg-dark text-light rounded">
            <div className="login-form border rounded border-dark p-3">
              <p className="head-text-white h3">Sign Up</p>
              <form  onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Name" value={name} onChange={(event)=>setName(event.target.value)}/>
                  </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input type="number" className="form-control" name="age" placeholder="Enter Age" value={age} onChange={(event)=>setAge(event.target.value)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input type="text" className="form-control" name="role" placeholder="Enter Role" value={role} onChange={(event)=>setRole(event.target.value)}/>
                </div>
                
                  <button type="submit" className="btn btn-block btn-primary custom-btn">Register</button>
               
              </form>
              <div className="mt-3">
                <p className="paragraph-text-white">Already have an account? <a href="/login">Log In here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
}