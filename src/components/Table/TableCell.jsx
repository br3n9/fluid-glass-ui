import React from 'react';
import { tv } from 'tailwind-variants';

const tableCell = tv({
  slots: {
    base: 'group/td p-4',
  },
});

const TableCell = React.forwardRef(({ children, className, ...props }, ref) => {
  const { base } = tableCell();

  return (
    <td ref={ref} className={base({ class: className })} {...props}>
      {children}
    </td>
  );
});

TableCell.displayName = 'TableCell';

export default TableCell;
