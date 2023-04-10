import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { PAGES } from '../../constants/constant';

import './AppNavBar.css';

function AppNavBar() {
  const navigate = useNavigate();

  return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className="menu-item">
        {PAGES.map((page) => (
          <Menu.Item key={page.id} onClick={() => navigate(page.path)}>
            {page.icon}
            <span>{page.name}</span>
          </Menu.Item>
        ))}
      </Menu>
  );
}

export default AppNavBar;
