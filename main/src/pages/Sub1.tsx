/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';

export const Sub1 = ({ data }: { data: any; setData: React.Dispatch<any> }) => {
  return (
    <micro-app
      name='sub1'
      url='http://localhost:3001'
      baseroute='/sub1'
      // keep-alive
      data={data}
      onCreated={() => console.log('micro-app元素被创建')}
      onBeforemount={() => console.log('即将被渲染')}
      onMounted={() => console.log('已经渲染完成')}
      onUnmount={() => console.log('已经卸载')}
      onError={() => console.log('渲染出错')}
    ></micro-app>
  );
};
