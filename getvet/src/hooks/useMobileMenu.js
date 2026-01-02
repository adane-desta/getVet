import { useEffect, useState } from 'react';

function useMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return {
    open,
    toggleMenu: () => setOpen(prev => !prev)
  };
}

export default useMobileMenu;