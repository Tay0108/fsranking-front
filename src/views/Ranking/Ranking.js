import React, { useState, useEffect } from "react";
import "./ranking.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { RankingFilters } from "../../components/RankingFilters/RankingFilters";
import { TopPlayer } from "../../components/TopPlayer/TopPlayer";
import { RankingTable } from "../../components/RankingTable/RankingTable";
import { PageLoader } from "../../components/PageLoader/PageLoader";
import { PageFooter } from "../../components/PageFooter/PageFooter";

export function Ranking() {
  const [ranking, setRanking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState("Male");
  const [category, setCategory] = useState("Battle");

  useEffect(() => {
    (async function fetchRanking() {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/ranking`);
      const fetchedRanking = await request.json();
      setRanking(fetchedRanking);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {

  });

  return (
    <>
      <PageHeader />
      <RankingFilters setGender={setGender} setCategory={setCategory} />
      {isLoading ? (
        <PageLoader />
      ) : (
          <>
            <main className="main-content">
              {ranking && (
                <>
                  <ul className="top-players-list">
                    {ranking[gender][category].length >= 1 ?
                      (<li>
                        <TopPlayer award="gold" player={ranking[gender][category][0]} />
                      </li>) : ""}
                    {ranking[gender][category].length >= 2 ?
                      (<li>
                        <TopPlayer award="silver" player={ranking[gender][category][1]} />
                      </li>) : ""}
                    {ranking[gender][category].length >= 3 ?
                      (<li>
                        <TopPlayer award="bronze" player={ranking[gender][category][2]} />
                      </li>) : ""}
                  </ul>
                  {ranking[gender][category].length >= 4 ?
                    (<RankingTable entries={ranking[gender][category]} />) : ""
                  }
                </>
              )}
            </main>
          </>
        )}
      <PageFooter /> {/* TODO: turn off on mobile */}
    </>
  );
}
