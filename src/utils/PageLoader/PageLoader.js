import React from "react";
import { BeatLoader } from "react-spinners";
import "./page-loader.scss";

export function PageLoader() {
  return (
    <div className="loader">
      <BeatLoader
        css={{
          margin: "0 auto"
        }}
      />
    </div>
  );
}
