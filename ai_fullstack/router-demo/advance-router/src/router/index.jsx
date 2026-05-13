import {
    Navigate, // 重定向路由
    Routes, // 一组路由
    Route  // 单个路由
} from 'react-router-dom';
import {
    lazy,
    Suspense // 可以“等待”异步操作，并在等待期间展示 fallback 内容，等数据准备好后再渲染真实组件
} from 'react';
import LoadingFallback from '../components/LoadingFallback';
//import Home from './pages/Home';
const Home = lazy(() => import('../pages/Home'));// 懒加载
// import About from './pages/About';
const About = lazy(() => import('../pages/About'));// 懒加载
const UserProfile = lazy(() => import('../pages/UserProfile'));
const Product = lazy(() => import('../pages/product'));
const ProductDetail = lazy(() => import('../pages/product/ProductDetail'));
const NewProduct = lazy(() => import('../pages/product/NewProduct'));
const Login = lazy(() => import('../pages/Login'));
const Pay = lazy(() => import('../pages/Pay'));
const ProtectRoute = lazy(() => import('../components/ProtectRoute'));
const NotFound = lazy(() => import('../pages/NotFound'));
const NewPath = lazy(() => import('../pages/NewPath'));

export default function RouterConfig() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* 动态路由  http(s)://www.juejin.cn/user/123?keyword=23#/about
              协议: // domain/path/:params?queryString
          */}
                <Route path="/user/:id" element={<UserProfile />} />

                <Route path="/products" element={<Product />}>
                    <Route path="new" element={<NewProduct />} />
                    <Route path=":productId" element={<ProductDetail />} />
                </Route>
                <Route path="/login" element={<Login />} />
                {/* 重定向路由 */}
                <Route path="/old-path" element={<Navigate replace to="/new-path" />} />
                <Route path="/new-path" element={<NewPath />} />
                {/* 鉴权的路由 */}
                <Route path="/pay" element={
                    <ProtectRoute>
                        <Pay />
                    </ProtectRoute>
                } />
                {/* 404 页面 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}