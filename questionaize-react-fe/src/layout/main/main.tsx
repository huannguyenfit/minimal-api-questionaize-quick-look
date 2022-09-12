import { Link, Outlet } from 'react-router-dom';
import { default as React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, toggleMenu$ } from './header';

import './main.scss';
import SideNav from './sidebar';


const MainLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
      const subscribe = toggleMenu$.subscribe((value) => {
          setToggleMenu(value);
      });
      return () => {
          subscribe.unsubscribe();
      };
  }, []);
  return (
    <div className={toggleMenu ? "sidebar-shrink" : ""}>
      <Header />
      <SideNav  />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
