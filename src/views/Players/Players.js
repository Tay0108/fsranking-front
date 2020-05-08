import React from "react";
import "./players.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SortingButton } from "../../components/SortingButton/SortingButton";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";

export function Players() {
    return (
        <>
            <PageHeader />
            <SortingButton />
            <main className="main-content">
                <SearchBar/>
                <ul className="players">
                    <PlayerCard name="Daniel Mikołajek" nickname="Mikołaj" age={25} image={`img/players/ranking-player-${0}.jpg`} />
                    <PlayerCard name="Paweł Skóra" nickname="Skóra" age={27} image={`img/players/ranking-player-${1}.jpg`} />
                    <PlayerCard name="Szymon Skalski" nickname="Szymo" age={28} image={`img/players/ranking-player-${2}.jpg`} />
                </ul>
            </main>
            </>
    );
}
