import './App.css';
import {CircularProgress} from "@material-ui/core"
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';


function App() {
  const [users,setUsers] = useState(null)
  const [loading,setLoading] = useState(false)

  const apiURL = "  https://reqres.in/api/users?page=1";

  {/* Fetch data from API  */}
  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get(apiURL)
    setUsers(response.data["data"]) 
    setTimeout(()=>{
      setLoading(false);
    },500)
   
}
return (
  <div className="App">

  {loading? "":
    (
    <nav className="navbar" style={{height:"100px",backgroundColor:"black"}}>
      <img src="./logo.png" style={{height:"80px"}}/>
      <div className="getButton">
        <Button variant="contained" onClick={fetchData} color="primary">
          Get Users
        </Button>    
      </div>  
    </nav>  
    )
  }

  {loading? <div><CircularProgress/></div>:''}
    
   
   
    {/* Display data from API */}
    <div className="users">
      {users &&
        users.map((user) => {
          return (

            <div className="user" >                        
              <h3>USER {user.id}</h3>
              <img src={user.avatar}/>

              <div className="details">
                <center><h5 style={{color:"grey"}}>Name</h5></center>
                <center><h4> {user.first_name} {user.last_name}</h4></center>
               
                <center><h5 style={{color:"grey"}}>Contact</h5></center>
                <center><h4> {user.email}</h4></center>
              </div>
            </div>
          );
        })}
    </div>
     
    
  </div>
 
);
}

export default App;
