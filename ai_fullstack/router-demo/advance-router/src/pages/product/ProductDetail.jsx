import {
    useParams
} from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  return (
    <>
      <h1>产品详情 {productId}</h1>
    </>
  );
}