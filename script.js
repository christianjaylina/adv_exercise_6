let stack = [];
const maxStackSize = 8;

document.getElementById('push').addEventListener('click', function() {
    const inputValue = document.getElementById('input').value;

    if (inputValue === '') {
        alert("Invalid Input");
    } else if (stack.length < maxStackSize) {
        stack.push(inputValue);
        document.getElementById('input').value = ''; 
        updateStackDisplay();
    } else if (stack.length === maxStackSize) {
        alert("Error: Stack is Full");
    }
});

document.getElementById('pop').addEventListener('click', function() {
    if (stack.length > 0) {
        stack.pop();
        updateStackDisplay();
    }
});

function updateStackDisplay() {
    const stackDisplay = document.getElementById('stack').children;
    

    for (let i = 0; i < maxStackSize; i++) {
        stackDisplay[i].textContent = '';
    }

    for (let i = 0; i < stack.length; i++) {
        stackDisplay[maxStackSize - 1 - i].textContent = stack[i];
    }
}