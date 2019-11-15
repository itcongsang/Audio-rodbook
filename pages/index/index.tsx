import { useObservable } from 'rxjs-hooks';
import React, { useContext, useEffect } from 'react';
import Link from "next/link";

import Layout from 'components/global/layout';
import { getAllBooks, getAllBooks2, getBooksRecommended } from 'services/book.service';
import './styles.scss';
import { LoginContext } from 'components/global/layout/index';
//
export const Home = () => {
    let isLogin = useContext(LoginContext);
    console.log(isLogin);
    const resGoiY = useObservable(() => getAllBooks2(),[]);
    const resDeXuat = useObservable(() => getBooksRecommended(),[]);
    // useEffect(() => {
    //   isLogin = useContext(LoginContext);
    // }, [])
    return (
    <Layout title="Dashbord" description="This is the home page">
        <div className="container bt-line">
          <div className="row">
            <h2 className="title-oneach">Đề xuất</h2>
          </div>
          <div className="row">
            {console.log(resDeXuat.length)}

            {resDeXuat.map((t, i) => {
              return (
                <div key={i} className="col-md-2 rs-pad mar-bot-25">
                  <Link href="#">
                    <a title="">
                      <div className="img-ct">
                        <img src={t.coverUrl} className="img-responsive" />
                      </div>
                      <div className="main-ct">
                        <h3><a>{t.name}</a></h3>
                        <span>{t.channelName}</span>
                        <div>
                          <span className="seen-count">{t.rating} lượt xem</span>
                          <span>1 tuần trước</span>
                        </div>
                      </div>
                    </a>
                  </Link>

                </div>
              );
            })}
          </div>
        </div>
        {isLogin && 
          <div className="container bt-line">
            <div className="row">
              <h2 className="title-oneach">Từ kênh đã đăng ký</h2>
            </div>
            <div className="row">
              {console.log(resDeXuat.length)}
              {resDeXuat.map((t, i) => {
                return (
                  <div key={i} className="col-md-2 rs-pad mar-bot-25">
                    <Link href="#">
                      <a title="">
                        <div className="img-ct">
                          <img src={t.coverUrl} className="img-responsive" />
                        </div>
                        <div className="main-ct">
                          <h3><a>{t.name}</a></h3>
                          <span>{t.channelName}</span>
                          <div>
                            <span className="seen-count">{t.rating} lượt xem</span>
                            <span>1 tuần trước</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>         
                );
              })}
            </div>       
          </div>
            }
        <div className="container bt-line">
        <div className="row">
            <h2 className="title-oneach">Gợi ý</h2>
        </div>
        <div className="row">
            {resGoiY.map((t, i) => {
            return (
              <div key={i} className="col-md-2 rs-pad mar-bot-25">
                <Link href="#">
                  <a title="">
                      <div className="img-ct">
                        <img src={t.coverUrl} className="img-responsive" />
                      </div>
                      <div className="main-ct">
                        <h3><a>{t.name}</a></h3>
                        <span>{t.channelName}</span>
                        <div>
                          <span className="seen-count">{t.rating} lượt xem</span>
                          <span>1 tuần trước</span>
                        </div>
                      </div>
                    </a>
                </Link>
                  
                </div>
            );
          })}
        
        </div>
      </div>
    </Layout>
  )
}


export default Home;
