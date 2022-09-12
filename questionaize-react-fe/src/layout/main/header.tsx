import { BehaviorSubject } from "rxjs";
import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Menu, MenuItem } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// handle loading
export const toggleMenu$ = new BehaviorSubject<boolean>(false);

export const toggleMenu = (value: boolean) => {
    toggleMenu$.next(value);
};
export const Header = () => {
    const [toggleRightPanel, setToggleRightPanel] = useState(false);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openDropdownMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const renderDropdownMenu = () => {
        return (
            <>
                <Link
                    className="dropdown-toggle"
                    onClick={(e: any) => openDropdownMenu(e)}
                >
                    <span className="user-icon">
                        <img src={`https://i.pravatar.cc/150?img=44`} alt="" />
                    </span>
                    <span className="user-name">Trần Thị Ngọc Ánh</span>
                </Link>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    PaperProps={{
                        style: {
                            width: '180px',
                        },
                    }}
                >
                    <MenuItem sx={{height: 50}} onClick={handleClose}>
                        <PermIdentityOutlinedIcon className="mr-3" /> Profile
                    </MenuItem>
                    <MenuItem sx={{height: 50}} onClick={handleClose}>
                        <LogoutOutlinedIcon className="mr-3" /> Logout
                    </MenuItem>
                </Menu>
            </>

        )

    }

    const renderNotificationDropdown = () => {
        return (
            <>
                <a
                    className="dropdown-toggle no-arrow"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                >
                    <i className="icon-copy dw dw-notification"></i>
                    <span className="badge notification-active"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <div className="notification-list mx-h-350 customscroll">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/img.jpg" alt="" />
                                    <h3>John Doe</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/photo1.jpg" alt="" />
                                    <h3>Lea R. Frith</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/photo2.jpg" alt="" />
                                    <h3>Erik L. Richards</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/photo3.jpg" alt="" />
                                    <h3>John Doe</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/photo4.jpg" alt="" />
                                    <h3>Renee I. Hansen</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="vendors/images/img.jpg" alt="" />
                                    <h3>Vicki M. Coleman</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed...
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="header">
                <div className="header-left">
                    <div className="menu-icon bi bi-list" onClick={() => toggleMenu(!toggleMenu$.value)}></div>
                    <div
                        className="search-toggle-icon bi bi-search"
                        data-toggle="header_search"
                    ></div>
                    <div className="header-search">
                        <form>
                            <div className="form-group mb-0 header-search_group">
                                <i className="fa fa-search c-search-icon"></i>
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Search Here"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="header-right">
                    <div className="dashboard-setting user-notification">
                        <div className="dropdown">
                            <a
                                className="dropdown-toggle no-arrow"
                                href="#"
                                onClick={() => setToggleRightPanel(!toggleRightPanel)}
                                data-toggle="right-sidebar"
                            >
                                <i className="dw dw-settings2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="user-notification">
                        <div className="dropdown">
                            {renderNotificationDropdown()}
                        </div>
                    </div>
                    <div className="user-info-dropdown">
                        <div className="dropdown">
                            {renderDropdownMenu()}
                        </div>
                    </div>


                    <div className="cusstom-link">
                        <img src="vendors/images/TD-background.svg" alt=""
                        />
                    </div>
                </div>
            </div>

            <Drawer
                anchor={'right'}
                open={toggleRightPanel}
                onClose={() => setToggleRightPanel(!toggleRightPanel)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>




        </>

    );
}