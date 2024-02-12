import React from "react";
import classNames from "classnames";

import { WithClassName, WithTestId } from "../../interfaces";
import { Breadcrumb, BreadcrumbItemProps } from "../Breadcrumb";
import { Typography } from "../Typography";

import styles from "./HeroSection.module.scss";

/**
 * Props for the HeroSection component.
 */
interface HeroSectionProps extends WithClassName, WithTestId {
  /**
   * The title to be displayed in the hero section.
   */
  title: string;
  /**
   * Array of breadcrumb items to be displayed.
   */
  breadcrumb: BreadcrumbItemProps[];
}

/**
 * HeroSection Component: Renders a hero section with a title and breadcrumb.
 * @param {HeroSectionProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the hero section.
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  breadcrumb,
  className,
  testId,
}) => {
  return (
    <div className={classNames(className)} data-testid={testId}>
      <Typography variant="heading">{title}</Typography>
      <Breadcrumb items={breadcrumb} className={styles.breadcrumb} />
    </div>
  );
};

export default HeroSection;
