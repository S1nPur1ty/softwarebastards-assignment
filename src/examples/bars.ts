type barType = {
    name: string,
    address: string,
    drinks: object,
};

const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};


// Validates true
const barObj: barType = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

// Validates false
const barObjF: barType = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken', 
    ]
};

export { barType, barSchema, barObj, barObjF };