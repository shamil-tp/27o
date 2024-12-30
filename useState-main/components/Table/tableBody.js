import React, { useState,useEffect } from "react";
import Table from "./table"

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
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">AGE</th>
                            <th scope="col">ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((prsn)=>{
                            return <Table data={prsn} key={prsn.id}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row">
        <div className="col-10 offset-1">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  Filter
                </button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role))}>ALL</button>
                  <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role == 'main'))}>MAIN ONLY</button>
                  <button className="dropdown-item" onClick={()=>setUser(data.filter((prsn)=>prsn.role == 'top'))}>TOP ONLY</button>
                </div>
              </div>
        </div>
    </div>

    </div>
    </>
}