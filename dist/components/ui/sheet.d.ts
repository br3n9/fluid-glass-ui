import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
declare const Sheet: any;
declare const SheetTrigger: any;
declare const SheetClose: any;
declare const SheetPortal: any;
declare const SheetOverlay: React.ForwardRefExoticComponent<any>;
declare const sheetVariants: any;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<any>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<any>;
declare const SheetDescription: React.ForwardRefExoticComponent<any>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
