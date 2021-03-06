import React, { useEffect, useState, useContext, Children } from 'react';

import { Layout, Modal, Form, Input, Icon, Checkbox, Button } from 'antd';
import { FaFacebookF, FaGoogle }  from 'react-icons/fa';

import Head from './head';
// import {CustomNProgress} from 'components';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';
import HeaderTop from './menuTop';
import MenuLeft from './menuLeft';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthenticationService } from 'services/login.service';
import Router from 'next/router';
import Link from 'next/link';
import { User } from 'models/user';
import { AuthProvider } from 'components/Session/auth-provider';


// const { Header, Content, Footer } = Layout;
// const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

// const activeClass = 'ant-menu-item-selected';
export const LoginContext = React.createContext({isLogin: false});

const MainLayout: React.SFC<Props> = ({
  title,
  description,
  ogImage,
  url,
  router,
  children,
}) => {
  const { asPath } = router;
  const [isShow, setIsShow] = useState(false);
  const [visible, setShowModal] = useState(false);
  const [user, setuser] = useState({
    user: new User(),
    idToken: ''
  });
  const [isLogin, setisLogin] = useState(false);
  
  const authenticate = new AuthenticationService();

  const showClick=()=>{
    setIsShow(isShow ? false : true);
  }

  //Modal Show
  const showModal = () => {
    setShowModal(visible?false:true);
  };

  const handleOk = e => {
    setShowModal(visible?false:true);
  };

  const handleCancel = e => {
    setShowModal(visible?false:true);
  };
  //end Modal Show

  //Login show
  const [state, setstate] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    console.log(e.target);
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });

  }
  const Login = () => {
    const a = new AuthenticationService();
    a.loginFirebase(state.email, state.password, Redirect);
    //a.loginWithGoogleRedirect();
    //a.persistenceAccount(state.email, state.password);
  }
  function Redirect(){
    return Router.push('/');
  }
  //end login show

  useEffect(() => {
    // if(authenticate.isLogin === true && authenticate.token !== ''){
    //  console.log('login' + authenticate.user);
    //  //setIsLogin(true);
    // }
    console.log(user);
    const sub = authenticate.userDataToken.subscribe(val => {
      //console.log(val);
      setuser({
        user: val.user,
        idToken: val.idToken
      });
      //console.log(user);
    });
    authenticate.loadToken();
    //console.log('authenticate._isLogin ' + authenticate._isLogin);
    //console.log(user.user)
    if(authenticate._isLogin === true && user.user.uid !== ''){
      setisLogin(true);
      //console.log('isLogin ok')
    }

    // window.addEventListener("scroll", handleScroll);
    return () => {
      // window.removeEventListener("scroll", handleScroll);
      sub.unsubscribe();
    };
  }, [user]);


  return (
    <>
      {/* <CustomNProgress /> */}
      <Head title={`AudioRodbook | ${title}`} description={description} ogImage={ogImage} url={url} />
      <Layout className="layout">
      <HeaderTop clickShow={showClick} clickShowModal={showModal}/>
      <div className="main-center">
          <MenuLeft asPath={asPath} isShow={isShow} isLogin={isLogin}/>
          <div className={(asPath=="/listen"?"mar-top-56":"right-body mar-top-56") + " " + (isShow?"right-mini":"")}>
            <div className="">
            <LoginContext.Provider value={{ isLogin: true }}>
              {children}
            </LoginContext.Provider>
            </div>
          </div>
        </div>
      </Layout>
      <Modal
          title="Đăng nhập"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={800}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <Form>
                <Form.Item>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Nhập Username" name="email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Nhập Password" name="password"
                    onChange={handleChange}
                    type="password"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Ghi nhớ tài khoản</Checkbox>
                  <a className="login-form-forgot" href=""></a>
                  <Button type="primary" htmlType="button" className="login-form-button" onClick={Login}>
                      Đăng nhập
                  </Button>
                    Hoặc <a href=""> Đăng ký ngay!</a>
                </Form.Item>
              </Form>
              </div>
              <div className="col-md-6">
                  <div className="box-social">
                      <Link>
                          <a>
                            <FaFacebookF />
                            Đăng nhập bằng Facebook
                          </a>
                      </Link>

                      <Link>
                          <a className="red-back">
                            <FaGoogle />
                            Đăng nhập bằng Google
                          </a>
                      </Link>
                  </div>
              </div>
            </div>
          </div>
        </Modal>
    </>
  );
}
// const Provider = () => {
//   return (
//     <AuthProvider>
//       <div></div>>
//     </AuthProvider>
//   )
// }
// export default compose<Props, Props>(withRouter)(Provider);

export default compose<Props, Props>(withRouter)(MainLayout);
