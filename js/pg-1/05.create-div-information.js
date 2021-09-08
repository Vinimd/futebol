import DeleteTeam from "./06.delete-team.js";
export default function CreateDivInformation(obj) {
    const teams = document.querySelector('.teams');
    const div = document.createElement('div');
    div.setAttribute('class', 'information');

    DeleteTeam();

    const name = obj.strTeam;
    const logoUrl = obj.strTeamLogo;
    const league = obj.strLeague;
    const sport = obj.strSport;
    const StadiumName = obj.strStadium;
    const StadiumDescription = obj.strStadiumDescription;
    const StadiumPhoto = obj.strStadiumThumb;
    const StadiumCapacity = obj.intStadiumCapacity;
    const timeCity = obj.strStadiumLocation;
    const timeDrescription = obj.strDescriptionEN;
    const originCountry = obj.strCountry;
    const youTube = obj.strYoutube;
    const facebook = obj.srtFacebook;
    const instagram = obj.strInstagram;
    const twitter = obj.strTwitter;
    const aGallery = [obj.strTeamBadge, obj.strTeamJersey, obj.strTeamLogo, obj.strTeamFanart1, obj.strTeamFanart2, obj.strTeamFanart3, obj.strTeamFanart4, obj.strTeamBanner];

    div.innerHTML = `<h2>${name}</h2>`;

    if (logoUrl) div.innerHTML += `<img class='logo' src='${logoUrl}'>`;

    div.innerHTML += `<h2>League: ${league}</h2>`;

    div.innerHTML += `<h1>Sport: ${sport}</h1>`;

    if (StadiumName !== null) {
        div.innerHTML += `<h1>Stadium Name:${StadiumName}</h1>`;
    } else {
        div.innerHTML += `<h2>Stadium Name:This time has no estadio</h2>`;
    }

    if ((StadiumName !== null) && (StadiumDescription !== null)) div.innerHTML += `<div>${StadiumDescription}<div>`;

    if ((StadiumName !== null) && (StadiumPhoto !== null)) div.innerHTML += `<img class='Stadium' src='${StadiumPhoto}'>`;

    if ((StadiumName !== null) && (StadiumCapacity !== null)) div.innerHTML += `<h1>Stadium Capacity:${StadiumCapacity}</h1>`;

    if (originCountry !== null) div.innerHTML += `<h2>Origin Country:${originCountry}</h2>`;

    if (timeCity !== null) div.innerHTML += `<h2>Time City:${timeCity}</h2>`;

    if (timeDrescription !== null) div.innerHTML += `<div class='descricao'><h2>Time Description</h2>${timeDrescription}</div>`;


    const descricao = document.querySelector('.descricao')
    const divGallery = document.createElement('div');
    divGallery.setAttribute('class', 'galeria');

    const aFilterGallery = aGallery.filter(img => img !== null);

    aFilterGallery.forEach(img => {
        divGallery.innerHTML += `<a href='${img}' target='_blank'><img src='${img}'></a>`;
    });

    div.insertBefore(divGallery, descricao)

    let aMedia = [];
    if (youTube) {
        const linkYoutube = `<a href='https://${youTube}' target='_blank'><img src='./img/youtube.svg'></a>`;
        aMedia.push(linkYoutube);
    }
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
    aMedia.length ? div.innerHTML += `<div class='redes-sociais'>${aMedia.join('')}</div>` : div.innerHTML += 'This time has no media account'

    console.log(aFilterGallery)
    teams.append(div);

}