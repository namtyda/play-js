/**
 * Необходимо реализовать нерекурсивный аналог функции flattenDeep из lodash
 * ссылка ->->-> https://lodash.com/docs/#flattenDeep
 * @param arr {Array} - вложенный массив, который надо сделать плоским
 * @returns {Array} - плоский массив, элементы располагаются в том же порядке, что и в исходном
 * вложенном массиве (примеры смотри в тестах)
 */

function flattenDeep(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr.splice.apply(arr, [i, 1, ...arr[i]]);
      i--;
    }
  };
  return arr;
}
module.exports = flattenDeep;
