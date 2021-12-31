import ConfigList from '@/components/dashboard-tabbar/config-list';
import { TabBar } from 'antd-mobile';
import { AiFillAndroid, AiFillApple, AiFillWechat } from 'react-icons/ai';
import './index.less';

type IProps = {
  tab: string;
  setTab: (k: string) => void;
};
const DashboardTabbar = ({ tab, setTab }: IProps) => {
  return (
    <div className="dashboard-tabbar">
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={false}>
        <TabBar.Item
          title="IOS"
          key="IOS"
          icon={<AiFillApple className="tab-icon" />}
          selectedIcon={<AiFillApple className="tab-icon" />}
          selected={tab === 'IOS'}
          onPress={() => setTab('IOS')}
        >
          <ConfigList />
        </TabBar.Item>
        <TabBar.Item
          title="Android"
          key="Android"
          icon={<AiFillAndroid className="tab-icon" />}
          selectedIcon={<AiFillAndroid className="tab-icon" />}
          selected={tab === 'Android'}
          onPress={() => setTab('Android')}
        >
          <ConfigList />
        </TabBar.Item>
        <TabBar.Item
          title="MiniApp"
          key="MiniApp"
          icon={<AiFillWechat className="tab-icon" />}
          selectedIcon={<AiFillWechat className="tab-icon" />}
          selected={tab === 'MiniApp'}
          onPress={() => setTab('MiniApp')}
        >
          <ConfigList />
        </TabBar.Item>
      </TabBar>
    </div>
  );
};
export default DashboardTabbar;
