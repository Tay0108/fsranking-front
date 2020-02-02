import React from "react";
import "./page-header.scss";
import { PageNavigation } from "../PageNavigation/PageNavigation";
import { PageLogo } from "../PageLogo/PageLogo";

export function PageHeader() {
  return (
    <header id="page-header" className="page-header">
      <PageLogo />
      <PageNavigation />
    </header>
  );
}
