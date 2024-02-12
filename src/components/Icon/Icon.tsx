import React from "react";
import classNames from "classnames";
import { icons as LucideIcons } from "lucide-react";

import { WithClassName, WithTestId } from "../../interfaces";

import styles from "./Icon.module.scss";

/**
 * Props for the Icon component.
 */
interface IconProps extends WithClassName, WithTestId {
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
const Icon: React.FC<IconProps> = ({ name, className, testId }) => {
  const LucideIcon = LucideIcons[name];
  return (
    <LucideIcon
      className={classNames(styles.icon, className)}
      data-testid={testId}
    />
  );
};

export default Icon;
