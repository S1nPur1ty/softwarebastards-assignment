import { barSchema, barObj, barObjF } from './examples/bars';
import { carSchema, carObj, carObjF } from './examples/cars';
import { personSchema, personObj, personObjF } from './examples/persons';


import GenericObjectValidator from './components/GenericObjectValidator.component';

class Main {
    constructor() {
        console.log( '-- BAR --' );
        console.log( 'Should be true: ', GenericObjectValidator(barObj, barSchema) );
        console.log( 'Should be false: ', GenericObjectValidator(barObjF, barSchema) );

        console.log( '-- PERSON --' );
        console.log( 'Should be true: ', GenericObjectValidator(personObj, personSchema) );
        console.log( 'Should be false: ', GenericObjectValidator(personObjF, personSchema) );

        console.log( '-- CAR --');
        console.log( 'Should be true: ', GenericObjectValidator(carObj, carSchema) );
        console.log( 'Should be false: ', GenericObjectValidator(carObjF, carSchema) );
    }
}

new Main();