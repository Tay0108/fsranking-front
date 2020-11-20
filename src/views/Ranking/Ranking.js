import React, { useState, useEffect } from "react";
import "./ranking.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { TopPlayer } from "../../components/TopPlayer/TopPlayer";
import { RankingTable } from "../../components/RankingTable/RankingTable";
import { PageLoader } from "../../utils/PageLoader/PageLoader";

export function Ranking() {
  const [ranking, setRanking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchRanking() {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/ranking`);
      const fetchedRanking = await request.json();
      setRanking(fetchedRanking);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <PageHeader />
      <SortingButton />
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <main className="main-content">
            {ranking && (
              <>
                <ul className="top-players-list">
                  <li>
                    <TopPlayer award="gold" player={ranking[0]} />
                  </li>
                  <li>
                    <TopPlayer award="silver" player={ranking[1]} />
                  </li>
                  <li>
                    <TopPlayer award="bronze" player={ranking[2]} />
                  </li>
                </ul>
                <RankingTable entries={ranking} />
              </>
            )}
          </main>
        </>
      )}
    </>
  );
}
