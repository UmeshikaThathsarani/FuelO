import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { PAGES } from '../../constants/constant';

import './AppNavBar.css';

function AppNavBar() {
  const navigate = useNavigate();

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {PAGES.map((page) => (
        <Menu.Item key={page.id} onClick={() => navigate(page.path)}>
          {page.icon}
          {page.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default AppNavBar;
