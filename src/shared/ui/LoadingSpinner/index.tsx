import * as React from "react";
import { cn } from "@/shared/lib/utils";

const spinnerStyles = "border-4 border-t-4 rounded-full animate-spin";

const defaultSpinnerColors = {
  border: "gray-200",
  borderTop: "gray-900",
  size: "w-16 h-16",
};

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  borderColor?: string;
  borderTopColor?: string;
  size?: number | string;
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  (props, ref) => {
    const { className, borderColor, borderTopColor, size, ...rest } = props;

    const borderStyle = cn(
      `${spinnerStyles} border-${borderColor || defaultSpinnerColors.border} border-t-${
        borderTopColor || defaultSpinnerColors.borderTop
      }`,
    );

    const sizeStyle = size ? `h-${size} w-${size}` : defaultSpinnerColors.size;

    return (
      <div className={cn(sizeStyle, className)} ref={ref} {...rest}>
        <div className={cn(borderStyle, sizeStyle)} />
      </div>
    );
  },
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };
