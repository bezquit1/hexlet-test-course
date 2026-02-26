/* const set1 = (obj, key, value) => {
    if (obj[key] === undefined) {
        return obj[key] = value;
    }
    return obj;
} */

export const set = (obj, key, value) => {
    if (!Object.hasOwn(obj, key)) {
        obj[key] = value;    
    }
    return obj;
}