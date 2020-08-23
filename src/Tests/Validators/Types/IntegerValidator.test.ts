import IntegerValidator from "../../../Validators/Types/IntegerValidator";

/**
 * Strings
 */
test('Valid integer from string', () => {
  const validator = new IntegerValidator();
  validator.field = 'test';
  validator.value = '5';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Invalid integer from string', () => {
  const validator = new IntegerValidator();
  validator.field = 'test';
  validator.value = 'not_a_number';
  
  expect(() => validator.test()).toThrow();
});

/**
 * Integer
 */
test('Valid integer', () => {
  const validator = new IntegerValidator();
  validator.field = 'test';
  validator.value = 5;
  
  expect(() => validator.test()).toBeTruthy();
});