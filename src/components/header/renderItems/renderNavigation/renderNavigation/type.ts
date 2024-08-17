// RenderNavigation component (const navItems)
export interface NavItem {
    id: number;
    to: string;
    label: string;
    postfix?: string;
  }
// RenderNavigation component
  export interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  }

// MartialArtsDropdown component
  export interface MobileMenuItem{
    id: number;
    to: string;
    label: string;
    postfix?: string;
  }
