const camelToSnake = require('./camel-to-snake');

describe('camelToSnake => переводит camelCase -> в snake_case', () => {
  test.each([
    ['camelToSnake', 'camel_to_snake'],
    [
      "WhatAreYouDoing, dearFriend? I'm drinkingCoffee",
      "What_are_you_doing, dear_friend? I'm drinking_coffee",
    ],
    [
      `import {CoolComponent} from './coolComponent/CoolComponent.component.ts;
         import {niceFunction} from './niceFunction/niceFunction.component.ts;
         export class GreatComponent {}`,
      `import {Cool_component} from './cool_component/Cool_component.component.ts;
         import {nice_function} from './nice_function/nice_function.component.ts;
         export class Great_component {}`,
    ],
  ])('Превращает %s => в %s', (str, result) => {
    expect(camelToSnake(str)).toBe(result);
  });
});
