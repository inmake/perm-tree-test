

/**
 * проверяет есть ли параметр в объекте
 * @returns {boolean}
 */
function has(_object, _key) {
    return Object.prototype.hasOwnProperty.call(_object, _key)
}

/**
 * Клонирует объект
 * @param _object
 * @returns {any}
 */
function cloneObject(_object) {
    return JSON.parse(JSON.stringify(_object))
}


/**
 * для склонения слов к числительным
 * @param number - число
 * @param words - массив из трех [числительное для одного, числительное для 2х, числительное для 5ти] (н-р )[заказ,заказа,заказов]
 * @returns {*}
 */
function pluralForm(number, words) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]];
}



export {
    has,
    cloneObject,
    pluralForm,
}
