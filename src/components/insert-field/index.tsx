import { createConfigApi } from '@/api';
import history from '@/routes/history';
import { Button, InputItem, List, Modal, Picker, Switch, Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { useEffect, useMemo, useState } from 'react';
import './index.less';

const { alert } = Modal;
type IProps = {
  platform: string;
};
const InsertField = (props: IProps) => {
  const pickerData = [
    {
      label: 'IOS',
      value: 'ios'
    },
    {
      label: 'Android',
      value: 'android'
    },
    {
      label: 'MiniApp',
      value: 'miniapp'
    }
  ];
  const [keyName, setKeyName] = useState('');
  const [useNow, setUseNow] = useState(false);
  const [platform, setPlatform] = useState([props.platform]);
  const comfirmSave = () => {
    alert(`确认添加字段`, `${keyName}`, [
      { text: '取消', onPress: () => {} },
      {
        text: '确认',
        onPress: createKey
      }
    ]);
  };
  const createKey = async (key: string) => {
    try {
      const res = await createConfigApi({ key: keyName, source: platform, state: useNow ? 1 : 0 });
      console.log(res);

      Toast.info('添加成功', 1, () => {
        history.goBack();
      });
    } catch (error: any) {
      Toast.info(`添加失败:${error.msg}`, 1);
    }
  };
  return (
    <div className="insert-field">
      <List>
        <InputItem
          placeholder="输入要新增的字段名"
          value={keyName}
          maxLength={20}
          onChange={v => setKeyName(v)}
          className="key-input"
        >
          字段
        </InputItem>
        <Picker
          data={pickerData}
          cols={1}
          value={platform}
          onOk={v => {
            setPlatform(v);
          }}
        >
          <List.Item arrow="horizontal">平台</List.Item>
        </Picker>
        <List.Item extra={<Switch checked={useNow} onChange={() => setUseNow(!useNow)} />}>立即启用</List.Item>
      </List>
      <WingBlank>
        <WhiteSpace />
        <Button type="primary" onClick={comfirmSave} disabled={!keyName || keyName.length > 20}>
          新增
        </Button>
      </WingBlank>
    </div>
  );
};
export default InsertField;
