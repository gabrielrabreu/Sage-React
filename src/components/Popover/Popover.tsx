import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Popover.module.scss";

/**
 * Props for the Popover component.
 */
interface PopoverProps {
  /**
   * Content to be displayed inside the popover.
   */
  content: React.ReactNode;
  /**
   * Trigger element for the popover.
   */
  children: React.ReactNode;
}

/**
 * Popover Component: A popover that appears when hovered over.
 * @param {PopoverProps} props - Component props.
 * @returns {React.FC<PopoverProps>} - A JSX element representing the popover.
 */
const Popover: React.FC<PopoverProps> = (props) => {
  /**
   * State to control the visibility of the popover content.
   */
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Handles mouse enter event to show popover.
   */
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  /**
   * Handles mouse leave event to hide popover.
   */
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={styles["popover-container"]}
      data-testid="popover-container"
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="popover-trigger"
      >
        {props.children}
      </div>
      <div
        className={classnames(styles["popover-content"], {
          [styles["popover-content-visible"]]: isVisible,
        })}
        data-testid="popover-content"
      >
        {props.content}
      </div>
    </div>
  );
};

export default Popover;
