import { useState } from 'react';
import './index.less';

const Dashboard = () => {
  const routes = [
    {
      path: '/home/dashboard',
      component: Dashboard
    }
  ];
  return <div className="dashboard">dashboard</div>;
};

export default Dashboard;
