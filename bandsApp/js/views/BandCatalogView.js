import * as User from "../models/UserModel.js";
import * as Band from "../models/BandModel.js";

function catalogView() {
  Band.init();

  renderCatalog(Band.getBands());

  // CLICAR NO BOTÃO FILTRAR
  document.querySelector("#btnFilter").addEventListener("click", () => {
    renderCatalog(
      Band.getBands(
        document.querySelector("#txtBand").value,
        document.querySelector("#sltGenre").value
      )
    );
  });

  // CLICAR NO BOTÃO ORDENAR
  document.querySelector("#btnSort").addEventListener("click", () => {
    Band.sortBands();
    renderCatalog(Band.getBands());
  });
}

// EXIBIR O CATÁLOGO DE BANDAS
function renderCatalog(bands = []) {
  let result = "";
  for (const band of bands) {
    result += generateCard(band);
  }
  // Atribuição de todos os cards gerados ao elemento com id myCatalog
  document.querySelector("#myCatalog").innerHTML = result;

  // CLICAR NO BOTÃO VER MAIS
  const btnsSeeMore = document.getElementsByClassName("view");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Band.setCurrentBand(button.id);
      location.href = "./html/band.html";
    });
  }

  // CLICAR NO BOTÃO REMOVER
  const btnsRemove = document.getElementsByClassName("remove");
  for (const button of btnsRemove) {
    button.addEventListener("click", () => {
      if (confirm("Desje mesmo remover a banda?")) {
        Band.removeBand(button.id);
        location.reload();
      }
    });
  }
}

// GERAR CARTÃO COM A BANDA
function generateCard(band) {
  let result = ` 
        <div class="col">
            <div class="card mb-3" style="widht: 300px; ">
                <img src="${band.cover}" class="card-img-top" style="height: 300px;">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <button id="${band.name}" class="btn btn-primary view">Ver mais</button>
        `;
  // Só adiciona botão de "Remover" a um utilizador autenticado
  if (User.isLogged()) {
    result += `<button id="${band.name}" class="btn btn-danger remove">Remover</button>`;
  }
  result += ` 
                </div>
            </div>
        </div> `;
  return result;
}

catalogView();
