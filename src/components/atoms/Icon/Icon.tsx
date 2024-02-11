import React from "react";
import { icons as LucideIcons } from "lucide-react";

import styles from "./Icon.module.scss";

/**
 * Props for the Icon component.
 */
interface IconProps {
  /**
   * Name of the Lucide icon to be rendered.
   */
  name: keyof typeof LucideIcons;
}

/**
 * Icon Component: Renders a Lucide icon.
 * @param {IconProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the Lucide icon.
 */
const Icon: React.FC<IconProps> = ({ name }) => {
  const LucideIcon = LucideIcons[name];
  return <LucideIcon className={styles.icon} data-testid={`icon-${name}`} />;
};

export default Icon;
