import React, { FC, useRef} from 'react';
import './renderNavigation.scss';
import { NavItem, Props } from './type';
import useCurrentLocation from './useCurrentLocation/useCurrentLocation';
import useOutsideClick from './useOutsideClick/useOutsideClick';
import useSwipeToClose from './useSwipeToClose/useSwipeToClose'; // Import the new hook
import { useScreenWidth } from './MartialArtsDropdown/useScreenWidth/useScreenWidth'
import ToggleDropdown from './MartialArtsDropdown/toggleDropdown/ToggleDropdown';

export const navItems: NavItem[] = [
  { id: 1, to: '/', label: 'головн', postfix: 'а' },
  { id: 2, to: '/Price', label: 'цін', postfix: 'и' },
  { id: 3, to: '/Schedule', label: 'розклад' },
  { id: 4, to: '/About', label: 'o на', postfix: 'с' },
  { id: 5, to: '/Grappling', label: 'грепплі', postfix: 'нг' },
  { id: 6, to: '/Thaibox', label: 'тайський бо', postfix: 'кс' },
  { id: 7, to: '/MMA', label: 'мм', postfix: 'а' },
  { id: 8, to: '/MMAKids', label: 'mma-ki', postfix: 'ds' },
  { id: 9, to: '/Contacts', label: 'контакт', postfix: 'и' },
  { id: 10, to: '/FAQ', label: 'fa', postfix: 'q' },
];

const RenderNavigation: FC<Props> = ({ isOpen, setIsOpen }) => {
  const currentPath = useCurrentLocation();
  const navRef = useRef<HTMLElement>(null);
  
  useOutsideClick(navRef, () => setIsOpen(false));
  useSwipeToClose(navRef, () => setIsOpen(false)); // Use the swipe-to-close hook

  const screenWidth = useScreenWidth();
  const isSmallScreen = screenWidth <= 1024; // redo to 1024, this is for convenience 

  const { isDropDownOpened, toggleDropdown } = ToggleDropdown(); // Use the ToggleDropdown component
  // Function to check if any dropdown item is active
  const isDropdownItemActive = navItems.slice(4, 8).some(item => currentPath === item.to);

  const renderNavItems = (items: NavItem[]) => (
    items.map((item) => (
      <li key={item.id}>
        <a
          href={item.to}
          className={currentPath === item.to ? "active" : ""}
        >
          <span className='item__label'>{item.label}</span>
          {item.postfix}
        </a>
      </li>
    ))
  );

  return (
    <nav ref={navRef} className={isOpen ? "open" : ""}>
      <ul>
        {isSmallScreen ? (
          <>
            {screenWidth === 768 ? renderNavItems(navItems.slice(0,2)) : renderNavItems(navItems.slice(0, 4))}
            <li className="dropdown">
              <a href="#!" className={`dropdown-toggle ${isDropdownItemActive ? 'color' : ''}`} role="button" aria-expanded="false"  onClick={toggleDropdown}>
                Martial Arts
              </a>
              {isDropDownOpened && ( // Conditionally render the dropdown menu
                <ul className="dropdown__menu" aria-label="Martial Arts Dropdown">
                  {screenWidth === 768 ? renderNavItems(navItems.slice(2, 8)) : renderNavItems(navItems.slice(4, 8))}
                </ul>
              )}
            </li>
            {renderNavItems(navItems.slice(8))}
          </>
        ) : (
          renderNavItems(navItems)
        )}
      </ul>
    </nav>
  );
}


export default RenderNavigation;
