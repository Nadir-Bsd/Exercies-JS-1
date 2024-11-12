const button = document.getElementById("submit");

button.addEventListener("click", function () {
    const n = document.getElementById("firstNumber").value;
    let result = nombreAuCarre(n);

    alert(`Le carré de ${n} est ${result}`);
});

function nombreAuCarre(number) {
    return number * number;
}
