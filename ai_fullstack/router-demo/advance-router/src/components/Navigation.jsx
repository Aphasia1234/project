import {
    useResolvedPath,// 获取当前路由的解析路径
    Link, // 导航链接
    useMatch// 检查当前路由是否匹配指定路径
} from 'react-router-dom';

export default function Navigation() {
    const isActive = (to) =>{
        const resolvedPath = useResolvedPath(to);
        const match = useMatch({
            path:resolvedPath.pathname,
            end:true // 匹配到指定路径的结束位置,严格匹配
        });
        return match ? 'active' : '';
    }
    return (
        <nav>
            <ul>
                <li><Link to="/" className={isActive('/')}>Home</Link></li>
                <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                <li><Link to="/user/123" className={isActive('/user/123')}>User Profile</Link></li>
                <li><Link to="/products" className={isActive('/products')}>Product</Link></li>
                <li><Link to="/products/new" className={isActive('/products/new')}>New Product</Link></li>
                <li><Link to="/products/123" className={isActive('/products/123')}>Product Detail</Link></li>
                <li><Link to="/login" className={isActive('/login')}>Login</Link></li>
                <li><Link to="/pay" className={isActive('/pay')}>Pay</Link></li>
                <li><Link to="/old-path" className={isActive('/old-path')}>Old Path</Link></li>
            </ul>
        </nav>
    )
}