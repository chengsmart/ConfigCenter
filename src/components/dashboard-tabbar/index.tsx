import { getConfigListApi } from '@/api';
import ConfigList from '@/components/dashboard-tabbar/config-list';
import { TabBar } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { AiFillAndroid, AiFillApple, AiFillWechat } from 'react-icons/ai';
import './index.less';

type IProps = {
  tab: 'IOS' | 'Android' | 'MiniApp';
  setTab: (k: string) => void;
};
const DashboardTabbar = ({ tab, setTab }: IProps) => {
  const [dataList, setDataList] = useState([]);
  const queryConfigList = async (tab: 'IOS' | 'Android' | 'MiniApp') => {
    try {
      const { resData } = await getConfigListApi({
        source: tab.toLocaleLowerCase(),
        pageIndex: 1,
        pageSize: 10
      });
      setDataList(resData);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    queryConfigList(tab);
  }, [tab]);
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
          {!!dataList.length ? <ConfigList list={dataList} key="IOS" /> : null}
        </TabBar.Item>
        <TabBar.Item
          title="Android"
          key="Android"
          icon={<AiFillAndroid className="tab-icon" />}
          selectedIcon={<AiFillAndroid className="tab-icon" />}
          selected={tab === 'Android'}
          onPress={() => setTab('Android')}
        >
          {!!dataList.length ? <ConfigList list={dataList} key="Android" /> : null}
        </TabBar.Item>
        <TabBar.Item
          title="MiniApp"
          key="MiniApp"
          icon={<AiFillWechat className="tab-icon" />}
          selectedIcon={<AiFillWechat className="tab-icon" />}
          selected={tab === 'MiniApp'}
          onPress={() => setTab('MiniApp')}
        >
          {!!dataList.length ? <ConfigList list={dataList} key="MiniApp" /> : null}
        </TabBar.Item>
      </TabBar>
    </div>
  );
};
export default DashboardTabbar;
