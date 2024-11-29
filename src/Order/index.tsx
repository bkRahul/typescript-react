import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button btnName='Go Back' onClick={() => navigate(-1)} />
      <div>Order Completed</div>
    </>
  );
};
