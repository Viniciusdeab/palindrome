document.getElementById("btn").addEventListener("click", function () {
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});

function checkPalindrome(txt) {
    let result = document.getElementById("result");
    if (txt.split("").reverse().join("").toLowerCase() === txt.toLowerCase()) {
        return result.textContent = "Sim, é um palíndromo";
    } else {
        return result.textContent = "Não, não é palíndromo";
    }
}