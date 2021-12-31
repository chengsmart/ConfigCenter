import { Modal, Toast } from 'antd-mobile';
import { AiOutlinePlus } from 'react-icons/ai';
import './index.less';

const prompt = Modal.prompt;
type IProps = {
  env: string;
};
const InsertField = ({ env }: IProps) => {
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
          onPress: value =>
            new Promise((resolve, reject) => {
              // TODO api调用
              Toast.info('添加成功', 1);
              setTimeout(() => {
                resolve(1);
                console.log(`value:${value}`);
              }, 1000);
            })
        }
      ],
      'default',
      undefined,
      ['请输入要增加的字段']
    );
  };
  return (
    <div className="insert-field">
      <AiOutlinePlus className="btn-add" onClick={openModal} />
    </div>
  );
};
export default InsertField;
