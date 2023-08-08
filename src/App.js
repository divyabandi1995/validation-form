import React,{useState} from 'react'
import './App.css'

function App(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errors,setErrors]=useState({
    email:"",
    password:""
  })
  const emailpattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  

function handlesubmit(){
     if(email.trim()===""){
      setErrors((errors)=>({...errors,email:"enter the email"}))
     }
     else if(!emailpattern.test(email)){
      setErrors((errors)=>({...errors,email:"enter valid email"}))

     }
     else{
     setErrors({...errors,email:""})
     }
     if(password.trim()===""){
      setErrors((errors)=>({...errors,password:"enter the password"}))
     }
     else if(password.trim().length<8){
      setErrors((errors)=>({...errors,password:"password moinimum should be 8 charather"}))
     }
     else{
     setErrors((errors)=>({...errors,password:""}))
     }
    
}
  return(
    <>
    <div className="border w-25 mt-5 m-auto p-3">
      <h3 className="text-primary text-center">Login form</h3>
      <div className="mt-3">
        <label>Email</label>
        <input className="form-control" type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        {errors.email&&<span className="text-danger">{errors.email}</span>}
    </div>
        <div className="mt-3">
          <label>Password</label>
        
        <input className="form-control" type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        {errors.password&&<span className="text-danger">{errors.password}</span>}

        </div>
        <div className="mt-3">
        <button className="btn btn-primary w-100" onClick={handlesubmit}>submit</button>
        </div>
      </div>
    
       </>
    
    
  )

}


export default App
