const input = document.getElementById('input');
const button = document.querySelectorAll('.btn-number');
let result = '';
let arr = Array.from(button);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            result = result.replace(/x/g, '*');
            result = eval(result)
            input.value = result;
            console.log(result);
        } else {
            result += e.target.innerHTML;
            input.value = result;
        }
    })
})

function reset() {
    reset = '';
    input.value = 0;
}

function del(error) {
    if (result === eval(result)) {
        error.innerHTML = alert('click on RESET');

    } else {
        result = result.slice(0, -1);
        input.value = reset;
    }
}