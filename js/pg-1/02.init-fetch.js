import DeleteTeam from "./06.delete-team.js";
import CreateDiv from "./03.create-div.js";
import ShowInformation from "./04.init-show-information.js";

export default function InitFetch() {
    const pageOne = document.querySelector('.pg-1');
    if (pageOne) {
        const btn = document.querySelector('button');
        const input = document.querySelector('input');

        async function Fetch() {
            const input = document.querySelector('input');
            const nomeDoTime = input.value;
            const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${nomeDoTime}`;

            const answer = await axios.get(url);
            const data = await answer.data;

            DeleteTeam();
            if (data.teams !== null) {
                const teamArray = data.teams;
                teamArray.forEach(team => {
                    CreateDiv(team);
                });
                ShowInformation();
            } else {
                const teams = document.querySelector('.teams');
                teams.innerHTML = '<div class="team">No team with this name was found</div>'
            }
        }
        btn.addEventListener('click', Fetch);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') e.preventDefault();

            if (e.key === 'Enter') Fetch();
        })
    }
}