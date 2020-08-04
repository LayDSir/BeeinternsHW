// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
  const keys = Object.keys(inputObject);
  const values = Object.values(inputObject);
  let newObj = new Object;
  newObj[values[0]] = keys[0];
  return newObj;
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }

// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным

const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
  const keys = Object.keys(inputObject);
  const result = {};
  keys.forEach(function(key) {
    let tempValue = inputObject[key];
    result[tempValue] = key;
  });
  return result;
};

const result2 = resolve2(secondObject);
console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(result2); 
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

function centuryFromYear(key) {
  let century;
  Math.floor(key % 100) == '00' ? century = Math.floor(key / 100) : century = Math.floor( key / 100) + 1;
  console.log(century);
}

const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 17.
