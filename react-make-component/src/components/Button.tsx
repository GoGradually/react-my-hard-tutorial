type ButtonProps = {
  description: string;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
};

function Button({ description, variant, size, disabled, onClick }: ButtonProps) {
    const variantMap: Record<ButtonProps["variant"], string> = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  const sizeMap: Record<ButtonProps["size"], string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-10 py-5 text-lg",
  };

  const baseClass = `${variantMap[variant]} ${sizeMap[size]} rounded`;
  const disabledClass = disabled ? " opacity-50 cursor-not-allowed" : "";
  console.log("Button props:", { description, variant, size });

    return (
    <button
      className={baseClass + disabledClass}
      disabled={disabled}
      onClick={onClick}
    >
      {description}
    </button>
  );
}

export default Button;
