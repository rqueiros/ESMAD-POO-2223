const num = +prompt("Digite um número?")

for (let i = 2; i <= num; i++) {
    let isPrime = true
    for (let j = 2; j <= i - 1; j++) {
        if (i % j == 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

