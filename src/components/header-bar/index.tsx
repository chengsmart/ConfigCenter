import React from 'react';
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

const Other = ({ render }) => render();

const HeaderBar = ({ showBackBtn = true, children, titleText, renderOther, ...otherProps }: IProps) => {
  return (
    <div className="header-bar">
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
