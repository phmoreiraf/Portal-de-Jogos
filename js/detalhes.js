var data = JSON.parse(localStorage.getItem("destaques"))
var search = new URLSearchParams(location.search)
var id = search.get("id")
var jogo = data.results[id]


let jogoID = document.getElementById("jogo-detalhes")
jogoID.innerHTML += `

<div class="img-detalhes col-6">
<img src="${jogo.background_image}" class="card-img-top" alt="...">
</div>
<br>
<br>
<br>
        <div class="detalhes-jogo col-6">
        <br>
            <h5 class="card-title">${jogo.name}</h5>
            <br>
            <p class="card-text">Rating: ${jogo.rating}</p>
            <p class="card-text">Lancamento: ${jogo.released}</p>
            <p class="card-text">Ultima atualizacao: ${jogo.updated}</p>
            <p class="card-text">Tempo jogado: ${jogo.playtime} Horas</p>
            <button onclick="window.location.href = 'https://rawg.io/games/${jogo.id}'" class="btn btn-primary botaoPesquisa">Mostrar mais</button>
            <a href="index.html" class="btn btn-primary">Voltar</a>
    </div>`