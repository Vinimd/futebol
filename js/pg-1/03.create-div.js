export default function CreateDiv(content) {
    const teams = document.querySelector('.teams');
    const div = document.createElement('div');
    div.setAttribute('class', 'team');
    div.setAttribute('id', content.idTeam);
    const urlImg = content.strTeamBadge;
    const idTeam = content.idTeam;
    const sport = content.strSport;
    const league = content.strLeague.replace('_', '');
    const nomeDoTime = content.strAlternate
    div.innerHTML = `<div id='${content.idTeam}'> <img class='team-badge' id='${idTeam}' src='${urlImg}'></div> <div id='${idTeam}'> <span>ID:${idTeam}</span> <span>${nomeDoTime}</span> <span>Sport: ${sport}</span> <span>League: ${league}</spans></div>`;
    teams.appendChild(div);

}