import HeaderBar from '@/components/header-bar';
import InsertField from '@/components/insert-field';
import qs from 'qs';
import { useMemo } from 'react';
import './index.less';

const Create = props => {
  const platform = useMemo(
    () => qs.parse(props.location.search, { ignoreQueryPrefix: true }).platform,
    [props.location.search]
  );
  return (
    <div className="create">
      <HeaderBar titleText="新增配置项" />
      <InsertField platform={platform} />
    </div>
  );
};

export default Create;
