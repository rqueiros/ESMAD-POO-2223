import * as Dog from "./animals.js";

Dog.init();

renderCatalog(Dog.getDogs());

// EXIBIR O CATÁLOGO DE CAES
function renderCatalog(dogs = []) {
  let result = "";
  // percorre todas as instancias de caes
  for (const dog of dogs) {
    result += generateCard(dog);
  }
  // Atribuição de todos os cards gerados ao elemento com id myCatalog
  document.querySelector("#myCatalog").innerHTML = result;

  // CLICAR NO BOTÃO VER MAIS
  const btnsSeeMore = document.getElementsByClassName("view");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      location.href = "https://en.wikipedia.org/wiki/Dog";
    });
  }
}

// GERAR CARD de um dog
function generateCard(dog) {
  let result = ` 
      <div class="col">
          <div class="card  bg-warning mb-3" style="widht: 300px; ">
              <img src="${dog.dogLink}" class="card-img-top" style="height: 300px;">
              <div class="card-body">
                  <h5 class="card-title">${dog.dogBreed}</h5>
                  <p class="card-text">${dog.dogText}</p>
                  <button id="${dog.dogBreed}" class="btn btn-primary view">Ver mais</button>
              </div>    
          </div>
      </div>
      `;

  return result;
}
