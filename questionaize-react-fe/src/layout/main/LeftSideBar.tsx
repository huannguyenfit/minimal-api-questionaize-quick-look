import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SubMenu } from 'react-pro-sidebar';
import { toggleMenu$ } from './Header';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Box, Drawer, List, ListItem, Typography } from '@mui/material';
import { MainMenu } from '@core/constants/menuConfig';
import Logo from '@core/components/Logo';

type LeftSideBarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onSettingsToggle: () => void;
};

export default function LeftSideBar({
  collapsed,
  mobileOpen,
  onDrawerToggle,
  onSettingsToggle,
}: LeftSideBarProps) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [sideBars, setSideBars] = useState([...MainMenu] as any);

  useEffect(() => {
    const subscribe = toggleMenu$.subscribe((value) => {
      setToggleMenu(value);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  const width = 280;
  const CustomNavLink = ({ navigateTo, title, icon: Icon }) => {
    let resolved = useResolvedPath(navigateTo);
    let match = useMatch({ path: resolved && resolved.pathname ? resolved.pathname : '', end: true });
    return (
      <MenuItem active={match ? true : false} icon={Icon ? <Icon /> : undefined}>
        <NavLink to={navigateTo}>{title}</NavLink>
      </MenuItem>
    );
  };

  const renderMenu = (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Logo sx={{ display: "flex", p: 4 }} />
      <ProSidebar>
            <SidebarContent>
              <PerfectScrollbar style={{ height: '730px' }}>
                <Menu iconShape='circle'>
                  {sideBars.map((item, index) => {
                    return (
                      <>
                        {!item.children || item.children.length == 0 ? (
                          <CustomNavLink key={`menu_${index}`} icon={item.icon} title={item.text} navigateTo={item.navigateTo} />
                        ) : (
                          <SubMenu title={item.text} key={`mainSubmenu_${index}`} icon={item.icon ? <item.icon /> : undefined}>
                            {item.children.map((child, childIndex) => {
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
      <Box sx={{ flexGrow: 1 }} />
    </Box>


  )



  return (
    <>
      <Box
        aria-label="LeftSideBar"
        component="nav"
        sx={{
          width: { lg: width },
          flexShrink: { lg: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: width,
            },
          }}
        >
          {renderMenu}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: width,
            },
          }}
        >
          {renderMenu}
        </Drawer>
      </Box>
      {/* <div className={`left-side-bar`}>
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
                        {!item.children || item.children.length == 0 ? (
                          <CustomNavLink key={`menu_${index}`} icon={item.icon} title={item.text} navigateTo={item.navigateTo} />
                        ) : (
                          <SubMenu title={item.text} key={`mainSubmenu_${index}`} icon={item.icon ? <item.icon /> : undefined}>
                            {item.children.map((child, childIndex) => {
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
      </div> */}
    </>
  );
}
