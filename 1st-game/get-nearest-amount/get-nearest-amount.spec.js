const getNearestAmount = require('./get-nearest-amount');

describe('getNearestAmount => возвращает массив из двух чисел, сумма которых наиболее близка к заданной', () => {
  const items = [-4, -1, 0, 4, 7, 10, 11, 18, 21, 27, 31];

  test('длина массива меньше 2 => вернет null', () => {
    expect(getNearestAmount(10, [1])).toBeNull();
  });

  test.each([
    [2, 3],
    [11, 11],
    [16, 15],
    [200, 58],
  ])('Сумма %i => вернет минимальную ближайшую сумму %i', (sum, result) => {
    expect(getNearestAmount(sum, items)).toEqual(result);
  });
});
