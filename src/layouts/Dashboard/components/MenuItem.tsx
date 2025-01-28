import { MenuItem as MenuItemInterface } from '../interface/menuItems.interface';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, path, activeIcon, inactiveIcon }: MenuItemInterface) => {
  return (
    <NavLink
      key={title}
      className={({ isActive }) =>
        `${isActive && 'after:absolute after:w-2 after:h-full after:bg-gray-background after:top-0 after:rounded-l-lg after:right-[-8%]'}
        flex items-center p-4 relative transition-all duration-300 hover:bg-gray-800 rounded-lg`
      }
      to={path}
    >
      {({ isActive }: { isActive: boolean }) => (
        <div className='flex gap-2'>
          {isActive ? activeIcon : inactiveIcon}
          <h6 className="font-semibold text-white">{title}</h6>
        </div>
      )}
    </NavLink>
  );
};

export default MenuItem;
