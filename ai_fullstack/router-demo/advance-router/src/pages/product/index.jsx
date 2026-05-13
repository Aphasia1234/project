import {
    Outlet  // 子路由出口
} from 'react-router-dom';

export default function Product() {
  return (
    <>
      <h1>产品列表</h1>
      <Outlet /> {/* 子路由出口, 用于渲染子路由组件 */}
    </>
  );
}