// src/components/button/Button.tsx

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";

/**
 * Button Variants
 *
 * This function (`cva`) is used to define consistent styling for buttons
 * across the application. It allows you to create different styles
 * based on `variant` and `size` props.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
        neutral: "bg-gray-500 text-white hover:bg-gray-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * ButtonProps Interface
 *
 * Extends the standard button HTML attributes.
 * Adds the `variant` and `size` properties based on `buttonVariants`.
 * Optionally, you can set `asChild` to allow using a custom element.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * ButtonConfig Type
 *
 * Defines the configuration for dynamically creating buttons.
 * This type ensures all button components maintain consistency.
 */
export type ButtonConfig = {
  label: string;
  onClick: () => void;
  variant: NonNullable<ButtonProps["variant"]>;
  size: NonNullable<ButtonProps["size"]>;
};

/**
 * Button Component
 *
 * This component is designed to render a customizable button with various styles.
 * By default, it uses a standard HTML button element, but you can pass `asChild`
 * to use a different base component (e.g., for integrating with routing libraries).
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use either the default "button" or the provided Slot component as the root element.
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// Set a display name for debugging in React Developer Tools.
Button.displayName = "Button";

export { Button, buttonVariants };
