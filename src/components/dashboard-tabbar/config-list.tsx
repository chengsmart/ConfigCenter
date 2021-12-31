import { List, SwipeAction, Switch } from 'antd-mobile';
import { useState } from 'react';
import './index.less';
const ConfigList = () => {
  const [isOpen, setOpen] = useState(false);
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
