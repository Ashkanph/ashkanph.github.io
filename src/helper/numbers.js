/**
 * A function to convert Latin numbers to Persian numbers
 *
 * @param {string | number} s - the given string
 *
 * @returns {string} An string with coverted latin numbers to Persian
 */
export function latToPerNumbers(s) {
    if (s == null) {
        console.log('The string you passed to LatToPerNumbers was undefined!');
        return '';
    }

    if (typeof s !== 'string')
        s = s.toString();

    var pNums = [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ];
    for (let j = 0; j < 10; j++)
        if (s.indexOf(j.toString()) > -1) {
            var regex = new RegExp(j, 'g');
            s = s.replace(regex, pNums[j]);
        }
    return s;
}
