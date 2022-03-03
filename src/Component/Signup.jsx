import React, { useState } from "react";

function SignUp(){
    const [admindata,setAdmindata]=useState({  Email:"",  Password:"", Address:"", Address2:"",City:"",State:"",Zip:""})
        
        
        
        const inputhandler=(event)=>{
             const {id , value} = event.target 
              setAdmindata(prevState=>({
                 ...prevState,
                  [id]:value
                 })) 
         }

        const handleSubmit =()=>{

        
        // const {Email,Password,Zip,Address,Address2,City}=admindata
        //    fetch('https://gorest.co.in/public/v2/users')
        //    .then(response => {
        //        console.log("cghj")
        //        console.log(response.json())
        //    })
        //    .catch(error => {
        //        console.log(error)
        //    });
        
        // if(Email && Password &&Zip &&Address &&Address2&&City){
        
        //     axios.get('https://jsonplaceholder.typicode.com/comments')
        //     .then((res)=>{
        //         console.log(res)
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        
        // }
        
        }

        const abc =()=>{
            fetch('https://gorest.co.in/public/v2/users')
              .then(response => {
                 console.log(response.json())
              })
              .catch(error => {
                  console.log(error)
              });
        }
    return(
        <div className="form">
      <form onSubmit={abc}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
     
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
        
    )
}



export default SignUp