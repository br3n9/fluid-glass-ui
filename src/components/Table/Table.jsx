import React from 'react';
import { tv } from 'tailwind-variants';

const table = tv({
  slots: {
    wrapper: 'relative',
    table: 'min-w-full w-full table-auto',
  },
  variants: {
    isCompact: {
      true: {
        table: 'text-sm',
      },
    },
  },
  defaultVariants: {
    isCompact: false,
  },
});

const Table = React.forwardRef((
  { children, isCompact, className, ...props },
  ref
) => {
  const { wrapper, table: tableStyles } = table({ isCompact });

  return (
    <div className={wrapper({ class: className })}>
      <table ref={ref} className={tableStyles()} {...props}>
        {children}
      </table>
    </div>
  );
});

Table.displayName = 'Table';

export default Table;
