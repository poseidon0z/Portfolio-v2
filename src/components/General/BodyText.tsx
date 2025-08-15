import React from "react";

// Rename the type definition for clarity
type BodyTextProps = {
  size?: "large" | "medium" | "normal" | "small";
  weight?: "bold" | "regular";
  children: React.ReactNode;
  className?: string;
};

// Maps size to the primary text utility.
const textSizeConfig = {
  large: "text-large",
  medium: "text-medium",
  normal: "text-normal",
  small: "text-small",
};

// Rename the component function
const BodyText = ({
  size = "normal",
  weight = "regular",
  children,
  className = "",
}: BodyTextProps) => {
  const sizeClass = textSizeConfig[size];
  const weightClass = weight === "bold" ? "font-bold" : "font-normal";

  // Logic remains the same: only apply specific line-height for 'normal' size
  const lineHeightClass =
    size === "normal"
      ? weight === "bold"
        ? "leading-text-normal-bold"
        : "leading-text-normal-regular"
      : "";

  return (
    <p
      className={`font-body ${sizeClass} ${weightClass} ${lineHeightClass} ${className}`}
    >
      {children}
    </p>
  );
};

// Update the export
export default BodyText;
