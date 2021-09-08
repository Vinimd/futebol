export default function DeletePlayers() {
    const thereIsDivPlayer = document.querySelectorAll('.jogador');
    const thereIsDivInformation = document.querySelector('.player-information');

    const players = document.querySelector('.jogadores');
    const length = thereIsDivPlayer.length;
    if (length) {
        thereIsDivPlayer.forEach(div => {
            players.removeChild(div);
        })
    }
    if (thereIsDivInformation) players.removeChild(thereIsDivInformation)
}