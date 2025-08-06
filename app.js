let input = document.getElementById("input")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")

btn.onclick = function() {
    let message = input.value.trim()

    if (message) {
        h1.innerHTML = 'Салам ' + message
        h1.style.color = "green"
    } else {
        h1.innerHTML = "Сураныч, атыңызды жазыңыз!"
        h1.style.color = "red"
    }
}