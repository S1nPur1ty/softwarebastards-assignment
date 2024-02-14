/**
 * Validates an object against a generic schema.
 * @param {Object} object - The object to validate.
 * @param {T} schema - Used to validate against the object.
 * @returns {boolean} Returns true if the object is valid, otherwise false.
 */
const genericObjectValidator = <T extends Record<string, string>>(object: Record<string, any>, schema: T): boolean => {
    for ( const key in schema ) {
        if ( schema[key] === undefined || !object.hasOwnProperty(key) ) {
            return false;
        }

        const expectedType: string = schema[key];
        const keyElement: any = object[key];
        const keyType: string = Array.isArray(keyElement) ? 'array' : typeof keyElement;

        if ( keyType !== expectedType ) {
            return false;
        }
    }
    
    return true;
};

export default genericObjectValidator;