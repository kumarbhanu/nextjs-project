'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false); 
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) return null; 

 
  const renderThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <MoonIcon />;
      case 'light':
        return <SunIcon />;
      default:
        return <SunMoon />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {renderThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {['system', 'dark', 'light'].map((mode) => (
          <DropdownMenuCheckboxItem
            key={mode}
            checked={theme === mode}
            onClick={() => setTheme(mode)}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
