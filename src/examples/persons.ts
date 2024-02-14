type personType = {
    name: string,
    age: number,
    siblings?: object,
    metaData?: object,
    active: boolean,
};

const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

// Validates true
const personObj: personType = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjF: personType = {
    name: 'James',
    age: 25,
    active: true,
};

export { personType, personSchema, personObj, personObjF };