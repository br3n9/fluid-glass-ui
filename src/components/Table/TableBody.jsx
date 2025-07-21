import React from 'react';
import { tv } from 'tailwind-variants';

const tableBody = tv({
  slots: {
    base: 'group/tbody',
  },
});

const TableBody = React.forwardRef(({ children, className, ...props }, ref) => {
  const { base } = tableBody();

  return (
    <tbody ref={ref} className={base({ class: className })} {...props}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';

export default TableBody;
