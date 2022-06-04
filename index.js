let year = localStorage.getItem("year")
const teams = document.querySelector("#teams")
async function main(year){
    const leagues = await fetch(`https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${year}&sort=asc`)
    const leaguesData = await leagues.json()
    console.log(leaguesData.data.standings)
    for (let i = 0; i < leaguesData.data.standings.length; i++)
    teams.innerHTML += `
    <div class="team">
    <img class="team__logo--image" src="${leaguesData.data.standings[i].team.logos[0].href}" alt="">
    <h1 class="team__name"> ${leaguesData.data.standings[i].team.name}</h1>
        <ul>
            <li class="team__wins">Wins: ${leaguesData.data.standings[i].stats[0].value}</li>
            <li class="team__losses">Losses: ${leaguesData.data.standings[i].stats[1].value}</li>
            <li class="team__draws">Draws: ${leaguesData.data.standings[i].stats[2].value}</li>
            <li class="team__points">Points: ${leaguesData.data.standings[i].stats[6].value}</li>
        </ul>
    <h1 class="team__ranking">Ranking: ${leaguesData.data.standings[i].stats[8].value}</h1>
    </div>
    `
}



 function onYearChange(event){
    localStorage.setItem("year", event.target.value)
    let year = event.target.value
    teams.innerHTML = ""
    main(year)
}

main(year)