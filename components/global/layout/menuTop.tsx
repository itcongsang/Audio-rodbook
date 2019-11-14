// import { useEffect, useState } from 'react';
import * as React from 'react';
import { FaBars, FaSearch, FaCloudUploadAlt, FaBell }  from 'react-icons/fa';
import Link from 'next/link';
interface Props {
  clickShow: any ;
}
//Nhớ đăng ký Test lên file index component
const HeaderTop: React.SFC<Props> =({clickShow}) => {
  return (
    <div className="bg-w h-limit">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <button className="in-line fa-bar" onClick={clickShow}><FaBars className="" /></button>
            <div className="in-line">
              <img src="https://store.rodbooks.com/assets/frontend/img/logo.png?v=02" className="img-responsive img-logo " />
            </div>
          </div>
          <div className="col-md-6">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input type="text" className="search-query form-control" placeholder="Tìm kiếm" />
                <span className="input-group-btn">
                  <button className="btn btn-search" type="button">
                    <FaSearch className="" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pull-right">
              <div className="in-line ds-mn kit-line">
                <FaCloudUploadAlt className="" />
              </div>
              <div className="in-line ds-mn kit-line">
                <FaBell className="" />
                <span className="bell-notiface">1</span>
              </div>
              <div className="in-line ds-mn">
              <Link href="login">
                <a className="a-pon">
                  <img src="https://yt3.ggpht.com/a-/AAuE7mAkkx-gP5K9_5EvJvnD-jfhWRrIb6pKTSinMA=s88-c-k-c0x00ffffff-no-rj-mo" className="img-responsive img-pon" />
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="banbom" className={isClick == true ? "show-menu" : ""} onClick={() => setisClick(isClick === true ? false : true)}>
        </div> */}
      </div>
    </div>

  )
}

export default HeaderTop;