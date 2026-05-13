import { Navigate } from 'react-router-dom';

export default function ProtectRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLogin') === 'true';
  if(!isLoggedIn) {
    // 未登录，跳转到登录页
    return <Navigate to="/login" />;
  }

  return (
    <>
      {children}
    </>
  );
}