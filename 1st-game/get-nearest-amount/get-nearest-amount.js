/**
 * Необходимо найти в упорядоченном по возрастанию массиве любую пару чисел, сумма которых наиболее близка заданной. Сумма должна быть минимальной
 * @param {number} amount - Заданная сумма, для которой надо найти приближенное значение
 * @param {Array} items - Упорядоченный по возрастанию массив чисел
 * @returns {number | null} - Минимальная сумма двух чисел, наиболее близкая к amount(или null, если длина массива меньше 2)
 */
function getNearestAmount(amount, items) {
  if (items.length < 2) return null;
  let result = 0;
  let left = 0;
  let right = items.length - 1;
  let sum = 0;
  while (left < right) {
    sum = items[left] + items[right];
    if (Math.abs(amount - sum) <= Math.abs(amount - result)) {
      result = sum;
    }
    if (sum > amount) {
      right--;
    } else if (sum <= amount) {
      left++;
    }
  }
  return result;
}

module.exports = getNearestAmount;
