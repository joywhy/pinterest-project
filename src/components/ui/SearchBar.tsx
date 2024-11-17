import { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
type InputProps = InputHTMLAttributes<HTMLInputElement>;

function SearchBar({ className, ...props }: InputProps) {
  return (
    <div
      className={cn(
        'flex-1 h-12 flex items-center text-base  rounded-lg gap-2 pl-2 bg-white',
        ' focus-within:outline-4 focus-within:outline   focus-within:outline-red-400',
        className
      )}
    >
      <Search className="text-black" />
      <input
        {...props}
        type="search"
        className="w-full p-2 text-lg placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}

export { SearchBar };
