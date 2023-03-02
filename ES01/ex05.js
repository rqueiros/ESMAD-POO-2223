

const grade = +prompt("Digite uma nota?")

if (grade >= 10 && grade <= 20) {
    console.log("positiva");
} else if (grade >= 7 && grade < 10) {
    console.log("oral");
} else if (grade >= 0 && grade < 7) {
    console.log("negativa");
} else {
    console.log("nota inválida");
}