import React from 'react';
import Loadable from 'react-loadable';

// import Loading, { LoadingType } from '@components/loading';

/**
 * @description 路由切换loading
 * @returns {JSX.Element}
 */
const LoadingComponent = () => (
  <h1>loading</h1>
  // <Loading type={LoadingType.BG_TYPE} visable fixed />
);

export const LoadableComponent = (
  loader: any,
  opts?:
    | Loadable.OptionsWithoutRender<unknown>
    | Loadable.OptionsWithRender<unknown, object>
    | undefined
) => () =>
    Loadable({
      loader,
      delay: 100000,
      timeout: 10000,
      loading: LoadingComponent,
      ...opts
    });
