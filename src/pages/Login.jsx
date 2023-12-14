import React, {useState}from "react";
import { loginApi } from "../apis/Api";
import { toast } from "react-toastify";

const Login = () => {
    //make useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //make a function
    const changeEmail = (e) => {
        setEmail(e.target.value);
      };
      const changePassword = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        //step1: check data in console
        console.log( email, password);

        const data ={
          email: email,
          password: password
        }

        //api call
        loginApi(data).then((res)=>{
          if(res.data.success == false ){
            toast.error(res.data.message)
          }else{
            toast.success(res.data.message)
            //set token and user data in local storage
            localStorage.setItem('token',res.data.token)

            //converting incomming JSON
            const convertedJson = JSON.stringify(res.data.userData)
            localStorage.setItem("user", convertedJson)
          }

        }).catch((err)=>{
          console.log(err)
          toast.error("Server Error")
        })

      };

  return (
    <>
      <div>
        <h1 className="m-4">Sign in to your Account!</h1>
        <label>Email Address</label>
        <input
        onChange={changeEmail}
          className="form-control mb-2 w-25"
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
        onChange={changePassword}
          className="form-control mb-2 w-25"
          type="email"
          placeholder="Enter your password"
        />

        <button onClick={handleSubmit} className="btn btn-outline-primary w-25" type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
