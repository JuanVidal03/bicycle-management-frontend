import {
  TbLayout2Filled,
  TbLayout2,
  TbBikeFilled,
  TbBike,
  TbUser,
  TbUserFilled,
  TbCalendarMonth,
  TbCalendarMonthFilled,
  TbLogout,
} from 'react-icons/tb';
import { MenuItem as MenuItemInterface } from '../interface/menuItems.interface.ts';
import MenuItem from './MenuItem.tsx';

const Sidebar = (): JSX.Element => {
  const menuItems: MenuItemInterface[] = [
    {
      path: '/dashboard',
      title: 'Dashboard',
      activeIcon: <TbLayout2Filled className="text-white text-2xl" />,
      inactiveIcon: <TbLayout2 className="text-white text-2xl" />,
    },
    {
      path: '/users',
      title: 'Usuarios',
      activeIcon: <TbUserFilled className="text-white text-2xl" />,
      inactiveIcon: <TbUser className="text-white text-2xl" />,
    },
    {
      path: '/bicycles',
      title: 'Bicicletes',
      activeIcon: <TbBikeFilled className="text-white text-2xl" />,
      inactiveIcon: <TbBike className="text-white text-2xl" />,
    },
    {
      path: '/events',
      title: 'Eventos',
      activeIcon: <TbCalendarMonthFilled className="text-white text-2xl" />,
      inactiveIcon: <TbCalendarMonth className="text-white text-2xl" />,
    },
  ];

  return (
    <aside className="w-full h-screen max-w-[270px] bg-dark-black flex flex-col justify-between p-4">
      <div>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            path={menuItem.path}
            title={menuItem.title}
            activeIcon={menuItem.activeIcon}
            inactiveIcon={menuItem.inactiveIcon}
          />
        ))}
      </div>

      <MenuItem
        title='Cerrar sesion'
        path='/login'
        activeIcon={<TbLogout className='text-white text-2xl'/>}
        inactiveIcon={<TbLogout className='text-white text-2xl'/>}
      />
    </aside>
  );
};

export default Sidebar;
