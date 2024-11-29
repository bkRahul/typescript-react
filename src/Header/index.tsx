import { NavLink } from 'react-router-dom'

const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
  return { fontWeight: isActive ? 'bold' : 'normal' }
}

export const Header = () => {
  return (
    <div className='nav'>
      <NavLink style={navLinkStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to='/mui'>
        Mui
      </NavLink>
      <NavLink style={navLinkStyle} to='/products'>
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to='/order'>
        Order
      </NavLink>
      <NavLink to='/tasks'>
        {({ isActive }) => <span>{isActive ? 'Active' : 'Inactive'}</span>}
      </NavLink>
    </div>
  )
}
