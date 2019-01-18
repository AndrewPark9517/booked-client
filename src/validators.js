export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const isWholeNumber = value => 
    value % 1 === 0 ? undefined : 'Must be a whole number';

export const hasTwoDecimals = value => {
    let stringValue = value.toString();
    const array = stringValue.split('.');
    return array.length < 2 || array[1].length < 3 ? undefined : "2 decimal digits"
}

export const isPositive = value => {
    return value >= 0 ? undefined : 'Must be positive';
}

export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';
