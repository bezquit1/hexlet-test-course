/* const capitalize1 = (text) => {
    const [firstChar, ...restChar] = text;
    return `${firstChar.toUpperCase()}${restChar.join('')}`;
} */

export const capitalize = (text) => {
    if (text === ''){
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const restChar = text.slice(1);
    return `${firstChar}${restChar}`;
}