import menu from '../../utils/menu';
import { NavLink } from 'react-router-dom';

const Menu = ({ active, action }) => {
  return (
    <ul className={`main-menu ${active ? 'is-active' : ''}`}>
      {menu.map((item) => (
        <li key={item.title} className="main-menu__item">
          {item.title !== 'Lift-off' ? (
            <NavLink
              onClick={action}
              className={'main-menu__link'}
              to={item.link}
            >
              {item.title}
            </NavLink>
          ) : (
            <a onClick={action} className={'main-menu__link'} href={item.link}>
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
