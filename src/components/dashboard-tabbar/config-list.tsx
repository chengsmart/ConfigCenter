import { getConfigListApi } from '@/api';
import { List, SwipeAction, Switch } from 'antd-mobile';
import { useEffect, useState } from 'react';
import './index.less';

const ConfigList = (props: { list: any }) => {
  const changeState = e => {};
  return (
    <div className="config-list">
      <List>
        {props.list.map((item, i) => (
          <SwipeAction
            key={i}
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
                  checked={!item.state}
                  onChange={e => {
                    changeState(e);
                  }}
                />
              }
            >
              {item.key_name}
            </List.Item>
          </SwipeAction>
        ))}
      </List>
    </div>
  );
};
export default ConfigList;
