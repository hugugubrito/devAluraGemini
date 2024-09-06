
function pesquisar(){

    let campoPesquisa = document.getElementById("campo-pesquisa").value; 

    let section = document.getElementById("resultados-pesquisa");

    let resultado = "";
    let nomeJogo = "";
    let descricaoJogo = "";


    if (campoPesquisa == "") {
        section.innerHTML = "Por Favor digite a pesquisa"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    for(let dado of jogos){

        nomeJogo = dado.nome.toLowerCase();
        descricaoJogo = dado.descricao.toLowerCase();

        if (nomeJogo.includes(campoPesquisa) || descricaoJogo.includes(campoPesquisa)) {
            resultado += `
            <div class="item-resultado">
                            <h2> 
                                <a href="#" target="_blank">${dado.nome}</a>
                            </h2>
                            <p class="descricao-meta">
                            ${dado.descricao}
                            </p>
                            <a href="${dado.link}" target="_blank">
                                Página do jogo na PSN
                            </a>
                        </div>
                        `;
     
        }

        if (!resultado) {
            resultado = "<p> Resultado não encontrado </p>"
        }
        section.innerHTML = resultado;
    }

}