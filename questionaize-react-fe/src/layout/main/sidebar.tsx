import { NavLink, Outlet } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState, useEffect } from "react";
import { ROUTE_PATHS } from "@core/constants/route-config";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { toggleMenu$ } from "./header";



const MenuConfigs = [{
    id: 1,
    text: "Đăng ký bệnh nhân",
    iconClass: "a-icon-dkbn",
    childrens: [
        {
            text: "Ngoại trú",
            navigateTo: ROUTE_PATHS.Home,
        },
        {
            text: "Nội trú",
            navigateTo: "/",
        },
        {
            text: "Báo cáo - Thống kê",
            navigateTo: "/",
        },
        {
            text: "Thu tiền khác",
            navigateTo: "/",
        },
    ]
},

{
    id: 2,
    text: "Khám bệnh",
    navigateTo: "#",
    iconClass: "a-icon-kb",
    childrens: [
        {
            text: "Khám bệnh",
            navigateTo: ROUTE_PATHS.Home,
        },
        {
            text: "Hẹn bệnh",
            navigateTo: "/",
        },
        {
            text: "Thống kê",
            navigateTo: "/",
        },
        {
            text: "Quản lý tình hình khoa",
            navigateTo: "/",
        },
        {
            text: "Giấy chuyển tuyến",
            navigateTo: "/",
        },
        {
            text: "Hội chuẩn",
            navigateTo: "/",
        },
        {
            text: "Phác đồ điều trị",
            navigateTo: "/",
        }
    ]
},

{
    id: 3,
    navigateTo: "kham-benh-noi-tru",
    text: "Khám bệnh nội trú",
    iconClass: "a-icon-kbnt",
    childrens: [
        {
            text: "Khám bệnh nội trú",
            navigateTo: ROUTE_PATHS.Home,
        },
        {
            text: "Quản lý tình hình khoa",
            navigateTo: "/",
        },
        {
            text: "Giấy chuyển tuyến",
            navigateTo: "/",
        },
        {
            text: "Hội chẩn",
            navigateTo: "/",
        },
        {
            text: "Phác đồ điều trị",
            navigateTo: "/",
        },
        {
            text: "Khác",
            navigateTo: "/",
        },
        {
            text: "Quản lý khoa TTCT",
            navigateTo: "/",
        }
    ]
},
{
    id: 4,
    text: "Hẹn bệnh",
    navigateTo: "hen-benh",
    iconClass: "a-icon-hb",
    childrens: [
        {
            text: "Quản lý hẹn bệnh",
            navigateTo: "/",
        },
        {
            text: "Khám sức khỏe",
            navigateTo: "/",
        }
    ]
},
{
    id: 5,
    text: "Xét nghiệm",
    navigateTo: "xet-nghiem",
    iconClass: "a-icon-xn"
}
]




export default function SideNav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [navbars, setNavbars] = useState([...MenuConfigs] as any)

    useEffect(() => {
        const subscribe = toggleMenu$.subscribe((value) => {
            setToggleMenu(value);
        });
        return () => {
            subscribe.unsubscribe();
        };
    }, []);

    const expandMenuItem = (id) => {
        const currentMenu = navbars.find(o => o.id == id);
        if (currentMenu) {
            currentMenu.expand = !currentMenu.expand;
        }
        setNavbars([...navbars])
    }
    return (
        <div >
            <div className={`left-side-bar`} >
                <div className="brand-logo">
                    <a href="#">
                        <img src="vendors/images/deskapp-logo.svg" alt="" className="dark-logo" />
                        <img src="vendors/images/deskapp-logo-white.svg" alt="" className="light-logo" />
                    </a>
                    <div className="close-sidebar" data-toggle="left-sidebar-close">
                        <i className="ion-close-round"></i>
                    </div>
                </div>
                <div className="menu-block customscroll">
                    <div className="sidebar-menu">
                        <ul >
                            {navbars.map((item, index) => {
                                return (
                                    <>
                                        {
                                            (!item.childrens || item.childrens.length == 0) ?
                                                <li className={`dropdown `}>
                                                    <NavLink key={index} className={'dropdown-toggle no-arrow'} to={item.navigateTo}>
                                                        <span className={`micon a-icon ${item.iconClass}`} ></span>
                                                        <span>{item.text}</span>
                                                    </NavLink>
                                                </li>
                                                :
                                                <li className={`dropdown ${item.expand ? 'show' : ''}`}>
                                                    <a className='dropdown-toggle' href="#" onClick={() => expandMenuItem(item.id)}>
                                                        <span className={`micon a-icon ${item.iconClass}`} >  </span>
                                                        <span>{item.text}</span>
                                                    </a>
                                                    {item.expand &&
                                                        <ul className="submenu animate__animated  animate__fadeIn" style={{ display: 'block' }}>
                                                            {item.childrens.map((child, childIndex) => {
                                                                return (
                                                                    <>
                                                                        <li>
                                                                            <NavLink key={childIndex} to={child.navigateTo}>
                                                                                {child.text}
                                                                            </NavLink>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })
                                                            }
                                                        </ul>

                                                    }
                                                </li>
                                        }
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-overlay"></div>
          
        </div>


    )
}
