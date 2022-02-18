import DashboardTabbar from '@/components/dashboard-tabbar';
import HeaderBar from '@/components/header-bar';
import HeaderBtn from '@/components/header-btn';
import { useState } from 'react';
import './index.less';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('IOS');
  return (
    <div className="dashboard">
      <HeaderBar showBackBtn={false} titleText={activeTab} renderOther={() => <HeaderBtn platform={activeTab} />} />
      <DashboardTabbar tab={activeTab} setTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;
