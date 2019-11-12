import Link from "next/link";
import { FaHome, FaHotjar, FaBookMedical, FaFolder, FaHistory, FaHourglassEnd, FaIndent, FaBookOpen } from 'react-icons/fa';
import React from "react";
interface Props {
    readonly asPath?: string;
    readonly isShow?: boolean;
  }
const MenuLeft: React.SFC<Props> = ({asPath, isShow}) => {
    let show=isShow?"pin-show":"";
    let path=(asPath=="/listen"?"hide on-left":"on-left") + " " +show;
    return (
        <div className={path}>
            <div className="">
                <ul className="non-ul ul-mn">
                    <li>
                        <Link href="/">
                            <a title="Trang chủ" className="active"><FaHome />Trang chủ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a title="TOP thịnh hành (nhiều lượt nghe nhất trong 28 ngày qua)"><FaHotjar/>TOP thịnh hành</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <a title="Sách mới (từ kênh đã đăng ký)"><FaBookMedical/>Sách mới</a>
                        </Link>
                    </li>
                </ul>
                <ul className="non-ul ul-mn">
                    <li>
                        <Link href="/listen">
                            <a title="Thư viện (sách đã mua, đã tải về)"><FaFolder />Thư viện</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a title="Lịch sử (sách đã nghe online)"><FaHistory/>Lịch sử</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a title="Nghe sau (sách chọn nghe sau, đang nghe dở)"><FaHourglassEnd/>Nghe sau</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a title="Danh sách phát"><FaIndent/>Danh sách phát</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a title="Sách đã like"><FaBookOpen/>Sách đã like</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bot-audio">
                audio book @{new Date().getFullYear()} Created by
            </div>
        </div>
    )
}

export default MenuLeft;