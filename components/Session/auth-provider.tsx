import AuthUserContext from "./auth-context";
import React, { useEffect, useState } from "react";
import { AuthenticationService } from "services/login.service";
import { User } from "models/user";

//cái Hoc này đảm nhiệm bảo vệ cho toàn bộ web,
//kiểm tra login, login dùng tài khoản.
//kiểm tra token
// chỉ cần để bao bọc App là dùng được hết các service liên quan đến tài khoản.
export const AuthProvider = (props) => {
    const [user, setuser] = useState({
        user: new User(),
        idToken: ''
      });
    const [isLogin, setisLogin] = useState(false);
    const [auth, setauth] = useState({
          user,
          isLogin: false,
          auth: null
      });
    const authenticate = new AuthenticationService();

    useEffect(() => {
        const sub = authenticate.userDataToken.subscribe(val => {
          setuser({
            user: val.user,
            idToken: val.idToken
          });
        });
        authenticate.loadToken();
        if(authenticate._isLogin === true && user.user.uid !== ''){
          setisLogin(true);
        }
        setauth({
            user,
            isLogin,
            auth: authenticate
        })
    
        return () => {
          sub.unsubscribe();
        };
      }, [user]);
    return (
        <AuthUserContext.Provider value={auth} >
            {props.children}
        </AuthUserContext.Provider>
      );
  };
