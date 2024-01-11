
        function calculate(operation) {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result;
            switch(operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if(num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "除数不能为0";
                    }
                    break;
                default:
                    result = "无效运算";
            }
            document.getElementById('result').innerText = "结果: " + result;
        }
    