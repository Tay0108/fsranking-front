import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";

import "./tournament.scss";
import { PageLoader } from "../../utils/PageLoader/PageLoader";

export function Tournament(props) {
  const [tournament, setTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = props.match.params.id;

  useEffect(() => {
    (async function fetchTournament() {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/tournament/${id}`
      );
      const fetchedTournament = await request.json();
      setTournament(fetchedTournament);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <>
      <PageHeader />
      {isLoading ? <PageLoader /> : tournament && tournament.name}
    </>
  );
}
