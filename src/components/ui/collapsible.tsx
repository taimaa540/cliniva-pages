"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from "@radix-ui/react-collapsible";
import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

// ✅ Collapsible
interface ExtendedCollapsibleProps extends CollapsibleProps {
  children?: ReactNode;
  className?: string;
}

const Collapsible = forwardRef<HTMLDivElement, ExtendedCollapsibleProps>(
  ({ children, className, ...props }, ref) => (
    <CollapsiblePrimitive.Root ref={ref} className={className} {...props}>
      {children}
    </CollapsiblePrimitive.Root>
  )
);
Collapsible.displayName = "Collapsible";

// ✅ CollapsibleTrigger
interface ExtendedTriggerProps
  extends CollapsibleTriggerProps,
    HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  asChild?: boolean;
}

const CollapsibleTrigger = forwardRef<
  HTMLButtonElement,
  ExtendedTriggerProps
>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger ref={ref} {...props}>
    {children}
  </CollapsiblePrimitive.CollapsibleTrigger>
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

// ✅ CollapsibleContent
interface ExtendedContentProps
  extends CollapsibleContentProps,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  asChild?: boolean;
}

const CollapsibleContent = forwardRef<
  HTMLDivElement,
  ExtendedContentProps
>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent ref={ref} {...props}>
    {children}
  </CollapsiblePrimitive.CollapsibleContent>
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
