import React, { useEffect, useState, useContext } from 'react';

import { Layout } from 'antd';
import Head from './head';
// import {CustomNProgress} from 'components';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';
import HeaderTop from './menuTop';
import MenuLeft from './menuLeft';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthenticationService } from 'services/login.service';

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
  const [isLogin, setIsLogin] = useState(false);
  const authenticate = new AuthenticationService();

  const showClick=()=>{
    setIsShow(isShow ? false : true);
  }

  // const LoginContext = React.createContext(false);
  useEffect(() => {
    if(authenticate.isLogin === true && authenticate.token !== ''){
     console.log('login');
     setIsLogin(true);
    }
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <>
      {/* <CustomNProgress /> */}
      <Head title={`AudioRodbook | ${title}`} description={description} ogImage={ogImage} url={url} />
      <Layout className="layout">
      <HeaderTop clickShow={showClick}/>
      <div className="main-center">
          <MenuLeft asPath={asPath} isShow={isShow} isLogin={isLogin}/>
          <div className={(asPath=="/listen"?"mar-top-56":"right-body mar-top-56") + " " + (isShow?"right-mini":"")}>
            <div className="">
            <LoginContext.Provider value={{ isLogin }}>
              {children}
            </LoginContext.Provider>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default compose<Props, Props>(withRouter)(MainLayout);
