import Book from "./BookModel.js";

// ARRAY
let books = [];

// INSTÂNCIAS
books.push(new Book("Os dias sem sorte", "Romance", ["João Pais"], 233, 231));

books.push(new Book(
  "Amor limite",
  "Romance",
  ["Maria Augusta", "António Coimbra"],
  513,
  333
));

books.push(new Book("Raios", "Aventura", ["Carlos Roma"], 232));


// FUNÇÃO PRINCIPAL
bookView();

function bookView() {
  // ADICIONAR LISTENERS AOS BOTÕES DAS FUNÇÕES
  document.querySelector("#f1").addEventListener("click", () => {
    const genre = prompt("Qual o género?");
    const booksFiltered = books.filter((book) => book.genre === genre);
/*    
    books.forEach(book => {
      if (book.genre === genre) {
          console.log(book)
      }
    });*/
    console.table(booksFiltered);
  });


// Nº livros já iniciados
  document.querySelector("#f2").addEventListener("click", () => {
    const nBooks = books.filter((book) => book.currentPage > 0).length; 
    alert(`já foi iniciada a leitura de ${nBooks} livros`);
   
  });


  // Nº total de paginas lidas
  document.querySelector("#f3").addEventListener("click", () => {
    const totalPages = books.reduce((sum, book) => book.currentPage + sum, 0);
    alert(`Já foram lidas ${totalPages}`);
  });


// titulos que já se ultrapassou mais de metade da leitura 
  document.querySelector("#f4").addEventListener("click", () => {
    const booksFiltered  = books.filter((book) => book.currentPage >= book.nPages / 2)
    let titles = ""
    booksFiltered.forEach(book => {
      titles+= book.title + ", ";
    });
    alert(`Os títulos ${titles} já ultrapassaram mais de metade da leitura`)
   
   
  });



// ADICIONAR AUTOR A UM LIVRO
  document.querySelector("#f5").addEventListener("click", () => {
    const author = prompt("Nome do autor?");
    const title = prompt("Nome do livro onde quer adicionar o autor?");
    try {
      const book = books.find((book) => book.title === title);
      console.log(book)
      if (book.authors.includes(author)) {
        throw Error("Autor existente!");
      } 
      else {
        book.authors.push(author);
        alert(`O autor ${author} foi adicionado ao livro`)
      }

    } catch (error) {
      alert(error);
    }
   
  });




  // RENDERIZAR TABELA
  renderTable();
}

function renderTable() {
  const table = document.querySelector("table");
  let result = "";
  let total = 0;
  result = `
    <tr>
      <th>TÍTULO</th>
      <th>Nº PÁGINAS NÃO LIDAS</th>
      <th>AÇÃO A EXECUTAR</th>
      <th>TEMPO RESTANTE</th>
    </tr>
  `;
  for (const book of books) {
    result += `
      <tr>
        <td>${book.title}</td>
        <td style="text-align: center">${book.nPages - book.currentPage}</td>
        <td><button class='forward' id='${book.title}'>AVANÇAR</button>
            <button class='backward' id='${book.title}'>RETROCEDER</button></td>
        <td>${(book.nPages - book.currentPage) * 5}m</td>
      </tr>
    `;
    total += (book.nPages - book.currentPage) * 5;
  }
  result += `<tr><td colspan="4" style="text-align: right">Tempo em horas: ${Math.ceil(total/60)
  }h</td></tr>`;
  table.innerHTML = result;

  // ADICIONAR LISTENER AO BOTÃO AVANÇAR
  const buttons = table.querySelectorAll(".forward");
  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      const book = books.find((book) => book.title === event.target.id);
      try {
        book.forward();
      } catch (error) {
        alert(error);
      }
      renderTable();
    });
  }

  // ADICIONAR LISTENER AO BOTÃO RETROCEDER
  const buttonsBackward = table.querySelectorAll(".backward");
  for (const button of buttonsBackward) {
    button.addEventListener("click", (event) => {
      const book = books.find((book) => book.title === event.target.id);
      try {
        book.back();
      } catch (error) {
        alert(error);
      }
      renderTable();
    });
  }


}


