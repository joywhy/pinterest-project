// import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';
import navJson from './nav.json';
interface NavData {
  path: string;
  label: string;
  searchValue: string;
}

function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center py-4 items-center border border-red-600 gap-4 ">
      {navJson?.map((nav: NavData, index) => {
        const isActive =
          pathname === nav.path.split('/').pop() ||
          (pathname === '/' && index === 0);

        return (
          <Link to={nav.path} key={index + 'nav'}>
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  ' p-2 rounded-md',
                  isActive && 'bg-gray-600 text-white'
                )}
              >
                {nav.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export { Nav };
