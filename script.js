



const resultText = document.querySelector('.result_text');
const panel = document.querySelector('.panel');

let num;
let action;

panel.addEventListener('click', function (event) {
    if (event.target.closest('button')) {

        function flickOff() {
            resultText.style.opacity = 0;
        }
        function flickOn() {
            resultText.style.opacity = 1;
        }

        if (event.target.getAttribute("name") == Number(event.target.getAttribute("name"))) {
            if (resultText.textContent[0] == '0' && resultText.textContent[1] != ',') {
                resultText.textContent = resultText.textContent.slice(1);
            }
            if (num) resultText.textContent = '';
            resultText.textContent += event.target.getAttribute("name");
        }
        else if (event.target.getAttribute("name") != 'dot'){
            setTimeout(flickOff, 50);
            setTimeout(flickOn, 150);
        }
        if (event.target.getAttribute("name") == 'AC') {
            resultText.textContent = '';
        }
        if (event.target.getAttribute("name") == 'plus_minus' && resultText.textContent != '0') {
            if (resultText.textContent[0] == '-') resultText.textContent = resultText.textContent.slice(1);
            else if (resultText.textContent != '') resultText.textContent = '-' + resultText.textContent;
        }
        if (event.target.getAttribute("name") == 'dot') {
            if (resultText.textContent[resultText.textContent.length - 1] != ',') resultText.textContent += ',';
        }
        if (event.target.getAttribute("name") == 'per_cent') {
            num = resultText.textContent;
            action = '%';
        }
        if (event.target.getAttribute("name") == 'division') {
            num = resultText.textContent;
            action= '÷';
        }
        if (event.target.getAttribute("name") == 'multiplication') {
            num = resultText.textContent;
            action = '×';
        }
        if (event.target.getAttribute("name") == 'minus') {
            num = resultText.textContent;
            action = '-';
        }
        if (event.target.getAttribute("name") == 'plus') {
            num = resultText.textContent;
            action = '+';
        }
        if (event.target.getAttribute("name") == 'equal') {
            switch (action) {
                case '%': resultText.textContent = (resultText.textContent.replaceAll(',', '.') * num.replaceAll(',', '.') / 100).toString().replaceAll('.', ','); break;
                case '÷': resultText.textContent = (num.replaceAll(',', '.') / resultText.textContent.replaceAll(',', '.')).toString().replaceAll('.', ','); break;
                case '×': resultText.textContent = (num.replaceAll(',', '.') * resultText.textContent.replaceAll(',', '.')).toString().replaceAll('.', ','); break;
                case '-': resultText.textContent = (num.replaceAll(',', '.') - resultText.textContent.replaceAll(',', '.')).toString().replaceAll('.', ','); break;
                case '+': resultText.textContent = (Number(num.replaceAll(',', '.')) + Number(resultText.textContent.replaceAll(',', '.'))).toString().replaceAll('.', ','); break;
            }
        }
    }
});