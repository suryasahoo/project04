const input = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');

let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value === '=') {
            try {
                result = result.replace(/x/g, '*');
                result = eval(result);
                if (!isNaN(result)) {
                    input.value = result;
                } else {
                    input.value = 'Error';
                }
            } catch (error) {
                input.value = 'Error';
            }
        } else if (value === 'reset') {
            result = '';
            input.value = '0';
        } else if (value === 'DEL') {
            result = result.slice(0, -1);
            input.value = result;
        } else {
            result += value;
            input.value = result;
        }
    });
});

function reset() {
    result = '';
    input.value = '0';
}

function del() {
    result = result.slice(0, -1);
    input.value = result;
}