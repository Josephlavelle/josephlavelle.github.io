import { useEffect } from 'react';
import { activeTheme } from '../config/themes';

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--accent', activeTheme.accent);
    root.style.setProperty('--accent-rgb', activeTheme.accentRgb);
    root.style.setProperty('--accent-secondary', activeTheme.accentSecondary);
    root.style.setProperty('--accent-secondary-rgb', activeTheme.accentSecondaryRgb);
  }, []);
}
