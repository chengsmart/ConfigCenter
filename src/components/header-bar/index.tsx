import React from 'react';
import history from '@/routes/history';
import { AiOutlineLeft } from 'react-icons/ai';
import './index.less';

type IProps = {
  showBackBtn?: boolean; // 是否显示返回按钮 默认显示
  customGoBack?: any; // 自定义返回，用于返回按键的监听
  titleText: string; // title 文案 与titleNode 互斥
  titleNode?: React.ReactNode;
  renderOther?: (() => React.ReactNode) | false;
  children?: React.ReactChild[] | React.ReactChild;
  needPopView?: boolean; // 是否退出webview
};

const Other = ({ render }: any) => render();

const HeaderBar = ({ showBackBtn = true, children, titleText, renderOther, ...otherProps }: IProps) => {
  const backClick = async props => {
    const { customGoBack, needPopView } = props;
    if (customGoBack) {
      const re = await customGoBack();
      re && history.goBack();
      return;
    }
    if (needPopView) {
      popView();
      return false;
    }
    history.goBack();
  };

  return (
    <div className="header-bar">
      {showBackBtn && (
        <div className="back-btn" onClick={() => backClick(otherProps)}>
          <AiOutlineLeft className="back-btn-icon" />
        </div>
      )}
      {children ? (
        React.Children.map(children, (child: any) => (child ? React.cloneElement(child, { ...otherProps }) : child))
      ) : (
        <h2 className="header-bar-title">{titleText}</h2>
      )}
      {renderOther && <Other render={renderOther} />}
    </div>
  );
};
export default HeaderBar;
