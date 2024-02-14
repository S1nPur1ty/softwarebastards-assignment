/**
 * Validates an object against any generic schema.
 * @param {Object} object - The object to validate.
 * @param {Object} schema - Used to validate against the object.
 * @returns {boolean|string[]} Returns true or false if the object is valid or not.
 */
const genericObjectValidator = ( object, schema ) => {
    for ( const key in schema ) {
        if ( schema[key] === undefined || !object.hasOwnProperty(key) )
            return false;

        const expectedType = schema[key];
        const keyElement = object[key];
        const keyType = Array.isArray( keyElement ) ? 'array' : typeof keyElement;
        
        if ( keyType !== expectedType )
            return false;
    }

    return true;
}

module.exports = genericObjectValidator;