import CreateDivInformation from "./05.create-div-information.js";
export default function ShowInformation() {

    const teams = document.querySelectorAll('.team');

    async function FetchInformation(e) {
        let teamID = e.target.id;
        if (teamID === undefined || teamID === '') teamID = e.target.parentElement.id;
        if (teamID === undefined || teamID === '') teamID = e.target.parentElement.parentElement.id;
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`;

        const answer = await axios.get(url);
        const data = await answer.data;
        const objData = data.teams[0];


        CreateDivInformation(objData);
    }

    teams.forEach(team => {
        team.addEventListener('click', FetchInformation);
    })
}