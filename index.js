let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count + " reps"
}

function save() {
    let countStr = count + " reps - "
    saveEl.textContent += countStr
    countEl.textContent = 0 + " reps"
    count = 0
}
