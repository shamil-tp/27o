import { Link } from "react-router-dom"
import React, { useState,useEffect } from "react";

export default ()=>{
  const [data, setData] = useState([]);
    const [user,setUser] =useState(data)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:3030/allperson'); // Adjust the path if necessary
      const json = await response.json();
      setData(json);
      console.log(data)
    };

    fetchData();
  }, []);
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/page2">Link</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add">Add</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role))}>ALL</button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role == 'main'))}>MAIN ONLY</button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role == 'top'))}>TOP ONLY</button>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </>
}