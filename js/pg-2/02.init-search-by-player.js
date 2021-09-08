import DeletePlayers from "./06.delete-players.js";
import CreateDivPlayers from "./03.create-div-player.js";
import ShowPlayerInformation from "./04.init-show-player-information.js";

export default function InitSearchByPlayer() {
    const isPageTwo = document.querySelector('.pg-2');

    if (isPageTwo) {
        const btn = document.querySelector('button');
        const input = document.querySelector('input');

        async function Fetch(e) {
            const nomeDoJogador = input.value;
            const url = ` https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nomeDoJogador}`;

            const answer = await axios.get(url);
            const data = await answer.data;
            console.log(data)

            DeletePlayers();

            if (data.player !== null) {
                const playersArray = data.player;
                playersArray.forEach(player => {
                    CreateDivPlayers(player);
                });
                ShowPlayerInformation();
            } else {
                const divPlayers = document.querySelector('.jogadores');
                divPlayers.innerHTML = '<div class = "jogador">No player with this name was found.</div>'
            }
        }
        btn.addEventListener('click', Fetch);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') e.preventDefault();

            if (e.key === 'Enter') Fetch();
        })

    }
}