import React from 'react';
import { tv } from 'tailwind-variants';

const tableHeader = tv({
  slots: {
    base: 'group/thead',
  },
});

const TableHeader = React.forwardRef(({ children, className, ...props }, ref) => {
  const { base } = tableHeader();

  return (
    <thead ref={ref} className={base({ class: className })} {...props}>
      {children}
    </thead>
  );
});

TableHeader.displayName = 'TableHeader';

export default TableHeader;
