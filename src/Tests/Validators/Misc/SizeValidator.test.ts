import SizeValidator from "../../../Validators/Misc/SizeValidator";

/**
 * Strings
 */
test('String with the right size', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = 'sizeis7';
  validator.params = {size: 7};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Empty string', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = '';
  validator.params = {size: 5};
  
  expect(() => validator.test()).toThrow();
});

/**
 * Numbers
 */
test('Number matches size', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = 12;
  validator.params = {size: 12};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Number does not match size', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = 8;
  validator.params = {size: 12};
  
  expect(() => validator.test()).toThrow();
});

/**
 * Arrays
 */
test('Array with correct size', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = ['apple', 'banana', 'pear', 'melon', 'pineapple'];
  validator.params = {size: 5};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Array with incorrect size', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = ['apple', 'banana'];
  validator.params = {size: 5};
  
  expect(() => validator.test()).toThrow();
});

/**
 * Objects
 */
test('Object with correct amount of keys', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = {foo: 'bar', apple: 'banana', hawk: 'servers'};
  validator.params = {size: 3};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Object with incorrect amount of keys', () => {
  const validator = new SizeValidator();
  validator.field = 'test';
  validator.value = {foo: 'bar'};
  validator.params = {size: 3};
  
  expect(() => validator.test()).toThrow();
});