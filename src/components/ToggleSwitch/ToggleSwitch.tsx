import React from "react";

import styles from "./ToggleSwitch.module.scss";

/**
 * Props for the ToggleSwitch component.
 */
export interface ToggleSwitchProps {
  /**
   * Indicates whether the switch is on or off.
   */
  checked: boolean;

  /**
   * Indicates whether the switch is disabled or not.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback function called when the switch is toggled.
   */
  onChange?: () => void;
}

/**
 * ToggleSwitch Component: A toggle switch.
 * @param {ToggleSwitchProps} props - The component props.
 * @returns {React.FC<ToggleSwitchProps>} - A JSX element representing the toggle switch component.
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  return (
    <label className={styles.switch} data-testid="toggle-switch">
      <input
        type="checkbox"
        className={styles.input}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
        data-testid="toggle-checkbox"
      />
      <span className={styles.slider} data-testid="toggle-slider"></span>
    </label>
  );
};

export default ToggleSwitch;
