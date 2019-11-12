import { useObservable } from 'rxjs-hooks';
import React from 'react';
import Link from "next/link";

import Layout from 'components/global/layout';
import { getAllBooks, getAllBooks2 } from 'services/book.service';
import './styles.scss';

export const Home = () => {
    const res = useObservable(() => getAllBooks2(),[]);
    return (
    <Layout title="Dashbord" description="This is the home page">
      <div className="container bt-line">
        <div className="row">
            <h2 className="title-oneach">Đề xuất</h2>
        </div>
        <div className="row">
          {console.log(res)}
            {/* {res.map((t, i) => {
            return (
              <div key={i} className="col-md-2 rs-pad mar-bot-25">
                <Link href="#">
                  <a title="">
                      <div className="img-ct">
                        <img src={t.book.coverUrl} className="img-responsive" />
                      </div>
                      <div className="main-ct">
                        <h3><a>{t.book.name}</a></h3>
                        <span>{t.channels}</span>
                        <div>
                          <span className="seen-count">{t.book.rating} lượt xem</span>
                          <span>1 tuần trước</span>
                        </div>
                      </div>
                    </a>
                </Link>
                  
                </div>
            );
          })} */}
        
        </div>
      </div>
    </Layout>
  )
}


export default Home;
