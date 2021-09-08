export default function DeleteTeam() {
    const thereIsDivTeam = document.querySelectorAll('.team');
    const thereIsDivInformation = document.querySelector('.information');

    const teams = document.querySelector('.teams');
    const length = thereIsDivTeam.length;
    if (length) {
        thereIsDivTeam.forEach(div => {
            teams.removeChild(div);
        })
    }
    if (thereIsDivInformation) teams.removeChild(thereIsDivInformation)
}