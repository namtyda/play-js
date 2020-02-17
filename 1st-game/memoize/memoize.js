/**
 * Реализовать функцию memoize, которая принимает на вход функцию и возвращает
 * её "мемоизированный" аналог
 * @param func {Function} - функция, которую надо мемоизировать
 * @returns {Function} - мемоизированный аналог func
 *
 * Здесь под мемоизированной функцией будет пониматься функция, которая повторно вызывается,
 * только если изменились передаваемые в неё параметры.
 * Пример:
 * function memoizedCounter(num){
 *      return num*num;
 * }
 * эта функция будет вызываться, только если изменилось значение передаваемого параметра num:
 * memoizedCounter(3) => 3*3;
 * memoizedCounter(3) => не вызывается
 * memoizedCounter(4) => 4*4
 * Если передаваемый параметр = объект, сравнение должно проходить по значению, а не по ссылке
 */

function memoize(func) {
  const memo = new Map();
  return function (args) {
    if (!Array.isArray(args) && typeof args !== 'object' && args !== null) {
      if (memo[args]) {
        return memo[args]
      } else {
        return memo[args] = func(args);
      }
    } else if (Array.isArray(args) && args !== null) {
      let key = JSON.stringify(args)
      if (memo[key]) {
        return memo[key];
      } else {
        return memo[key] = func(args);
      }
    } else if (!Array.isArray(args) && typeof args === 'object' && args !== null) {
      let key = JSON.stringify(args)
      if (memo[key]) {
        return memo[key]
      } else {
        return memo[key] = func(args)
      }
    }
  }
}

module.exports = memoize;
