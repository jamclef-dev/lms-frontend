import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const ScrollArea = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative overflow-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
});

ScrollArea.displayName = "ScrollArea";

export { ScrollArea }; 