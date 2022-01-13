import { getConfigListApi } from '@/api';
import { List, SwipeAction, Switch } from 'antd-mobile';
import { useEffect, useState } from 'react';
import './index.less';

const ConfigList = () => {
  const [isOpen, setOpen] = useState(false);
  const configList = async () => {
    try {
      const { resData } = await getConfigListApi({
        source: 'IOS',
        pageIndex: 1,
        pageSize: 10
      });
      console.log(resData);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    configList();
  }, []);
  return (
    <div className="config-list">
      <List>
        <SwipeAction
          right={[
            {
              text: '删除',
              onPress: () => console.log('delete'),
              className: 'btn-delete'
            }
          ]}
          autoClose
        >
          <List.Item
            extra={
              <Switch
                checked={isOpen}
                onChange={e => {
                  setOpen(e);
                }}
              />
            }
          >
            key
          </List.Item>
        </SwipeAction>
      </List>
    </div>
  );
};
export default ConfigList;
