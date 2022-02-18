import { createConfigApi } from '@/api';
import history from '@/routes/history';
import { removeStorage } from '@/utils/storage';
import { Modal, Toast } from 'antd-mobile';
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import './index.less';

const { alert, prompt } = Modal;
type IProps = {
  env: string;
};
const InsertField = ({ env }: IProps) => {
  const logout = () => {
    alert('退出登录', '', [
      { text: '再看看', onPress: () => {} },
      {
        text: '退出',
        onPress: () => {
          removeStorage('token');
          history.replace('/login');
        }
      }
    ]);
  };
  const createKey = async (key: string) => {
    try {
      const res = await createConfigApi({ key, source: env.toLocaleLowerCase() });
      console.log(res);

      Toast.info('添加成功', 1);
    } catch (error: any) {
      Toast.info(`添加失败:${error.msg}`, 1);
    }
  };
  const openModal = () => {
    prompt(
      '新增字段',
      `默认不开启，当前是${env}环境`,
      [
        {
          text: '取消',
          onPress: value => {}
        },
        {
          text: '添加',
          onPress: value => createKey(value)
        }
      ],
      'default',
      undefined,
      ['请输入要增加的字段']
    );
  };
  return (
    <div className="insert-field">
      <AiOutlineLogout className="header-btn btn-logout" onClick={logout} />
      <AiOutlinePlus className="header-btn btn-add" onClick={openModal} />
    </div>
  );
};
export default InsertField;
