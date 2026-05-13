import {
    useParams
} from 'react-router-dom';

export default function UserProfile() {
  const { id } = useParams();// 路由参数对象
  return (
    <>
      <h1>User Profile</h1>
      <p>ID: {id}</p>
    </>
  );
}