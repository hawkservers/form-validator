import BooleanValidator from "../../../Validators/Types/BooleanValidator";

/**
 * Booleans
 */
test('True boolean value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = true;
  
  expect(() => validator.test()).toBeTruthy();
});

test('False boolean value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = false;
  
  expect(() => validator.test()).toBeTruthy();
});

/**
 * Numbers
 */
test('True number value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = 1;
  
  expect(() => validator.test()).toBeTruthy();
});

test('False number value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = 0;
  
  expect(() => validator.test()).toBeTruthy();
});

test('Invalid number value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = 5;
  
  expect(() => validator.test()).toThrow();
});

/**
 * Strings
 */
test('True string value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = '1';
  
  expect(() => validator.test()).toBeTruthy();
});

test('False string value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = '0';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Invalid string value', () => {
  const validator = new BooleanValidator();
  validator.field = 'test';
  validator.value = 'not a bool';
  
  expect(() => validator.test()).toThrow();
});