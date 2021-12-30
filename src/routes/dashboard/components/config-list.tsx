import { List, SwipeAction, Switch } from 'antd-mobile';
import '../index.less';
const ConfigList = () => {
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
          <List.Item extra={<Switch />}>key</List.Item>
        </SwipeAction>
      </List>
    </div>
  );
};
export default ConfigList;
