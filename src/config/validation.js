export const required = value => value ? undefined : 'Required';
export const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters` : undefined;
export const minLength8 = minLength(8);
export const minLength5 = minLength(5);
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
export const phone = value =>
    value && !/^([+]?([\d\s*]){6,12})$/i.test(value) ?
        'Invalid phone number' : undefined;
export const alphanum = value =>
    value && !/^([\w ])*$/i.test(value) ?
        'Only numbers and letters allowed' : undefined;