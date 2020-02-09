import React from "react";
import "./page-logo.scss";

export function PageLogo() {
  return (
    <div className="page-logo">
      <img
        src="/img/page-logo.svg"
        className="page-logo__image"
        alt="page logo"
      />
    </div>
  );
}
