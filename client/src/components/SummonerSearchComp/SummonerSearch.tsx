import React, { ChangeEvent, useEffect, useState } from "react";

function SummonerSearch() {
    const [puuid, setPuuid] = useState<string>("");
    const [gameName, setGameName] = useState<string>("");
    const [tagLine, setTagLine] = useState<string>("");
    const [champMasteries, setChampMasteries] = useState([]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`;

        try {
            const response = await fetch(url, {headers: {"X-Riot-Token": "RIOT API GOES HERE SECURELY SOMEHOW"}});

            if(!response.ok) {
                throw new Error("Error fetching summoner info");
            }

            const data = await response.json();
            setPuuid(data.puuid);

        } catch (err) {
            console.error("Error fetching summoner info");
        }

    }

    return (
        <div className="summoner-search">
        <h3>Whats your name (and tagline), summoner?</h3>
            <form className="summoner-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Summoner"
                    value={gameName}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setGameName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Tagline"
                    value={tagLine}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTagLine(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            {puuid && <p>PUUID: {puuid}</p>}
        </div>
    )
}

export default SummonerSearch;