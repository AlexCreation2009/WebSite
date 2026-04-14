(function (global) {
  'use strict';

  var MyLibrary = {};

  /**
   * Версия библиотеки.
   * @type {string}
   */
  MyLibrary.version = '1.0.0';

  /**
   * Приветствует пользователя.
   * @param {string} name - Имя пользователя.
   * @returns {string} Сообщение.
   */
  MyLibrary.greet = function (name) {
    return 'Hello, ' + (name || 'Guest') + '!';
  };

  /**
   * Складывает два числа.
   * @param {number} a - Первое число.
   * @param {number} b - Второе число.
   * @returns {number} Сумма.
   */
  MyLibrary.sum = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    return a + b;
  };

  // Экспорт в глобальную область
  global.MyLibrary = MyLibrary;

})(typeof window !== 'undefined' ? window : global);
