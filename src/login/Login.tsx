import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
export interface LoginModel {
  username: string;
  password: string;
}
function Login() {
  const defaultValue = { username: "", password: "" };
  const [loginValue, setLoginValue] = useState<LoginModel>(defaultValue);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const navigate = useNavigate();

  const onFormValueChange = (event: any) => {
    let newValue = {...loginValue, [event.target.name]:event.target.value };
    setLoginValue(
      newValue
    )

  }
  const login = async ()=>{
    let response = await window.fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(res=>res.json())
    console.log("***",response)
    if(loginValue.username == "test" && loginValue.password == "test"){
      
     
      sessionStorage.setItem("isLogin","true")
      navigate("/");
    }else {
      setErrorMsg("Invalid username or password");
      setLoginValue(defaultValue)
    }
  }
  return (
    <div className='login'>
      <div className='login-form'>
        <div data-testid="login-header">Login App</div>
        <div className='error-msg'>
          {errorMsg}
        </div>
        <div data-testid="username">
          <label>User name </label>
          <input type="text" value={loginValue.username} role="username" name="username" onChange={onFormValueChange} />
        </div>
        <div data-testid="password">
          <label>Password: </label>
          <input type="text" value={loginValue.password} role="password" name="password" onChange={onFormValueChange} />
        </div>
        <div className='btn-sec'>
          <button role="login" data-testid="submit" onClick={login}>Login</button>
          <button role="clear" data-testid="clear"  onClick={()=>setLoginValue(defaultValue)}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
