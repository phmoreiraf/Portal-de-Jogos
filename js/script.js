//const api_key = '822ce12d9edb4bb59d84e9ea34841b50'
destaqueJogoCreate()

function destaqueJogoCreate() {
    if (!localStorage.getItem("destaques")) {
        var destaquesURL = 'https://api.rawg.io/api/games?key=822ce12d9edb4bb59d84e9ea34841b50&dates=2019-09-01,2019-09-30&platforms=18,1,7'
        let request = new XMLHttpRequest()
        request.open("GET", destaquesURL, true)
        request.onload = () => {
            localStorage.setItem("destaques", request.response)
            data = JSON.parse(request.response)
            construindoJogoDestaques(data)
        }
        request.send()
    } else {
        let cache = localStorage.getItem("destaques")
        data = JSON.parse(cache)
        construindoJogoDestaques(data)
    }
}

function construindoJogoDestaques(data) {
    let listaJogos = data.results
    let destaquesID = document.getElementById("jogos")
    let tamanho = 6
    let tamanhoAleatorio = Math.floor(Math.random() * ((20) - tamanho + 1) + tamanho)
    for (let i = (tamanhoAleatorio - 6); i < tamanhoAleatorio; i++) {
        let jogo = listaJogos[i]
        destaquesID.innerHTML += `<div class="card col-md-4" style="width: 9rem;">
        <img src="${jogo.background_image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${jogo.name}</h5>
            <p class="card-text">Rating: ${jogo.rating}</p>
            <a href="/detalhes.html?id=${i}" class="btn btn-primary">Mais detalhes</a>
    </div>
</div>`
    }
}

exibePlat()

function exibePlat() {
    fetch('https://api.rawg.io/api/platforms?key=822ce12d9edb4bb59d84e9ea34841b50')
        .then(res => res.json())
        .then(data => {
            //console.log('Imprimindo Jogos')
            let str = ''
            let tamanho = 6
            let tamanhoAleatorio = Math.floor(Math.random() * ((20) - tamanho + 1) + tamanho)
            for (let i = (tamanhoAleatorio - 6); i < tamanhoAleatorio; i++) {
                let plat = data.results[i]
                str += `<div class="card col-md-4" style="width: 9rem;">
            <img src="${plat.image_background}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${plat.name}</h5>
                <p class="card-text">Quanrtidade de jogos disponiveis: ${plat.games_count}</p>
        </div>
    </div>`
            }
            document.getElementById('plat').innerHTML = str
        })
}


function pesquisa() {
    let pesquisa = document.getElementById("jogo-pesquisa").value
    window.location.replace(`/pesquisa.html?id=${pesquisa}`)
}