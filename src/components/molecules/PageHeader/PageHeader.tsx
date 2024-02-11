import React from "react";

import { Breadcrumb } from "../../organisms";

import styles from "./PageTitle.module.scss";

interface PageHeaderProps {
  title: string;
  breadcrumb: {
    name: string;
    link?: string;
  }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className={styles.pageHeader}>
      <h1>{title}</h1>
      <Breadcrumb items={breadcrumb} />
    </div>
  );
};

export default PageHeader;
