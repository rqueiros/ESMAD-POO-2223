/**
 * Classe que modela uma raça de cão
 */
class Dog {
  dogBreed = "";
  dogText = "";
  dogLink = "";

  constructor(dogBreed, dogText, dogLink) {
    this.dogBreed = dogBreed;
    this.dogText = dogText;
    this.dogLink = dogLink;
  }
}

let dogs = []; // array de objetos

export function init() {
  let dog = new Dog(
    "Pastor Australiano",
    "Pastor Australiano",
    "https://cdn.pixabay.com/photo/2022/05/05/20/01/australian-shepherd-7176981_960_720.jpg"
  );

  dogs.push(dog);

  dog = new Dog(
    "Buldogue",
    "Buldogue",
    "https://cdn.pixabay.com/photo/2016/01/02/18/39/puppy-1118584_960_720.jpg"
  );
  dogs.push(dog);

  dog = new Dog(
    "Buldogue Terrier",
    "Buldogue Terrier",
    "https://www.clubeparacachorros.com.br/wp-content/uploads/2014/07/bull-terrier-porte-e1510577980309.jpg"
  );
  dogs.push(dog);

  dog = new Dog(
    "Pastor Alemão",
    "Pastor Alemão",
    "https://petanjo.com/blog/wp-content/uploads/2021/12/tudo-sobre-pastor-alemao-2-768x520.jpg"
  );
  dogs.push(dog);
}

export function getDogs() {
  return dogs;
}
