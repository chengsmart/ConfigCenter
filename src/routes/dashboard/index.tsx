import DashboardTabbar from '@/components/dashboard-tabbar';
import HeaderBar from '@/components/header-bar';
import InsertField from '@/components/insert-field';
import { useState } from 'react';
import './index.less';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('IOS');
  return (
    <div className="dashboard">
      <HeaderBar titleText={activeTab} renderOther={() => <InsertField env={activeTab} />} />
      <DashboardTabbar tab={activeTab} setTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;
