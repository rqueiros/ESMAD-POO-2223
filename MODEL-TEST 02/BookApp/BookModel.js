export default class Book {
  #title;
  #genre;
  #authors;
  #nPages;
  #currentPage;

  constructor(title, genre, authors, nPages, currentPage = 0) {
    this.title = title;
    this.genre = genre;
    this.authors = authors;
    this.nPages = nPages;
    this.currentPage = currentPage;
  }

  // PROPRIEDADE TITLE
  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  // PROPRIEDADE GENRE
  get genre() {
    return this.#genre;
  }

  set genre(value) {
    this.#genre = value;
  }

  // PROPRIEDADE AUTHORS
  get authors() {
    return this.#authors;
  }

  set authors(value) {
    this.#authors = value;
  }

  // PROPRIEDADE NPAGES
  get nPages() {
    return this.#nPages;
  }

  set nPages(value) {
    this.#nPages = value;
  }

  // PROPRIEDADE CURRENTPAGE
  get currentPage() {
    return this.#currentPage;
  }

  set currentPage(value) {
    try {
      if (value > this.nPages || value < 0) {
        throw Error("Valor da página atual inválido!");
       }
       else
       {
        this.#currentPage = value;
       }
  }
  catch(error) {
    alert(`${error}`) }
  }

  // MÉTODOS
  // Avançar 1 página nas paginas lidas do objeto atual
  forward() {
    if (this.currentPage == this.#nPages) {
      throw Error("Error Page!");
    }
    else {
      this.currentPage = this.currentPage + 1;
    }
  }

  // Retroceder 1 pãgina nas paginas lidas do objeto atual
  back() {
    if (this.#currentPage==0) {
      throw Error("Not possible :(");
    }
    else
    {
      this.currentPage = this.currentPage - 1;
    }
  }

  backAndForward(type, nPages) {
    if (type == "back") {
      if ((this.currentPage- nPages) > 1) {
           this.currentPage -= nPages; }
      else {
        throw Error("Begin Book!");
      }
    }

    if (type == "forward") {
      if((this.currentPage + nPages)<= this.#nPages) { 
        this.currentPage += nPages; }
      else {
        throw Error("Book Dned!");
      }
    }
  }
}

