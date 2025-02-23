let lastAnswer = "";
function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        lastAnswer = eval(document.getElementById("display").value);
        document.getElementById("display").value = lastAnswer;
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
function calculateAnswer() {
    document.getElementById("display").value += lastAnswer;
}
function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        display.value = display.value.startsWith("-") ? display.value.slice(1) : "-" + display.value;
    }
}
