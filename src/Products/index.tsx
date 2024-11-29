import { Button } from '../components/Button/Button';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
  return { fontWeight: isActive ? 'bold' : 'normal' };
};
export const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button btnName='Order Product' onClick={() => navigate('/order')} />
      <Button
        btnName='Order Product Replace History'
        onClick={() => navigate('/order', { replace: true })}
      />
      <div className='nav'>
        <NavLink style={navLinkStyle} to='featured' replace>
          Featured
        </NavLink>
        <NavLink style={navLinkStyle} to='electronics' replace>
          Electronics
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};
