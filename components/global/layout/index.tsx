import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';
import Head from './head';
// import {CustomNProgress} from 'components';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';
import HeaderTop from './menuTop';
import MenuLeft from './menuLeft';
import 'bootstrap/dist/css/bootstrap.css';




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

  const showClick=()=>{
    setIsShow(isShow?false:true);
  }

  useEffect(() => {
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
          <MenuLeft asPath={asPath} isShow={isShow}/>
          <div className={(asPath=="/listen"?"mar-top-56":"right-body mar-top-56") + " " + (isShow?"right-mini":"")}>
            <div className="">
              {children}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default compose<Props, Props>(withRouter)(MainLayout);
