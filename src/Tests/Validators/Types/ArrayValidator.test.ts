import ArrayValidator from "../../../Validators/Types/ArrayValidator";

/**
 * Array
 */
test('Array value', () => {
  const validator = new ArrayValidator();
  validator.field = 'test';
  validator.value = ['foo', 'bar'];
  
  expect(() => validator.test()).toBeTruthy();
});

/**
 * String
 */
test('String value', () => {
  const validator = new ArrayValidator();
  validator.field = 'test';
  validator.value = 'foo';
  
  expect(() => validator.test()).toThrow();
});

/**
 * Number
 */
test('Number value', () => {
  const validator = new ArrayValidator();
  validator.field = 'test';
  validator.value = 5;
  
  expect(() => validator.test()).toThrow();
});

/**
 * Object
 */
test('Object value', () => {
  const validator = new ArrayValidator();
  validator.field = 'test';
  validator.value = {foo: 'bar'};
  
  expect(() => validator.test()).toThrow();
});