import React from "react";
import "./ranking.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";

export function Ranking() {
  return (
    <>
      <PageHeader />
      <SortingButton />
    </>
  );
}
