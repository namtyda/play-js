/**
 * Реализовать функцию, которая заменяет весь camelCase(мамыМылаРаму) в тексте на snake_case(мама_мыла_раму)
 * @param str {string} - строка, состоящая из латинских/кириллических символов, цифр, пробелов
 * и любых знаков препинаний
 * @returns {string} - отформатированная строка, в которой весь camelCase заменен на snake_case
 */

function camelToSnake(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && i !== 0 && (/^[A-Za-z]+$/i).test(str[i]) && (/^[A-Za-z]+$/i).test(str[i - 1])) {
      result += '_' + str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
module.exports = camelToSnake;
