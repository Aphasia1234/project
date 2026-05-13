import { useNavigate } from 'react-router-dom';
import {
    useEffect 
} from 'react';

const NotFound = () => {
    // Link 点击后跳转到登录页
  let navigate = useNavigate();
  // 6秒后跳转到登录页
  useEffect(()=>{
    setTimeout(()=>{
        navigate('/')
    },6000)
  },[])
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
}

export default NotFound;
