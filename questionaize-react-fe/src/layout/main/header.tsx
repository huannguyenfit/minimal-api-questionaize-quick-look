import { BehaviorSubject } from "rxjs";
import React, { useMemo, useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, Button, IconButton, InputBase, Link, ListItemAvatar, Menu, MenuItem, Paper, Popover, Toolbar, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Trans, useTranslation } from "react-i18next";
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { useSettings } from "@core/contexts/SettingsProvider";
import { drawerCollapsedWidth, drawerWidth } from "@core/components/SettingsDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import notifications from './notification.json'
// handle loading
export const toggleMenu$ = new BehaviorSubject<boolean>(false);

export const toggleMenu = (value: boolean) => {
    toggleMenu$.next(value);
};
export const Header = () => {
    const [toggleRightPanel, setToggleRightPanel] = useState(false);
    const { t } = useTranslation()
    const { collapsed } = useSettings();
    const width = collapsed ? drawerCollapsedWidth : drawerWidth;
    const [anchorDropdownMenu, setAnchorDropdownMenu] = React.useState<null | HTMLElement>(null);
    const notification = [...notifications]
    const [anchorNotification, setAnchorNotification] = useState<null | HTMLElement>(null);
    const openNotification = Boolean(anchorNotification);
    const openDropdown = Boolean(anchorDropdownMenu);

    const openDropdownMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorDropdownMenu(event.currentTarget);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNotification(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorNotification(null);
        setAnchorDropdownMenu(null);
    };

    const renderDropdownMenu = () => {
        return (
            <>
                <Box >

                    <Link sx={{
                        display: "flex",
                        gap: '10px',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                        color="inherit"
                        onClick={(e: any) => openDropdownMenu(e)}
                    >
                        <Avatar src={`https://i.pravatar.cc/150?img=44`} />
                        <span>Trần Thị Ngọc Ánh</span>
                        <KeyboardArrowDownOutlinedIcon />
                    </Link>
                    <Menu id="basic-menu"
                        anchorEl={anchorDropdownMenu}
                        open={openDropdown}
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
                        }}>
                        <MenuItem sx={{ height: 50 }} onClick={handleClose}>
                            <PermIdentityOutlinedIcon className="mr-3" /> {t('profile')}
                        </MenuItem>
                        <MenuItem sx={{ height: 50 }} onClick={handleClose}>
                            <LogoutOutlinedIcon className="mr-3" />  {t('LogOut')}
                        </MenuItem>
                    </Menu>
                </Box>

            </>
        )
    }

    const renderNotificationDropdown = () => {
        return (
            <>
                <Box>
                    <IconButton
                        id="notifications-button"
                        aria-controls="notifications-popover"
                        aria-haspopup="true"
                        aria-expanded={openNotification ? "true" : "false"}
                        aria-label="show recent notifications"
                        color="inherit"
                        onClick={handleClick}
                    >
                        <Badge color="error" variant="dot" >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Popover
                        id="notifications-popover"
                        open={openNotification}
                        anchorEl={anchorNotification}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <Box sx={{ width: 360 }}>
                            <List
                                component="nav"
                                aria-label="notifications popover"
                                sx={{ px: 2 }}
                            >
                                {notification.map((notification) => (
                                    <ListItem
                                        button
                                        component={NavLink}
                                        key={notification.id}
                                        to={""}
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PersonIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Trans
                                                    components={{ bold: <strong /> }}
                                                    defaults="<bold>{{ user }}</bold> did someting <bold>{{ quantity }}</bold> times"
                                                    values={notification.params}
                                                />
                                            }
                                            secondary={new Date(notification.createdAt).toLocaleDateString()}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <Box sx={{ px: 2, pb: 2 }}>
                                <Button
                                    color="secondary"
                                    fullWidth
                                    sx={{ bgcolor: "background.default" }}
                                    variant="contained"
                                >
                                    {t("admin.header.notifications.seeAll")}
                                </Button>
                            </Box>
                        </Box>
                    </Popover>
                </Box>
            </>
        )
    }
    const toggleDrawer = () => {

    }
    return (
        <>
            <AppBar
                color="default"
                position="fixed"
                sx={{
                    width: { lg: `calc(100% - ${width}px)` },
                    marginLeft: { lg: 280 },
                }}
            >

                <Toolbar sx={{ bgcolor: '#fff', px: { xs: 3, sm: 6 } }}>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: 2,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid #d4d4d4', width: 250 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1, }}
                                placeholder={t('common.search')}
                                inputProps={{ 'aria-label': t('common.search') }}
                            />
                            <IconButton type="button" sx={{ p: '4px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', }}>
                        <Link href="#" color="inherit" onClick={() => setToggleRightPanel(!toggleRightPanel)} >
                            <SettingsOutlinedIcon />
                        </Link>
                        {renderNotificationDropdown()}
                        {renderDropdownMenu()}
                    </Box>
                </Toolbar>
            </AppBar>

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