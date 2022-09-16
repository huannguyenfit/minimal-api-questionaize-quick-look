import { Outlet, useRoutes } from 'react-router-dom';
import { default as React, useState } from 'react';
import { Header, toggleMenu$ } from './Header';

import SideNav from './LeftSideBar';
import { Box, Toolbar } from '@mui/material';
import { useSettings } from '@core/contexts/SettingsProvider';
import masterLayoutRoutings from './MasterLayoutRoutings';

const MasterLayout = () => {
	const mainRoles = useRoutes(masterLayoutRoutings)

  const [settingsOpen, setSettingsOpen] = useState(false);
  const { collapsed, open, toggleDrawer } = useSettings();

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };
  return (
    <Box sx={{
      display: "flex", 
      flexDirection: { xs: 'column', md: 'row' },
    }}>
      <Header />
      <SideNav
        collapsed={collapsed}
        mobileOpen={open}
        onDrawerToggle={toggleDrawer}
        onSettingsToggle={handleSettingsToggle} />
      <Box component="main" sx={{ flexGrow: 1, pb: 3, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
        <Outlet />
        {/* {mainRoles} */}
      </Box>
    </Box>
  );
};

export default MasterLayout;
