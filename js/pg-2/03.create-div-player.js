export default function CreateDivPlayers(content) {
    const players = document.querySelector('.jogadores');
    const div = document.createElement('div');
    div.setAttribute('class', 'jogador');
    div.setAttribute('id', content.idPlayer);
    const urlImg = content.strCutout;
    const idPlayer = content.idPlayer;
    const sport = content.strSport;
    const team = content.strTeam.replace('_', '');
    const nomeDoJogador = content.strPlayer;


    function CreateDivWithImg() {
        div.innerHTML = `<div id='${idPlayer}'> <img class='team-badge' id='${idPlayer}' src='${urlImg}'></div> <div id='${idPlayer}'> <span>ID:${idPlayer}</span> <span>${nomeDoJogador}</span> <span>Sport: ${sport}</span> <span>Team: ${team}</spans></div>`;
    }

    function CreateDivWitouthImg() {
        div.innerHTML = `<divid='${idPlayer}'> <span>There Is No Image</span></div> <div id='${idPlayer}'> <span>ID:${idPlayer}</span> <span>${nomeDoJogador}</span> <span>Sport: ${sport}</span> <span>Team: ${team}</spans></div>`;
    }
    urlImg ? CreateDivWithImg() : CreateDivWitouthImg()

    players.appendChild(div)

}