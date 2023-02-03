/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';

export const Vue = () => {
  return (
    <micro-app
      name='vue'
      url='http://localhost:3003'
      baseroute='/vue'
      keep-alive
      onCreated={() => console.log('vue micro-app元素被创建')}
      onBeforemount={() => console.log('即将被渲染')}
      onMounted={() => console.log('已经渲染完成')}
      onUnmount={() => console.log('已经卸载')}
      onError={() => console.log('渲染出错')}
    ></micro-app>
  );
};
