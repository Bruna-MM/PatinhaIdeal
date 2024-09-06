function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Obtém o valor e converte para minúsculo

if (campoPesquisa == "") {
  section.innerHTML="Nenhum resultado encontrado. Nossa base está em construção e novas informações serão adicionadas em breve."
  return
}

  let resultados = "";
  let titulo="";
  let descricao="";

  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  }

if(!resultados){
resultados="Nenhum resultado encontrado. Nossa base está em construção e novas informações serão adicionadas em breve."
}

  section.innerHTML = resultados; // Insere os resultados na seção
}