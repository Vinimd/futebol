import CreateDivPlayerInformation from "./05.create-div-player-information.js";
export default function ShowPlayerInformation() {

    const players = document.querySelectorAll('.jogador');

    async function FetchInformation(e) {
        let playerID = e.target.id;
        if (playerID === undefined || playerID === '') playerID = e.target.parentElement.id;
        if (playerID === undefined || playerID === '') playerID = e.target.parentElement.parentElement.id;
        const url = ` https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${playerID}`;

        const answer = await axios.get(url);
        const data = await answer.data;
        const objData = data.players[0];


        CreateDivPlayerInformation(objData);
    }

    players.forEach(player => {
        player.addEventListener('click', FetchInformation);
    })
}