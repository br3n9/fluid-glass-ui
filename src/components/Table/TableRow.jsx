import React from 'react';
import { tv } from 'tailwind-variants';

const tableRow = tv({
  slots: {
    base: 'group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50',
  },
});

const TableRow = React.forwardRef(({ children, className, ...props }, ref) => {
  const { base } = tableRow();

  return (
    <tr ref={ref} className={base({ class: className })} {...props}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
