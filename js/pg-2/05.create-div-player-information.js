import DeletePlayers from "./06.delete-players.js";

export default function CreateDivPlayerInformation(obj) {
    console.log(obj)

    const players = document.querySelector('.jogadores');
    const div = document.createElement('div');
    div.setAttribute('class', 'player-information');

    DeletePlayers();

    const playerName = obj.strPlayer;
    const playerThumb = obj.strThumb;
    const facebook = obj.srtFacebook;
    const instagram = obj.strInstagram;
    const twitter = obj.strTwitter;
    const aGallery = [obj.strThumb, obj.strCutout, obj.strRender, obj.strBanner, obj.strFanart1, obj.strFanart2, obj.strFanart3, obj.strFanart4];
    let weight = obj.strWeight;
    let height = obj.strHeight;
    const playerPosition = obj.strPosition;
    const playerDescription = obj.strDescriptionEN;
    const playerBirthPlace = obj.strBirthLocation;
    const playerBornDay = obj.dateBorn;
    const playerNationality = obj.strNationality;
    const currentTeam = obj.strTeam.replace('_', '');
    let kit = obj.strKit
    let url = '';

    div.innerHTML = `<h2>${playerName}</h2>`;

    if (playerThumb) div.innerHTML += `<img class='thumb' src='${playerThumb}'>`;

    if (weight === '') weight = 'Without information'
    if (height === '') height = 'Without information'

    if ((kit !== null) && (kit !== '')) {
        url = ` https://www.zoom.com.br/search?q=${kit.split(' ').join('%20')}`
    }

    if (playerDescription) div.innerHTML += `<div><div class='descricao-do-jogador'><div class='dados-jogador'>Height:${height}<br> weigth:${weight}.<br> Nationnality:${playerNationality} Born:${playerBornDay}. <br> Birth Place:${playerBirthPlace}.<br>Actual Team:${currentTeam}.<br>Play Position:${playerPosition}.</div> ${playerDescription}</div>`

    if (url) {
        div.innerHTML += `<div><h2>Procura por: ${kit}</h2><iframe src="${url}" title="Search:${kit}"></iframe></div>`
    }
    const descricaoJogador = document.querySelector('.descricao-do-jogador')
    const divGallery = document.createElement('div');
    divGallery.setAttribute('class', 'galeria');

    const aFilterGallery = aGallery.filter(img => img !== null);

    aFilterGallery.forEach(img => {
        divGallery.innerHTML += `<a href='${img}' target='_blank'><img src='${img}'></a>`;
    });

    div.insertBefore(divGallery, descricaoJogador);


    let aMedia = [];
    if (facebook) {
        const linkFacebook = `<a href='https://${facebook}' target='_blank'> <img src='./img/facebook-icon-1.svg'> </a>`;
        aMedia.push(linkFacebook);
    }
    if (instagram) {
        const linkInstagram = `<a href='https://${instagram}' target='_blank'><img src='./img/403-instagram.svg'></a>`;
        aMedia.push(linkInstagram);
    }
    if (twitter) {
        const linktwitter = `<a href='https://${twitter}' target='_blank'><img src='./img/logo-twitter.svg'></a>`;
        aMedia.push(linktwitter);
    }
    aMedia.length ? div.innerHTML += `<div class='redes-sociais-jogador'>${aMedia.join('')}</div>` : div.innerHTML += 'This player has no media account';
    players.append(div);

}