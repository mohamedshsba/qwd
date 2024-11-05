const c = ["ss", "ps", "dps"]; 
function ch() {
    const inputValue = document.getElementById("inputField").value;
    const index = c.indexOf(inputValue);
    if (index !== -1) {
        c.splice(index, 1);
        document.getElementById("result").textContent = "right";
    } else {
        document.getElementById("result").textContent = "wrongr.";
    }
}
