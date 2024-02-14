import GenericObjectValidator from '../src/components/GenericObjectValidator.component';

describe('GenericObjectValidator', () => {
    test('Valid object should pass validation', () => {
        const schema = {
            name: 'string',
            age: 'number',
            siblings: 'array',
            metaData: 'object',
            
            active: 'boolean',
        };

        const object = {
            name: 'Logan',
            age: 35,
            siblings: ['Aaron', 'Isaac', 'David'],
            metaData: {},
            active: true,
        };

        expect( GenericObjectValidator(object, schema) ).toBe( true );
    });

    test('Missing required property "age", should fail validation', () => {
        const schema = {
            name: 'string',
            age: 'number',
            siblings: 'array',
            metaData: 'object',
            active: 'boolean',
        };

        const object = {
            
            name: 'Logan',
            // Missing age property
            siblings: ['Aaron', 'Isaac', 'David'],
            metaData: {},
            active: true,
        };

        expect( GenericObjectValidator(object, schema) ).toBe( false );
    });

    test('Different Object property in "metaData", should fail validation', () => {
        const schema = {
            name: 'string',
            age: 'number',
            siblings: 'array',
            metaData: 'object',
            active: 'boolean',
        };

        const object = {
            name: 'Logan',
            age: 35,
            siblings: ['Aaron', 'Isaac', 'David'],
            metaData: [],
            active: true,
        };

        expect( GenericObjectValidator(object, schema) ).toBe( false );
    });

    test('Different Type in "age", should fail validation', () => {
        const schema = {
            name: 'string',
            age: 'number',
            siblings: 'array',
            metaData: 'object',
            active: 'boolean',
        };

        const object = {
            name: 'Logan',
            age: '35',
            siblings: ['Aaron', 'Isaac', 'David'],
            metaData: {},
            active: true,
        };

        expect( GenericObjectValidator(object, schema) ).toBe( false );
    });
});