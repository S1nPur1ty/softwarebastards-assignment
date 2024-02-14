const { barSchema, barObj, barObjF } = require('./examples/bars.js');
const { carSchema, carObj, carObjF } = require('./examples/cars.js');
const { personSchema, personObj, personObjF } = require('./examples/persons.js');
const genericObjectValidator = require('./genericObjectValidator.js');

const init = () => {
    console.log('-- BAR --');
    console.log('Should be true: ', genericObjectValidator(barObj, barSchema));
    console.log('Should be false: ', genericObjectValidator(barObjF, barSchema));

    console.log('-- PERSON --');
    console.log('Should be true: ', genericObjectValidator(personObj, personSchema));
    console.log('Should be false: ', genericObjectValidator(personObjF, personSchema));

    console.log('-- CAR --');
    console.log('Should be true: ', genericObjectValidator(carObj, carSchema));
    console.log('Should be false: ', genericObjectValidator(carObjF, carSchema));   
}

init();