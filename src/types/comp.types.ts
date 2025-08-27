import type { sizes, variants } from "./global.types";

export interface IButton {
  label?: string; // The text displayed on the button
  onClick?: () => void; // Function to call when the button is clicked
  disabled?: boolean; // Optional: If true, the button will be disabled
  variant?: variants;
  isSoftButton?: boolean;
  className?: string; // Optional: Additional CSS classes for custom styling
  icon?: React.ReactNode; // Optional: An icon to display inside the button
  iconName?: string;
  loading?: boolean; // Optional: If true, shows a loading state
  type?: "button" | "submit" | "reset"; // Optional: Defines the button type
  ariaLabel?: string; // Optional: ARIA label for accessibility
  id?: string; // Optional: Unique identifier for the button
  tabIndex?: number; // Optional: Tab index for keyboard navigation
  size?: sizes;
  outlined?: boolean;
}
