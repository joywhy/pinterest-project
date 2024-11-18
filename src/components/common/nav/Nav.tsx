import { Link, useLocation } from 'react-router-dom';

import { useAtom } from 'jotai';
import { searchValueAtom } from '@/store';

import { cn } from '@/lib/utils';
import navJson from './nav.json';

interface NavData {
  path: string;
  label: string;
  searchValue: string;
}

function Nav() {
  const [, setSearchValue] = useAtom(searchValueAtom);
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center py-4 items-center  gap-4 ">
      {navJson?.map((nav: NavData, index) => {
        const isActive = pathname === nav.path;

        return (
          <Link
            to={nav.path}
            key={index + 'nav'}
            onClick={() => setSearchValue(nav.searchValue)}
          >
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  ' p-2 rounded-md hover:bg-gray-400',
                  isActive && 'bg-slate-300'
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
