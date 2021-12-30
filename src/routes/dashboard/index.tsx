import { TabBar } from 'antd-mobile';
import { useState } from 'react';
import { AiFillAndroid, AiFillApple, AiFillWechat } from 'react-icons/ai';
import ConfigList from './components/config-list';
import './index.less';

const Dashboard = () => {
  const [tabBarHide, setTabBarHide] = useState(false);
  const [activeTab, setActiveTab] = useState('IOS');
  return (
    <div className="dashboard">
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={tabBarHide}>
        <TabBar.Item
          title="IOS"
          key="IOS"
          icon={<AiFillApple className="tab-icon" />}
          selectedIcon={<AiFillApple className="tab-icon" />}
          selected={activeTab === 'IOS'}
          onPress={() => setActiveTab('IOS')}
        >
          <div className="tab-inner">
            <div>IOS</div>
            <ConfigList />
          </div>
        </TabBar.Item>
        <TabBar.Item
          title="Android"
          key="Android"
          icon={<AiFillAndroid className="tab-icon" />}
          selectedIcon={<AiFillAndroid className="tab-icon" />}
          selected={activeTab === 'Android'}
          onPress={() => setActiveTab('Android')}
        >
          <div className="tab-inner">
            <div>Android</div>
            <ConfigList />
          </div>
        </TabBar.Item>
        <TabBar.Item
          title="MiniApp"
          key="MiniApp"
          icon={<AiFillWechat className="tab-icon" />}
          selectedIcon={<AiFillWechat className="tab-icon" />}
          selected={activeTab === 'MiniApp'}
          onPress={() => setActiveTab('MiniApp')}
        >
          <div className="tab-inner">
            <div>MiniApp</div>
            <ConfigList />
          </div>
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default Dashboard;
