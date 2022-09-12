import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SubMenu } from 'react-pro-sidebar';
import { MenuConfigs } from '@core/constants/menu-config';
import { toggleMenu$ } from './header';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Typography } from '@mui/material';

export default function LeftSideBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sideBars, setSideBars] = useState([...MenuConfigs] as any);

  useEffect(() => {
    const subscribe = toggleMenu$.subscribe((value) => {
      setToggleMenu(value);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  const CustomNavLink = ({ navigateTo, title, icon: Icon }) => {
    let resolved = useResolvedPath(navigateTo);
    let match = useMatch({ path: resolved && resolved.pathname ? resolved.pathname : '', end: true });
    return (
      <MenuItem active={match ? true : false} icon={Icon ? <Icon /> : undefined}>
        <NavLink to={navigateTo}>{title}</NavLink>
      </MenuItem>
    );
  };

  return (
    <>
      <div className={`left-side-bar`}>
        <div className='brand-logo'>
          <a href='#'>
            <img src='vendors/images/deskapp-logo.svg' alt='' className='dark-logo' />
            <img src='vendors/images/deskapp-logo-white.svg' alt='' className='light-logo' />
          </a>
          <div className='close-sidebar' data-toggle='left-sidebar-close'>
            <i className='ion-close-round'></i>
          </div>
        </div>
        <div className='menu-block'>
          <ProSidebar>
            <SidebarContent>
              <PerfectScrollbar style={{ height: '768px' }}>
                <Menu iconShape='circle'>
                  {sideBars.map((item, index) => {
                    return (
                      <>
                        {!item.childrens || item.childrens.length == 0 ? (
                          <CustomNavLink key={`menu_${index}`} icon={item.icon} title={item.text} navigateTo={item.navigateTo} />
                        ) : (
                          <SubMenu title={item.text} key={`mainSubmenu_${index}`} icon={item.icon ? <item.icon /> : undefined}>
                            {item.childrens.map((child, childIndex) => {
                              return (
                                <>
                                  <CustomNavLink
                                    key={`submenu_${childIndex}`}
                                    icon={child.icon}
                                    title={child.text}
                                    navigateTo={child.navigateTo}
                                  />
                                </>
                              );
                            })}
                          </SubMenu>
                        )}
                      </>
                    );
                  })}
                </Menu>
              </PerfectScrollbar>
            </SidebarContent>
            <SidebarFooter>
              <div
                className='sidebar-btn-wrapper'
                style={{
                  padding: '20px 24px',
                  textAlign: 'center',
                }}
              >
                <Typography mt={2}>
                  &copy; TD Medical company
                </Typography>
              </div>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </div>
      <div className='mobile-menu-overlay'></div>
      ;
    </>
  );
}
