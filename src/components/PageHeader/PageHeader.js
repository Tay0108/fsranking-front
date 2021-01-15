import React from "react";
import "./page-header.scss";
import { PageNavigation } from "../PageNavigation/PageNavigation";
import { PageLogo } from "../PageLogo/PageLogo";
import { PageNavigationMobile } from "../PageNavigationMobile/PageNavigationMobile";

export function PageHeader() {
  return (
    <header id="page-header" className="page-header">
      <PageLogo />
      {window.screen.width < "768" ? (
        <PageNavigationMobile />
      ) : (
        <PageNavigation />
      )}
    </header>
  );
}
