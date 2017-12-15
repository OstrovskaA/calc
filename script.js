// главная наша функция
window.onload = function() {
    // переменные 
    var screen,
        output,
        limit,
        zero,
        period,
        operator;
        // привязываем елемент "result"
    screen = document.getElementById("result");
    // получаем все элементы с классом num
    var elem = document.querySelectorAll(".num");
    var len = elem.length;
    // формируем число 
    for (var i = 0; i < len; i++) {
        // Обработчик на событие "клик" 
        elem[i].addEventListener("click", function() {
            // получаем цифру
            num = this.value;
            // формулируем число
            output = screen.innerHTML += num;
            // получаем длину нашего числа
            limit = output.length;
            // проверка на длину вводимого числа
            if (limit > 16) {
                alert("Sorry no more input is allowed");
            }
        }, false);
    }

    // обработчик класса zero на событие клик 
    document.querySelector(".zero").addEventListener("click", function() {
        zero = this.value;
        if (screen.innerHTML === "") {
            output = screen.innerHTML = zero;
        } else if (screen.innerHTML === output) {
            output = screen.innerHTML += zero;
        }
    }, false);
    // обработчик на точку на событие клик 
    document.querySelector(".period").addEventListener("click", function() {
        // получаем точку 
        period = this.value;
        // проверка если ли данные в поле результат, если нету то будет вид 0.число 
        if (screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
            // иначе выполняем конкатенацию вывода с точкой 
        } else if (screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML.concat(".");
        }
    }, false);
    // обработчик на нажите кнопки ровно
    document.querySelector("#eqn-bg").addEventListener("click", function() {
        if (screen.innerHTML === output) {
            // выполняем действие 
            screen.innerHTML = eval(output);
        } else {
            screen.innerHTML = "";
        }
    }, false);
    // обработчик на идентификатор кнопки делейт на событие клик
    document.querySelector("#delete").addEventListener("click", function() {
        // очищаем обралсть результата
        screen.innerHTML = "";
    }, false);
    // обработчик на класс оператора дейсткий
    var elem1 = document.querySelectorAll(".operator");
    // получаем длину елемента 
    var len1 = elem1.length;
    for (var i = 0; i < len1; i++) {
        // вешаем обработчкик на событие клик 
        elem1[i].addEventListener("click", function() {
            // получаем значение действия (деление, умножение и т.д.)
            operator = this.value;
            // делаем проверку на превидущий результат 
            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            } else if (output) {
                screen.innerHTML = output.concat(operator);
            }
        }, false);
    }
}