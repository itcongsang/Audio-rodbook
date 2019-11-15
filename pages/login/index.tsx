import React, { FC, useState } from 'react';
import Layout from 'components/global/layout';
import './styles.scss';
import { AuthenticationService } from 'services/login.service';
import Router from 'next/router'


export const Login = () => {
  const [state, setstate] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });

  }
  const Login = () => {
    const a = new AuthenticationService();
    a.loginFirebase(state.email, state.password, Redirect);
    // loginFirebase(state.email, state.password, Redirect);
  }
  function Redirect(){
    return Router.push('/');
  }
  return (
    <>
    <h2 className="title">Đăng nhập</h2>
    <div id="id01" className="modal">
  
        <form className="modal-content animate" action="" method="post">
  
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Nhập Username" name="email" onChange={handleChange} required />
  
            <label><b>Password</b></label>
            <input type="password" placeholder="Nhập Password" name="password" onChange={handleChange} required />
  
            <button type='button' onClick={Login}>Đăng nhập</button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
        </label>
          </div>
  
          <div className="container">
            <span className="psw">Quên <a href="#">mật khẩu?</a></span>
          </div>
        </form>
      }
      </div>
    </>
  );
}

export default Login;
