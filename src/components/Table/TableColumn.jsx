import React from 'react';
import { tv } from 'tailwind-variants';

const tableColumn = tv({
  slots: {
    base: 'group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50',
  },
});

const TableColumn = React.forwardRef(({ children, className, ...props }, ref) => {
  const { base } = tableColumn();

  return (
    <th ref={ref} className={base({ class: className })} {...props}>
      {children}
    </th>
  );
});

TableColumn.displayName = 'TableColumn';

export default TableColumn;
