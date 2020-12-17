console.log('Sample JavaScript HW#1');

var myNum;
myNum = 10; // имя переменной: myNum, значение: 10

var myStr;
myStr = 'строка'; // имя переменной: myStr, значение: 'строка'

var myBool;
myBool = true; // имя переменной: myBool, значение: true

var myArr = [1, 2, 3, 4, 5] // имя переменной: myArr, значения: 1, 2, 3, 4, 5

var myObj;
myObj = {
    first: 'First Name',
    last: 'Last Name'
}; // имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

console.log('myNum', myNum);
console.log('myStr', myStr);
console.log('myBool', myBool);
console.log('myArr', myArr);
console.log('myObj', myObj);

var decimal2 = myNum.toFixed(2); // decimal2

var i = 1;
console.log('Префиксный инкремент:', ++i);
console.log('Постфиксный инкремент:', i++);
console.log('Значение i:', i);
console.log('Префиксный декремент:', --i);
console.log('Постфиксный декремент:', i--);
console.log('Значение i:', i);

var myTest = 20;

myTest += myNum;
console.log('+=', myTest);

myTest -= 10;
console.log('-=', myTest);

myTest *= 2;
console.log('*=', myTest);

myTest /= myNum;
console.log('/=', myTest);

myTest %= 3;
console.log('%=', myTest);

var myPi = Math.PI; // константа Pi → myPi
console.log('myPi:', myPi);

var myRound = Math.round(89.279); // округленное значение числа 89.279 → myRound
console.log('myRound:', myRound);

var myRandom = Math.random() * 10; // случайное число между 0..10 → myRandom
console.log('myRandom:', myRandom);

var myPow = Math.pow(3, 5); // 3 в 5 степени → myPow
console.log('myPow:', myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'}; // Мама мыла раму, рама мыла маму

strObj.length = strObj.str.length;
console.log('strObj = ', strObj); // strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos); // isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace); // strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log(myStr.toUpperCase());
console.log('Any String'.toLowerCase());
