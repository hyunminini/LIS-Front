import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../../styles/sidebar.scss";

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Sidebar() {

  const pathName = useLocation().pathname;
  const usernamedata = localStorage.getItem("username")
  const authdata = localStorage.getItem('authority')

  const menus1 = [
    { img: <ArticleOutlinedIcon/>, name: "채혈접수", path: "/Collecting" },
    { img: <DoNotDisturbAltOutlinedIcon />, name: "부적합 검체등록", path: "/Unsuitable" }
  ];
  const menus2 = [
    { img: <AddToQueueOutlinedIcon />, name: "검체등록", path: "/Register" },
    { img: <AssignmentIndOutlinedIcon />, name: "검사결과 등록", path: "/InsertResult" },
    { img: <DoNotDisturbAltOutlinedIcon />, name: "부적합 검체등록", path: "/Unsuitable" }
  ]
  const menus3 = [
    { img: <ContentPasteSearchOutlinedIcon />, name: "검사결과 조회", path: "/ResultCheck" }
  ]

  const nurse = "간호사";
  const doctor = "의사";
  const inspector = "검사자";


  return (
    <>
 
    <div className="sidebar">
   
      <div className="user_wrap">
        <div className="user">
          <AccountCircleRoundedIcon /> 
          <span>
          {usernamedata+" "}
          <span className="auth">
            {authdata === "[nurse]"?
            <>{nurse}</>
              :authdata ==="[inspector]"?
              <>{inspector}</>
                :authdata === "[doctor]"?
                <>{doctor}</>
                :<></>}
          </span>
          </span>
        </div>
      </div>

      {authdata === "[nurse]"?<>

      {menus1.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        );
      })}
      </>:authdata ==="[inspector]"?
          <>
          {menus2.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
              />
            </Link>
            );
          })}
          </>:authdata === "[doctor]"?
            <>
            {menus3.map((menu, index) => {
              return (
                <Link to={menu.path} key={index}>
                  <SidebarItem
                    menu={menu}
                    isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                  />
                </Link>
              );
            })}
            </>:<></>
      }
    </div>

    </>
  );
}
export default Sidebar;
