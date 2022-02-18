import { createConfigApi } from '@/api';
import history from '@/routes/history';
import { removeStorage } from '@/utils/storage';
import { Modal, Toast } from 'antd-mobile';
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import './index.less';

const { alert } = Modal;
type IProps = {
  platform: string;
};
const HeaderBtn = ({ platform }: IProps) => {
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
  const toCreate = () => {
    history.push(`/create?platform=${platform.toLocaleLowerCase()}`);
  };
  return (
    <div className="header-btn">
      <AiOutlineLogout className="btn-logout" onClick={logout} />
      <AiOutlinePlus className="btn-add" onClick={toCreate} />
    </div>
  );
};
export default HeaderBtn;
