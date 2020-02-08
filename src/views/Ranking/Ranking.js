import React from "react";
import "./ranking.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import {TopPlayer} from "../../components/TopPlayer/TopPlayer";
import {RankingTable} from "../../components/RankingTable/RankingTable";

export function Ranking() {
  return (
    <>
      <PageHeader />
      <SortingButton />
      <main className="main-content">
        <TopPlayer award="gold" playerId={0}/>
        <TopPlayer award="silver" playerId={1}/>
        <TopPlayer award="bronze" playerId={2}/>
        <RankingTable/>
      </main>
    </>
  );
}
