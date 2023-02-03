/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';

export const Sub2 = () => {
  return (
    <micro-app
      name='sub2'
      url='http://localhost:3002'
      baseroute='/sub2'
      error={() => {
        console.log('sub2 加载出错了。。。');
      }}
    ></micro-app>
  );
};
